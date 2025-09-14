import { Wrestler } from "@/lib/types";
import { Card, CardContent } from "../ui/card";

export function WrestlerCard({ wrestler }: { wrestler: Wrestler }) {
    return (<Card key={wrestler.id} className="group hover:scale-105 transition-transform duration-200">
        <CardContent className="p-4">
            <div className="aspect-[3/4] rounded-lg overflow-visible mb-3">
                <img
                    src={wrestler.image || "/placeholder.svg"}
                    alt={wrestler.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <h3 className="font-semibold text-sm text-center text-balance">{wrestler.name}</h3>
            {/* <p className="text-xs text-muted-foreground text-center mt-1">{wrestler.category}</p> */}
        </CardContent>
    </Card>
    )
}