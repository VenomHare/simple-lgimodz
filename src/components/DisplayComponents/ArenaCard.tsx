import { Arena } from "@/lib/types";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export function ArenaCard({arena}:{arena: Arena}) {
    return (
        <Card key={arena.id} className="group">
            <CardContent className="p-0">
                <div className="aspect-[4/3] rounded-t-lg overflow-visible">
                    <img
                        src={arena.image || "/placeholder.svg"}
                        alt={arena.name}
                        className="w-full h-full object-cover"
                        width={1024}
                        height={1024}
                    />
                </div>
                <div className="p-3">
                    <h3 className="font-semibold text-xl text-balance ">{arena.name}</h3>
                </div>
            </CardContent>
        </Card>
    )
}