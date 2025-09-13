import axios from "axios";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getShowcaseVideos = async (YT_SHOWCASE_PLAYLIST_ID: string) => {
    try {
        const response = await axios.get(`/api/showcase?playlistId=${YT_SHOWCASE_PLAYLIST_ID}`, {
            headers: {
                "Accept": "application/xml"
            }
        });
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "application/xml");

        const items = Array.from(xmlDoc.getElementsByTagName("entry")).map((entry, i) => ({
            id: i + 1,
            title: entry.getElementsByTagName('title')[0]?.innerHTML ?? "",
            url: entry.getElementsByTagName('link')[0]?.getAttribute("href") ?? "",
            thumbnail: entry.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url') ?? ""
        }));
        return items;
    } catch (error) {
        console.error("Error fetching showcase videos:", error);
        return [];
    }
};

interface EmbedField {
    name: string;
    value: string | number;
    inline?: boolean;
}

export const createDiscordEmbed = (title: string, fields: EmbedField[], color: number = 0x00b0f4) => {
    const time = new Date().toISOString();
    return {
        author: {
            name: "LGI Modz",
            icon_url: "https://lgimodz.vercel.app/lgimodz.png"
        },
        title,
        fields,
        color,
        footer: {
            text: `Time`
        },
        timestamp: time
    };
};