import { Arena } from "@/lib/types";
import { Card, CardContent } from "../ui/card";

export function ArenaCard({arena}:{arena: Arena}) {
    return (
        <Card key={arena.id} className="group">
            <CardContent className="p-0">
                <div className="aspect-[4/3] rounded-t-lg overflow-hidden">
                    <img
                        src={arena.image || "/placeholder.svg"}
                        alt={arena.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-3">
                    <h3 className="font-semibold text-balance">{arena.name}</h3>
                </div>
            </CardContent>
        </Card>
    )
}