
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Play, Users, MapPin, Star, Heart, Check, Crown, Zap } from "lucide-react"
import { getShowcaseVideos } from "@/lib/utils"
import { Credits, LimitedMetadata } from "@/configs/metadata"
import { LimitedPricing } from "@/configs/pricing"
import { PatchDetails, Videos } from "@/lib/types"
import { LimitedArenas } from "@/configs/arenas"
import { ArenaCard } from "../DisplayComponents/ArenaCard"
import { ShowcaseVideo } from "../DisplayComponents/ShowcaseVideo"
import { WrestlerCard } from "../DisplayComponents/WrestlerCard"
import { LimitedRoster } from "@/configs/roster"
import PaymentPopup from "../PaymentPopup"
import Link from "next/link"


const screenshots = Array.from({ length: LimitedMetadata.screenshots_count }).map((_, i) => `/${LimitedMetadata.id}/screenshots/${i + 1}.webp`)

export function LimitedPage() {
    const [currentScreenshot, setCurrentScreenshot] = useState(0)
    const [showAllWrestlers, setShowAllWrestlers] = useState(false)
    const [showAllArenas, setShowAllArenas] = useState(false)
    const [videos, setVideos] = useState<Videos[]>([])
    const [showCredits, setShowCredits] = useState(false)
    const [PaymentScreen, setPaymentScreen] = useState(false);
    const [currentPatch, setCurrentPatch] = useState<PatchDetails>({
        id: LimitedMetadata.id,
        name: LimitedMetadata.label,
        description: LimitedMetadata.description,
        thumbnail: LimitedMetadata.poster,
        price: LimitedPricing.originalPriceUSD,
        hasDiscount:  LimitedPricing.hasDiscount,
        discountPrice: LimitedPricing.discountedPriceUSD
    })

    const nextScreenshot = () => {
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }

    const prevScreenshot = () => {
        setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }

    useEffect(() => {
        const main = async () => {
            const data = await getShowcaseVideos(LimitedMetadata.playlist_id)
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
                {/* Screenshot Carousel */}
                <section className="relative">
                    <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-card">
                        <img
                            src={screenshots[currentScreenshot] || "/placeholder.svg"}
                            alt={`Screenshot ${currentScreenshot + 1}`}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Navigation Buttons */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                            onClick={prevScreenshot}
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                            onClick={nextScreenshot}
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {screenshots.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentScreenshot ? "bg-primary" : "bg-white/50"
                                        }`}
                                    onClick={() => setCurrentScreenshot(index)}
                                />
                            ))}
                        </div>

                        <Dialog open={showCredits} onOpenChange={setShowCredits}>
                            <DialogTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                                >
                                    <Heart className="w-4 h-4 mr-2" />
                                    Credits
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl">Credits & Acknowledgments</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 mt-4">
                                    <p className="text-muted-foreground">
                                        Special thanks to all the talented individuals who made this patch possible:
                                    </p>
                                    <div className="grid gap-3">
                                        {Credits.map((person, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                                    <Heart className="w-4 h-4 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{person.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{person.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-center pt-4 border-t">
                                        <p className="text-sm text-muted-foreground">
                                            And a huge thanks to the WWE HCTP modding community for their continued support!
                                        </p>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                {/* Patch Info */}
                <section className="text-center space-y-6">
                    <div className="space-y-4">
                        <Badge variant="secondary" className="text-lg px-4 py-2">
                            <Star className="w-4 h-4 mr-2" />
                            Featured Mod
                        </Badge>
                        <h1 className="text-5xl font-bold text-balance">{LimitedMetadata.label}</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                            {LimitedMetadata.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                            <Users className="w-4 h-4 text-primary" />
                            <span>{LimitedMetadata.wrestlers_count} Wrestlers</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{LimitedArenas.length} Arenas</span>
                        </div>
                        <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                            <Play className="w-4 h-4 text-primary" />
                            <span>Enhanced Graphics</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full flex flex-col items-center justify-center gap-3">
                        {
                            LimitedPricing.hasDiscount ?
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-lg line-through text-muted-foreground">${LimitedPricing.originalPriceUSD}</span>
                                        <span className="text-3xl font-bold text-primary">${LimitedPricing.discountedPriceUSD}</span>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <span className="text-sm line-through text-muted-foreground">₹{LimitedPricing.originalPriceINR}</span>
                                        <span className="text-lg font-semibold">₹{LimitedPricing.discountedPriceINR}</span>
                                    </div>
                                    <p className="text-sm text-center text-green-600 font-medium">
                                        Save ${(LimitedPricing.originalPriceUSD - LimitedPricing.discountedPriceUSD).toFixed(2)} / ₹
                                        {LimitedPricing.originalPriceINR - LimitedPricing.discountedPriceINR}
                                    </p>
                                </div>
                                :
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold">${LimitedPricing.originalPriceUSD}</div>
                                    <div className="text-lg text-muted-foreground">₹{LimitedPricing.originalPriceINR}</div>
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
                            Purchase {LimitedMetadata.label}
                        </Button>
                        <div className="w-full md:w-4/5 lg:w-2/5 flex items-center justify-center gap-3">
                            <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                            <div className="text-muted-foreground/40 font-playwrite">or</div>
                            <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                        </div>
                        <Link href={LimitedMetadata.patreonLink} className="w-full md:w-4/5 lg:w-2/5" target="blank">
                            <Button
                                className={`w-full bg-yellow-700 hover:bg-yellow-500/90`}
                                size="lg"
                            >
                                Download with Patreon
                            </Button>
                        </Link>
                    </div>
                </section>
                {/* Wrestlers Section */}
                <section>
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4">Complete Roster</h2>
                        <p className="text-muted-foreground text-lg">{LimitedMetadata.wrestlers_count} legendary wrestlers from different eras of WWE history</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                        {LimitedRoster.slice(0, 12).map((wrestler) => (
                            <WrestlerCard wrestler={wrestler} key={wrestler.id} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Dialog open={showAllWrestlers} onOpenChange={setShowAllWrestlers}>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="lg">
                                    <Users className="w-4 h-4 mr-2" />
                                    View All {LimitedRoster.length} Wrestlers
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>Complete Wrestler Roster</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                                    {LimitedRoster.map((wrestler) => (
                                        <WrestlerCard wrestler={wrestler} key={wrestler.id} />
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                {/* Arenas Section */}
                <section>
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4">Epic Arenas</h2>
                        <p className="text-muted-foreground text-lg">
                            {LimitedArenas.length} meticulously crafted wrestling venues with authentic atmosphere
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {LimitedArenas.slice(0, 6).map((arena) => (
                            <ArenaCard arena={arena} key={arena.id} />
                        ))}
                    </div>

                    <div className="text-center">
                        <Dialog open={showAllArenas} onOpenChange={setShowAllArenas}>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="lg">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    View All {LimitedArenas.length} Arenas
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>All Wrestling Arenas</DialogTitle>
                                </DialogHeader>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                    {LimitedArenas.map((arena) => (
                                        <ArenaCard arena={arena} key={arena.id} />
                                    ))}
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                {/* Videos Section */}
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
