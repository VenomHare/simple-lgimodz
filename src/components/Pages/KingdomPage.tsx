
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Play, Users, MapPin, Star, Heart, Check, Crown, Zap, Fan } from "lucide-react"
import { getShowcaseVideos } from "@/lib/utils"
import { Credits, FantasyMetadata, KingdomMetadata, LimitedMetadata } from "@/configs/metadata"
import { PatchDetails, Videos } from "@/lib/types"
import { ArenaCard } from "../DisplayComponents/ArenaCard"
import { ShowcaseVideo } from "../DisplayComponents/ShowcaseVideo"
import { WrestlerCard } from "../DisplayComponents/WrestlerCard"
import PaymentPopup from "../PaymentPopup"
import { KingdomPricing } from "@/configs/pricing"
import { KingdomArenas } from "@/configs/arenas"
import { KingdomRoster } from "@/configs/roster"
import Link from "next/link"




const screenshots = Array.from({ length: KingdomMetadata.screenshots_count }).map((_, i) => `/${KingdomMetadata.id}/screenshots/${i + 1}.webp`)


export function KingdomPage() {
    const [videos, setVideos] = useState<Videos[]>([])
    const [PaymentScreen, setPaymentScreen] = useState(false);
    const [currentPatch] = useState<PatchDetails>({
        id: KingdomMetadata.id,
        name: KingdomMetadata.label,
        description: KingdomMetadata.description,
        thumbnail: KingdomMetadata.poster,
        price: KingdomPricing.originalPriceUSD,
        hasDiscount:  KingdomPricing.hasDiscount,
        discountPrice: KingdomPricing.discountedPriceUSD
    })

 
    useEffect(() => {
        const main = async () => {
            const data = await getShowcaseVideos(KingdomMetadata.playlist_id)
            setVideos(data);
        }
        main();
    }, [])


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
               
                {/* Patch Info */}
                <section className="text-center space-y-6">
                    <div className="space-y-4">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            <Star className="w-4 h-4 mr-2" />
                            Featured Mod
                        </Badge>
                        <h1 className="text-5xl font-bold text-balance">{KingdomMetadata.label}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                            {KingdomMetadata.description}
                        </p>
                    </div>

                </section>

                <section>
                    <div className="w-full flex flex-col items-center justify-center gap-3">
                        {
                            KingdomPricing.hasDiscount ?
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-lg line-through text-muted-foreground">${KingdomPricing.originalPriceUSD}</span>
                                        <span className="text-3xl font-bold text-primary">${KingdomPricing.discountedPriceUSD}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-sm line-through text-muted-foreground">₹{KingdomPricing.originalPriceINR}</span>
                                        <span className="text-lg font-semibold">₹{KingdomPricing.discountedPriceINR}</span>
                                    </div>
                                    <p className="text-sm text-center text-green-600 font-medium">
                                        Save ${(KingdomPricing.originalPriceUSD - KingdomPricing.discountedPriceUSD).toFixed(2)} / ₹
                                        {KingdomPricing.originalPriceINR - KingdomPricing.discountedPriceINR}
                                    </p>
                                </div>
                                :
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold">${KingdomPricing.originalPriceUSD}</div>
                                    <div className="text-lg text-muted-foreground">₹{KingdomPricing.originalPriceINR}</div>
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
                            Pre Order {KingdomMetadata.label}
                        </Button>
                        <div className="w-full md:w-4/5 lg:w-2/5 flex items-center justify-center gap-3">
                            <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                            <div className="text-muted-foreground/40 font-playwrite">or</div>
                            <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                        </div>
                        <Link href={KingdomMetadata.patreonLink} className="w-full md:w-4/5 lg:w-2/5" target="blank">
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
                <section>
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4">Showcase Videos</h2>
                        <p className="text-muted-foreground text-lg">
                            Watch the patch in action with gameplay footage and feature highlights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {videos.map((video) => (
                            <ShowcaseVideo video={video} key={video.id} />
                        ))}
                    </div>
                    {
                        videos.length == 0 && <div className="w-full flex justify-center my-4">
                            <p className="text-lg font-semibold text-gray-400 font-schibsted text-center text-balance mt-3" >
                                Loading Showcase Videos
                            </p>
                        </div>
                    }
                </section>
            </main>
        </div>
    </>
    )
}
