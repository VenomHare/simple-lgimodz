import { createDiscordEmbed } from "@/lib/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const UPI_WEBHOOK = process.env.UPI_WEBHOOK!;
const PAYPAL_WEBHOOK = process.env.PAYPAL_WEBHOOK!;

export const POST = async (req: NextRequest) => {
    try {
        const { email, discord, patchId, method } = await req.json();
        if (method == "upi") {
            await axios.post(UPI_WEBHOOK, {
                content: "<@&1313074475914362932>",
                embeds: [
                    createDiscordEmbed("Button Clicked", [
                        {
                            name: "Email ",
                            value: String(email || "Not Found"),
                        },
                        {
                            name: "Discord",
                            value: String(discord || "Not Found"),
                            inline: true
                        },
                        {
                            name: "Patch Id",
                            value: String(patchId || "Not Found"),
                            inline: true
                        },
                    ])
                ]
            })
        }
        else {
            await axios.post(PAYPAL_WEBHOOK, {
                content: "<@&1313074475914362932>",
                embeds: [
                    createDiscordEmbed("Button Clicked", [
                        {
                            name: "Email ",
                            value: String(email || "Not Found"),
                        },
                        {
                            name: "Discord",
                            value: String(discord || "Not Found"),
                            inline: true
                        },
                        {
                            name: "Patch Id",
                            value: String(patchId || "Not Found"),
                            inline: true
                        },
                    ])
                ]
            })
        }
    }
    catch(err){
        console.log("Failed to send message to discord");
        console.log(err);
    }
    return NextResponse.json({});

}