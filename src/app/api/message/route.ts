import { createDiscordEmbed } from "@/lib/utils";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    try {
        const { email, discord, patchId, method } = await req.json();
        
        if (method == "upi") {
            await axios.post("https://discord.com/api/webhooks/1388867597239582730/uffOZ-pyuogKZwfQsASW8oQHD4puOTL7yhk8cjpAzAHeWwlE3gUOYl0n1G8U3eHGBDGe", {
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
            await axios.post("https://discord.com/api/webhooks/1388868603893387395/6Hon4pO7wo4VstHKNETCW2dXsq8Ns2ZY5IPbgi283HF_9h4l3RlpwqdZ4i8k9QhJyZC5", {
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