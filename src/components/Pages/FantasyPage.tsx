
"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import PaymentPopup from "../PaymentPopup"
import { FantasyPricing } from "@/configs/pricing"
import { FantasyMetadata } from "@/configs/metadata"
import { useState } from "react"
import { Star } from "lucide-react"
import Link from "next/link"
import { PatchDetails } from "@/lib/types"







export function FantasyPage() {
    const [PaymentScreen, setPaymentScreen] = useState(false);
    const [currentPatch] = useState<PatchDetails>({
        id: FantasyMetadata.id,
        name: FantasyMetadata.label,
        description: FantasyMetadata.description,
        thumbnail: FantasyMetadata.poster,
        price: FantasyPricing.originalPriceUSD,
        hasDiscount: FantasyPricing.hasDiscount,
        discountPrice: FantasyPricing.discountedPriceUSD
    })

    return (<>
        <PaymentPopup
            isOpen={PaymentScreen}
            onClose={() => {
                setPaymentScreen(false);
            }}
            patchDetails={currentPatch}
        />

        <div className="min-h-screen max-w-[85svw] lg:max-w-[75svw] xl:max-w-[60svw] mx-auto my-0 bg-background">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 space-y-12">
                <div className="w-full flex justify-center">
                    <img src={FantasyMetadata.poster} alt="Fantasy Edition" width={175} height={250} />
                </div>

                {/* Patch Info */}
                <section className="text-center space-y-6">
                    <div className="space-y-4">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            <Star className="w-4 h-4 mr-2" />
                            Featured Mod
                        </Badge>
                        <h1 className="text-5xl font-bold text-balance">{FantasyMetadata.label}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                            {FantasyMetadata.description}
                        </p>
                    </div>

                </section>

                <section>
                    <div className="w-full flex flex-col items-center justify-center gap-3">
                        {
                            FantasyPricing.hasDiscount ?
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-lg line-through text-muted-foreground">${FantasyPricing.originalPriceUSD}</span>
                                        <span className="text-3xl font-bold text-green-500">${FantasyPricing.discountedPriceUSD}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-sm line-through text-muted-foreground">₹{FantasyPricing.originalPriceINR}</span>
                                        <span className="text-lg font-semibold">₹{FantasyPricing.discountedPriceINR}</span>
                                    </div>
                                    {/* <p className="text-sm text-center text-green-600 font-medium">
                                        Save ${(FantasyPricing.originalPriceUSD - FantasyPricing.discountedPriceUSD).toFixed(2)} / ₹
                                        {FantasyPricing.originalPriceINR - FantasyPricing.discountedPriceINR}
                                    </p> */}
                                </div>
                                :
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold">${FantasyPricing.originalPriceUSD}</div>
                                    <div className="text-lg text-muted-foreground">₹{FantasyPricing.originalPriceINR}</div>
                                </div>
                        }
                        <Button
                            className={`w-full md:w-4/5 lg:w-2/5 bg-primary hover:bg-primary/90`}
                            variant={"default"}
                            size="lg"
                            onClick={() => {
                                setPaymentScreen(true);
                            }}
                        >
                            Pre Order {FantasyMetadata.label}
                        </Button>
                        <div className="w-full md:w-4/5 lg:w-2/5 flex items-center justify-center gap-3">
                            <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                            <div className="text-muted-foreground/40 font-playwrite">or</div>
                            <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                        </div>
                        <Link href={FantasyMetadata.patreonLink} className="w-full md:w-4/5 lg:w-2/5" target="blank">
                            <Button
                                className={`w-full bg-yellow-700 hover:bg-yellow-500/90`}
                                size="lg"
                            >
                                Pre Order with Patreon
                            </Button>
                        </Link>
                    </div>
                </section>
                <div className="w-full flex justify-center my-[20dvh]">
                    <p className="text-balance text-center text-5xl font-playwrite">Comming Soon</p>
                </div>
            </main>
        </div>
    </>
    )
}
