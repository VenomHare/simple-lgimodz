"use client";
import { Archive, Palette, Shapes, Sliders, SlidersHorizontal, WandSparkles } from "lucide-react";
import HomePageListItem from "../HomeComponents/HomePageListItem";
import { Button } from "../ui/button";
import ReviewBlock from "../HomeComponents/ReviewBlock";
import Footer from "../Footer";
import ProductListItem from "../HomeComponents/ProductListItem";
import { DeluxeMetadata, EvolutionMetadata, LimitedMetadata } from "@/configs/metadata";
import { useState } from "react";
import PaymentPopup from "../PaymentPopup";
import { LimitedPricing } from "@/configs/pricing";
import BasicsSection from "../DisplayComponents/BasicsSection";
import { PatchDetails } from "@/lib/types";

export default function () {
    const [PaymentScreen, setPaymentScreen] = useState(false);
    const [currentPatch, setCurrentPatch] = useState<PatchDetails>({
        id: LimitedMetadata.id,
        name: LimitedMetadata.label,
        description: LimitedMetadata.description,
        thumbnail: LimitedMetadata.poster,
        price: LimitedPricing.originalPriceUSD,
        hasDiscount: LimitedPricing.hasDiscount,
        discountPrice: LimitedPricing.discountedPriceUSD
    })
    return (<>
        <PaymentPopup
            isOpen={PaymentScreen}
            onClose={() => {
                setPaymentScreen(false);
            }}
            patchDetails={currentPatch}
        />
        {/* bg gradient */}
        <div className="absolute top-[-25%] left-0 w-[100svw] h-screen bg-[radial-gradient(circle_at_top,#FF0000_-100%,#00000072_40%)] backdrop-blur-lg inset-0 z-[-1]">

        </div>
        <div className="flex flex-col items-center mt-6">
            <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw] ">
                <div className="w-full h-[60svh] md:h-[75svh] flex flex-col items-center justify-center gap-6">
                    <h1 className="text-5xl md:text-6xl font-neon text-center tracking-wider flex gap-3">LGI <span className="text-primary">Modz</span></h1>
                    <h2 className="text-lg md:text-2xl font-playwrite text-center">"A Mod that you always want"</h2>
                    <Button push="/patches" className="w-[50svw] sm:w-[30svw] md:w-[30svw] xl:w-[20svw] 2xl:w-[10svw] md:text-xl md:mt-5 md:p-2" size={"lg"}>Explore Patches</Button>
                </div>


                <div className="w-full flex flex-col items-center gap-4 mt-[4svh] mb-5">
                    <h3 className="text-3xl font-semibold font-playwrite text-center">Available Patches <br /> Just for you</h3>
                    <div className="w-full flex flex-col gap-4 items-center">
                        <ProductListItem
                            id={EvolutionMetadata.id}
                            poster={EvolutionMetadata.poster}
                            title={EvolutionMetadata.label}
                            left
                            detailsLink="/evolution"
                            description={EvolutionMetadata.description}
                            purchaseLink="/evolution#tiers"
                            buyButtonLabel="View Tiers"
                        />
                        <ProductListItem
                            id={LimitedMetadata.id}
                            poster={LimitedMetadata.poster}
                            left={false}
                            title={LimitedMetadata.label}
                            detailsLink="/limited"
                            description={LimitedMetadata.description}
                            onPurchase={() => {
                                setCurrentPatch({
                                    id: LimitedMetadata.id,
                                    name: LimitedMetadata.label,
                                    description: LimitedMetadata.description,
                                    thumbnail: LimitedMetadata.poster,
                                    price: LimitedPricing.originalPriceUSD,
                                    hasDiscount: LimitedPricing.hasDiscount,
                                    discountPrice: LimitedPricing.discountedPriceUSD
                                });
                                setPaymentScreen(true);
                            }}
                        />
                        <ProductListItem
                            id={DeluxeMetadata.id}
                            poster={DeluxeMetadata.poster}
                            title={DeluxeMetadata.label}
                            detailsLink="/deluxe"
                            description={DeluxeMetadata.description}
                            left
                            purchaseLink="https://socialwolvez.com/app/l/uiwfZA"
                            buyButtonLabel="Download Now"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-4 mb-5 mt-[12dvh]">
                    <h3 className="text-2xl font-semibold font-playwrite">We Offer </h3>
                    <div className="w-full flex flex-col gap-4 md:w-[75%] ">
                        <HomePageListItem
                            title="A Vast Collection of Mods & Patches"
                            description="From updated arenas and authentic attires to revamped movesets and entrances, we deliver everything you need to enhance your WWE gaming journey."
                            Icon={Archive}
                        />
                        <HomePageListItem
                            title="Fun & Unique Editions"
                            description="Explore fantasy editions, themed packs, and special creations featuring wrestlers, superheroes, and icons you love—bringing a fresh twist to every match."
                            Icon={Palette}
                        />
                        <HomePageListItem
                            title="Choose Your Game Style"
                            description="Play your way with customizable settings, performance tweaks, and mod options that let you tailor the game to your taste and hardware."
                            Icon={Sliders}
                        />
                    </div>
                    {/* <Button variant={"secondary"} size={"lg"} className="w-full md:w-1/2 mt-5"> Customize Now</Button> */}
                </div>

                <BasicsSection />

                <div className="w-full flex flex-col items-center gap-4 mt-[15svh] mb-5">
                    <h3 className="text-2xl font-semibold font-playwrite">Testimonials</h3>
                    <p className="text-lg font-semibold text-gray-400 font-schibsted text-center text-balance">See what our customers love about our products.</p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
                        <ReviewBlock
                            pfp="/reviews/robert.webp"
                            name="Robert Relativo"
                            title=""
                            content="I love the updated Titantrons and finisher logos. It feels so authentic compared to the original."
                        />

                        <ReviewBlock
                            pfp="/reviews/xasault.webp"
                            name="xAsSaUlt_KiNGz"
                            content="From menus to moves, everything feels enhanced. Huge respect to the creators for this masterpiece."
                        />
                        <ReviewBlock
                            pfp="/reviews/modx.webp"
                            name="Dr ModX"
                            content="LGI Modz completely transformed my gameplay. The new attires and smoother performance make it feel like a brand-new game."
                        />

                    </div>
                </div>
            </div>
        </div>
    </>)
}