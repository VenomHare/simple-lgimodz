import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = req.nextUrl;
        const playlistId = searchParams.get("playlistId") || "PLcz4DKrECTOfWuM_cncBCYxqC_7mBrS1H"; // Default to a known playlist ID if none is provided
        const ytFeedUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`;
        const response = await axios.get(ytFeedUrl, {
            headers: {
                "Content-Type": "application/xml",
                "Accept": "application/xml",
            }
        });
        if (response.status !== 200) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return new NextResponse(response.data, {
            headers : {
                "Content-Type": "application/xml",
            }
        })
    }
    catch (error) {
        console.error("Failed to fetch showcase videos:", error);
        return NextResponse.json({ message: "Failed to fetch showcase videos" }, { status: 500 });
    }
}