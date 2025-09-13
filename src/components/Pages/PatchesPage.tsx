"use client";
import { DeluxeMetadata, EvolutionMetadata, FantasyMetadata, KingdomMetadata, LimitedMetadata } from "@/configs/metadata";
import CustomizeBlock from "../CustomizeBlock";
import ProductListItem from "../HomeComponents/ProductListItem";
import PaymentPopup, { PatchDetails } from "../PaymentPopup";
import { useState } from "react";
import { LimitedPricing } from "@/configs/pricing";

export default function () {

    const [PaymentScreen, setPaymentScreen] = useState(false);
    const [currentPatch, setCurrentPatch] = useState<PatchDetails>({
        id: LimitedMetadata.id,
        name: LimitedMetadata.label,
        description: LimitedMetadata.description,
        thumbnail: LimitedMetadata.poster,
        price: LimitedPricing.priceUSD
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
        <div className="absolute top-[-25%] left-0 w-[100svw] h-screen bg-[radial-gradient(circle_at_top,#FF0000_-100%,#03071272_40%)] backdrop-blur-lg inset-0 z-[-1]">

        </div>
        <div className="flex flex-col items-center mt-6">
            <h3 className="text-2xl mt-6 font-semibold font-playwrite">Browse Patches</h3>
            <p className="text-lg font-semibold text-gray-400 font-schibsted text-center text-balance mt-3" >See what our customers love about our products.</p>
            <div className="w-full flex flex-col gap-0 items-center">
                <div className="w-[85svw] lg:w-[75svw] xl:w-[60svw] min-h-[50svh] flex flex-col items-center">
                    <ProductListItem
                        id={EvolutionMetadata.id}
                        screenshots_count={EvolutionMetadata.screenshots_count}
                        title={EvolutionMetadata.label}
                        left
                        detailsLink="/evolution"
                        description={EvolutionMetadata.description}
                        purchaseLink="/evolution#tiers"
                    />
                    <ProductListItem
                        id={LimitedMetadata.id}
                        screenshots_count={LimitedMetadata.screenshots_count}
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
                                price: LimitedPricing.priceUSD
                            });
                            setPaymentScreen(true);
                        }}
                    />

                    <ProductListItem
                        id={DeluxeMetadata.id}
                        screenshots_count={DeluxeMetadata.screenshots_count}
                        title={DeluxeMetadata.label}
                        detailsLink="/deluxe"
                        description={DeluxeMetadata.description}
                        left
                        purchaseLink="https://socialwolvez.com/app/l/uiwfZA"
                        buyButtonLabel="Download Now"
                    />

                    <ProductListItem
                        id={"limited"}
                        screenshots_count={FantasyMetadata.screenshots_count}
                        title={FantasyMetadata.label}
                        detailsLink="/fantasy"
                        description={FantasyMetadata.description}
                        left={false}
                    />
                    <ProductListItem
                        id={"limited"}
                        screenshots_count={KingdomMetadata.screenshots_count}
                        title={KingdomMetadata.label}
                        detailsLink="/kingdom"
                        description={KingdomMetadata.description}
                        left
                    />
                    <CustomizeBlock />
                </div>
            </div>
        </div>
    </>)
}