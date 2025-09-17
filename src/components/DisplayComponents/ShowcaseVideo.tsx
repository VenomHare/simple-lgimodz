import { Videos } from "@/lib/types";
import { Card, CardContent } from "../ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

export function ShowcaseVideo({ video }: { video: Videos }) {
    return (
        <Card key={video.id} className="group cursor-pointer hover:scale-105 transition-transform duration-200">
            <CardContent className="p-0">
                <div
                    className="relative aspect-video rounded-t-lg overflow-hidden"
                    onClick={() => window.open(video.url, "_blank")}
                >
                    <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        width={1920}
                        height={1080}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="font-semibold text-lg text-balance">{video.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">Click to watch on YouTube</p>
                </div>
            </CardContent>
        </Card>

    )
}