"use client";
import { DeluxeMetadata, EvolutionMetadata, FantasyMetadata, KingdomMetadata, LimitedMetadata } from "@/configs/metadata";
import CustomizeBlock from "../CustomizeBlock";
import ProductListItem from "../HomeComponents/ProductListItem";
import PaymentPopup from "../PaymentPopup";
import { useState } from "react";
import { FantasyPricing, KingdomPricing, LimitedPricing } from "@/configs/pricing";
import { PatchDetails } from "@/lib/types";

export default function () {

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
            <h3 className="text-2xl mt-6 font-semibold font-playwrite">Browse Patches</h3>
            <p className="text-lg font-semibold text-gray-400 font-schibsted text-center text-balance mt-3" >See what our customers love about our products.</p>
            <div className="w-full flex flex-col gap-0 items-center">
                <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw] min-h-[50svh] flex flex-col items-center">
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
                                hasDiscount:  LimitedPricing.hasDiscount,
                                discountPrice: LimitedPricing.discountedPriceUSD
                            });
                            setPaymentScreen(true);
                        }}
                    />
                    <ProductListItem
                        id={FantasyMetadata.id}
                        poster={FantasyMetadata.poster}
                        title={FantasyMetadata.label}
                        detailsLink="/fantasy"
                        description={FantasyMetadata.description}
                        onPurchase={() => {
                            setCurrentPatch({
                                id: FantasyMetadata.id,
                                name: FantasyMetadata.label,
                                description: FantasyMetadata.description,
                                thumbnail: FantasyMetadata.poster,
                                price: FantasyPricing.originalPriceUSD,
                                hasDiscount:  FantasyPricing.hasDiscount,
                                discountPrice: FantasyPricing.discountedPriceUSD
                            });
                            setPaymentScreen(true);
                        }}
                        buyButtonLabel="Pre Order Now"
                    />
                    <ProductListItem
                        id={KingdomMetadata.id}
                        poster={KingdomMetadata.poster}
                        title={KingdomMetadata.label}
                        detailsLink="/kingdom"
                        description={KingdomMetadata.description}
                        left={false}
                        onPurchase={() => {
                            setCurrentPatch({
                                id: KingdomMetadata.id,
                                name: KingdomMetadata.label,
                                description: KingdomMetadata.description,
                                thumbnail: KingdomMetadata.poster,
                                price: KingdomPricing.originalPriceUSD,
                                hasDiscount:  KingdomPricing.hasDiscount,
                                discountPrice: KingdomPricing.discountedPriceUSD
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
                    <CustomizeBlock />
                </div>
            </div>
        </div>
    </>)
}