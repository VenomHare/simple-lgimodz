import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { endpoint_uri, fetchAccessToken, supabase } from "@/lib/server";
import { createDiscordEmbed } from "@/lib/utils";

export const POST = async (req: NextRequest) => {

    try {
        const access_token = await fetchAccessToken();
        const { orderId, email, discord, patch, platform } = await req.json();

        if (!orderId) {
            return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
        }

        const response = await axios.post(`${endpoint_uri}/v2/checkout/orders/${orderId}/capture`, {}, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`,
            },
        })
        const captureData = response.data.purchase_units[0].payments.captures[0];
        await axios.post("https://discord.com/api/webhooks/1383788124710244372/CnVquMC-3ri36jQ-Ux4VudaW7kcFJmPZkn0oJxexLct8ALJcKFAj45yhu5Klv0vB5ywG", {
            content: "<@&1313074475914362932>",
            embeds: [
                createDiscordEmbed("Payment Recieved", [
                    {
                        name: "Payment Id",
                        value: captureData.id,
                        inline: true
                    },
                    {
                        name: "Order Id",
                        value: orderId,
                        inline: true
                    },
                    {
                        name: "Email",
                        value: email
                    },
                    {
                        name: "Discord",
                        value: discord,
                    },
                    {
                        name: "Platform",
                        value: platform,
                        inline: true
                    },
                    {
                        name: "Patch Id",
                        value: patch,
                        inline: true
                    },
                ])
            ]
        })

        try 
        {
            const { data: getUser, error } = await supabase
                .from("User")
                .select("*")
                .eq("emailId", email)
                .single() // Use single() if you expect only one result

            if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
                throw error
            }

            let userId;

            if (getUser) {
                userId = getUser.id;
            } else {
                // Create new user
                const { data: newUser, error: userError } = await supabase
                    .from("User")
                    .insert({
                        emailId: email,
                        discordId: discord,
                    })
                    .select()
                    .single()

                if (userError) {
                    throw userError
                }

                userId = newUser.id;
            }

            // Insert purchase
            const { data: Purchase } = await supabase
                .from("Purchases")
                .insert({
                    paymentId: captureData.id,
                    amount: parseInt(captureData.amount.value),
                    method: "wallet",
                    userId: userId,
                    patchId: patch,
                    platform: platform,
                    delivered: false
                })
                .select()
                .single()

            return NextResponse.json({
                message: "CAPTURED",
                paymentId: `WWE${Purchase.id.toString().padStart(4, 0)}`//LGI-WWE-349
            })
        }
        catch {
            return NextResponse.json({
                message: "CAPTURED",
            })
        }
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 500
        })
    }
}