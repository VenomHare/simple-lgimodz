
"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Play, Users, MapPin, Star, Heart } from "lucide-react"
import { getShowcaseVideos } from "@/lib/utils"
import { Credits, FantasyMetadata } from "@/configs/metadata"
import { Videos } from "@/lib/types"
import { ArenaCard } from "../DisplayComponents/ArenaCard"
import { ShowcaseVideo } from "../DisplayComponents/ShowcaseVideo"
import { WrestlerCard } from "../DisplayComponents/WrestlerCard"
import PaymentPopup, { PatchDetails } from "../PaymentPopup"
import { FantasyRoster } from "@/configs/roster"
import { FantasyPricing, KingdomPricing } from "@/configs/pricing"
import { FantasyArenas } from "@/configs/arenas"
import Image from "next/image"






const screenshots = Array.from({length: FantasyMetadata.screenshots_count}).map((_, i) => `/${FantasyMetadata.id}/screenshots/${i+1}.webp`)



export function FantasyPage() {
    const [currentScreenshot, setCurrentScreenshot] = useState(0)
    const [showAllWrestlers, setShowAllWrestlers] = useState(false)
    const [showAllArenas, setShowAllArenas] = useState(false)
    const [videos, setVideos] = useState<Videos[]>([])
    const [showCredits, setShowCredits] = useState(false)
    const [PaymentScreen, setPaymentScreen] = useState(false);
    const [currentPatch, setCurrentPatch] = useState<PatchDetails>({
        id: FantasyMetadata.id,
        name: FantasyMetadata.label,
        description: FantasyMetadata.description,
        thumbnail: FantasyMetadata.poster,
        price: KingdomPricing.priceUSD
    })

    const nextScreenshot = () => {
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }

    const prevScreenshot = () => {
        setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }

    useEffect(() => {
        const main = async () => {
            const data = await getShowcaseVideos(FantasyMetadata.playlist_id)
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
                <div className="w-full flex justify-center"> 
                    <Image src={FantasyMetadata.poster} alt="Fantasy Edition" width={175} height={250}/>
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

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{FantasyMetadata.wrestlers_count} Wrestlers</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{FantasyArenas.length} Arenas</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                            <Play className="w-4 h-4 text-primary" />
                            <span>Enhanced Graphics</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full flex flex-col items-center justify-center gap-3">
                        <div className="space-y-1">
                            <div className="text-3xl font-bold">${FantasyPricing.priceUSD}</div>
                            <div className="text-lg text-muted-foreground">₹{FantasyPricing.priceINR}</div>
                        </div>
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
