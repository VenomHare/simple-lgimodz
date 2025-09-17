import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { endpoint_uri, fetchAccessToken } from "@/lib/server";
import { FantasyPricing, EvolutionTiers, KingdomPricing, LimitedPricing } from "@/configs/pricing";

//Paypal Payment Processing 
const AvailablePatches = [
    {
        id: "limited",
        price: LimitedPricing.hasDiscount ? LimitedPricing.discountedPriceUSD : LimitedPricing.originalPriceUSD
    },
    {
        id: "evolution_tier1",
        price: EvolutionTiers[0].hasDiscount ? EvolutionTiers[0].discountedPriceUSD : EvolutionTiers[0].originalPriceUSD
    },
    {
        id: "evolution_tier2",
        price: EvolutionTiers[1].hasDiscount ? EvolutionTiers[1].discountedPriceUSD : EvolutionTiers[1].originalPriceUSD
    },
    {
        id: "kingdom",
        price: KingdomPricing.hasDiscount ? KingdomPricing.discountedPriceUSD : KingdomPricing.originalPriceUSD
    },
    {
        id: "fantasy",
        price: FantasyPricing.hasDiscount ? FantasyPricing.discountedPriceUSD : FantasyPricing.originalPriceUSD
    }
]


const HOST = process.env.NEXT_PUBLIC_HOST_URL || "https://lgimodz.vercel.app"

export const POST = async (req: NextRequest) => {
    const origin = req.headers.get("origin");

    if (!origin || origin !== req.nextUrl.origin) {
        return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    try {
        const { patchId, name, email, discordId } = await req.json();

        if (!patchId) {
            return NextResponse.json({
                message: "Patch Id Not Found"
            }, { status: 400 });
        }

        const patch = (patchId as string).startsWith("evolution") ? "evolution" : patchId

        const data = AvailablePatches.find(p => p.id == patchId);

        if (data == undefined) {
            console.warn("Data Not Found");
            return NextResponse.json({ message: "Data Not Found" }, { status: 500 })
        }

        const am = data.price.toFixed(2);
        const order_data = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: am,
                        breakdown: {
                            item_total: {
                                currency_code: "USD",
                                value: am
                            },
                            shipping: {
                                currency_code: "USD",
                                value: (0).toFixed(2)
                            }
                        }
                    },
                    items: [
                        {
                            name,
                            quantity: "1",
                            unit_amount: {
                                currency_code: "USD",
                                value: am
                            },

                            // Change it here
                            image_url: `https://lgimodz.vercel.app/poster/${patch}.png`,
                            url: `${HOST}/patches/${patch}`,
                            category: "DIGITAL_GOODS"
                        }
                    ]
                },
            ],
            application_context: {
                brand_name: "LGI Modz",
                shipping_preference: "NO_SHIPPING",
                user_action: "PAY_NOW"
            }
        };

        const access_token = await fetchAccessToken();
        const order = await axios.post(`${endpoint_uri}/v2/checkout/orders`, order_data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`,
                "Paypal-Request-Id": crypto.randomUUID(),
                "PayPal-Client-Metadata-Id": `{ "email": "${email}", "dicordId": "${discordId}" }`
            }
        })

        if (!order.data.id) {
            throw new Error("Invalid response from PayPal: Missing order ID");
        }

        return NextResponse.json({
            id: order.data.id
        })

    }
    catch (err) {
        if (err instanceof AxiosError) {
            console.log("Response", err.response?.data);
        }
        console.error(err);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 500
        })
    }
}