"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  MapPin,
  Star,
  Heart,
  Check,
  Zap,
} from "lucide-react";
import { Credits, EvolutionMetadata } from "@/configs/metadata";
import { EvolutionTiers } from "@/configs/pricing";
import { getShowcaseVideos } from "@/lib/utils";
import { PatchDetails, Videos } from "@/lib/types";
import { EvolutionArenas } from "@/configs/arenas";
import { ArenaCard } from "../DisplayComponents/ArenaCard";
import { ShowcaseVideo } from "../DisplayComponents/ShowcaseVideo";
import { WrestlerCard } from "../DisplayComponents/WrestlerCard";
import { EvolutionRosterV1, EvolutionRosterV2 } from "@/configs/roster";
import PaymentPopup from "../PaymentPopup";
import Link from "next/link";
import NoticeCard from "../DisplayComponents/NoticeCard";
// import Countdown from "../DisplayComponents/countdown"

const screenshots = Array.from({
  length: EvolutionMetadata.screenshots_count,
}).map((_, i) => `/${EvolutionMetadata.id}/screenshots/${i + 1}.webp`);

export function EvolutionPage() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [showAllWrestlersV1, setShowAllWrestlersV1] = useState(false);
  const [showAllWrestlersV2, setShowAllWrestlersV2] = useState(false);
  const [showAllArenas, setShowAllArenas] = useState(false);
  const [videos, setVideos] = useState<Videos[]>([]);
  const [PaymentScreen, setPaymentScreen] = useState(false);
  const [currentPatch, setCurrentPatch] = useState<PatchDetails>({
    id: "evolution_tier2",
    name: "2K25 Evolution Patch Tier 1",
    description: EvolutionMetadata.description,
    thumbnail: EvolutionMetadata.poster,
    price: EvolutionTiers[1].originalPriceUSD,
    hasDiscount: EvolutionTiers[1].hasDiscount,
    discountPrice: EvolutionTiers[1].discountedPriceUSD,
  });

  // const releaseDate = new Date("2025-10-31T14:30:00.000Z");
  const [showCredits, setShowCredits] = useState(false);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  useEffect(() => {
    const main = async () => {
      const data = await getShowcaseVideos(EvolutionMetadata.playlist_id);
      setVideos(data);
    };
    main();
  }, []);

  return (
    <>
      <PaymentPopup
        isOpen={PaymentScreen}
        onClose={() => {
          setPaymentScreen(false);
        }}
        patchDetails={currentPatch}
      />
      <div className="min-h-screen max-w-[85svw] lg:max-w-[75svw] xl:max-w-[60svw]  mx-auto my-0 bg-background">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-12">
          {/* Screenshot Carousel */}
          <section className="relative">
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-card">
              <img
                src={screenshots[currentScreenshot] || "/placeholder.svg"}
                alt={`Screenshot ${currentScreenshot + 1}`}
                className="w-full h-full object-cover"
                width={1920}
                height={1080}
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
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentScreenshot ? "bg-primary" : "bg-white/50"
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
                    <DialogTitle className="text-2xl">
                      Credits & Acknowledgments
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <p className="text-muted-foreground">
                      Special thanks to all the talented individuals who made
                      this patch possible:
                    </p>
                    <div className="grid gap-3">
                      {Credits.map((person, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-card rounded-lg"
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{person.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        And a huge thanks to the WWE HCTP modding community for
                        their continued support!
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
                Available Now
              </Badge>
              <h1 className="text-5xl font-bold text-balance">
                {EvolutionMetadata.label}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                {EvolutionMetadata.description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                <Users className="w-4 h-4 text-primary" />
                <span>{EvolutionRosterV2.length} Wrestlers</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{EvolutionArenas.length} Arenas</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg">
                <Play className="w-4 h-4 text-primary" />
                <span>Enhanced Graphics</span>
              </div>
            </div>
          </section>
          {/* Release Countdown */}
          {/* <div className="max-w-4xl mx-auto w-full">
                    <Countdown
                        target={releaseDate}
                        title="Special Diwali Offer"
                        subtitle="Make your Diwali extra special with our limited time festive offer!"
                    />
                </div> */}

          <section id="tiers" className="mt-[10dvh]">
            <div className="text-center mb-12 ">
              <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Exclusive Offer
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Choose Your Package</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Special discount pricing available for a limited time! All
                packages include the complete patch with lifetime access and
                regular updates.
              </p>
            </div>

            <div className="my-10">
                <NoticeCard text=" V1 will be published on 1 December, 2025" />
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {EvolutionTiers.map((tier, index) => (
                <>
                  <Card
                    key={index}
                    className={`relative ${
                      tier.popular ? "ring-2 ring-primary scale-105" : ""
                    } hover:scale-105 transition-transform duration-200`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    {tier.hasDiscount && (
                      <div className="absolute -top-2 -right-2">
                        <Badge
                          variant="secondary"
                          className="bg-blue-600/80 text-sm"
                        >
                          {tier.discount}% OFF
                        </Badge>
                      </div>
                    )}

                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                          {tier.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                        {tier.hasDiscount ? (
                          <div className="space-y-2">
                            <div className="flex items-center justify-center gap-3">
                              <span className="text-lg line-through text-muted-foreground">
                                ${tier.originalPriceUSD}
                              </span>
                              <span className="text-3xl font-bold text-green-500">
                                ${tier.discountedPriceUSD}
                              </span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                              <span className="text-sm line-through text-muted-foreground">
                                ₹{tier.originalPriceINR}
                              </span>
                              <span className="text-lg font-semibold">
                                ₹{tier.discountedPriceINR}
                              </span>
                            </div>
                            {/* <p className="text-sm text-green-600 font-medium">
                                                        Save ${(tier.originalPriceUSD - tier.discountedPriceUSD).toFixed(2)} / ₹
                                                        {tier.originalPriceINR - tier.discountedPriceINR}
                                                    </p> */}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex items-center justify-center gap-3">
                              <span className="text-3xl font-bold">
                                ${tier.originalPriceUSD}
                              </span>
                            </div>
                            <div className="flex items-center justify-center gap-3">
                              <span className="text-lg ">
                                ₹{tier.originalPriceINR}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          tier.popular ? "bg-primary hover:bg-primary/90" : ""
                        }`}
                        variant={tier.popular ? "default" : "outline"}
                        size="lg"
                        onClick={() => {
                          console.log("setting Patch to " + tier.id);

                          setCurrentPatch({
                            id: tier.id,
                            name: `${EvolutionMetadata.label} ${tier.name}`,
                            description: EvolutionMetadata.description,
                            thumbnail: EvolutionMetadata.poster,
                            price: tier.originalPriceUSD,
                            hasDiscount: tier.hasDiscount,
                            discountPrice: tier.discountedPriceUSD,
                          });
                          setPaymentScreen(true);
                          console.log(
                            "The current patch is " + currentPatch.id
                          );
                        }}
                      >
                        Purchase {tier.name}
                      </Button>
                    </CardContent>
                  </Card>
                </>
              ))}
            </div>
            <div className="text-center mt-8 space-y-2">
              <p className="text-sm text-muted-foreground">
                All purchases include email support. Secure payment processing
                via Paypal.
              </p>
              {EvolutionTiers[0].hasDiscount ||
                (EvolutionTiers[1].hasDiscount && (
                  <p className="text-xs text-destructive font-medium">
                    ⏰ Limited time pricing - offer expires soon!
                  </p>
                ))}
            </div>
          </section>

          <section className="w-full flex items-center justify-center mb-[10dvh]">
            <div className="w-full flex flex-col items-center gap-[4dvh]">
              <div className="w-full md:w-4/5 lg:w-2/5 flex items-center justify-center gap-3">
                <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
                <div className="text-muted-foreground/40 font-playwrite">
                  or
                </div>
                <div className="w-1/3 h-[1px] rounded bg-muted-foreground/40"></div>
              </div>
              <Link
                href={EvolutionMetadata.patreonLink}
                className="w-full md:w-4/5 lg:w-2/5"
                target="blank"
              >
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
              <h2 className="text-4xl font-bold mb-4">V1 Roster</h2>
              <p className="text-muted-foreground text-lg">
                {EvolutionRosterV1.length} legendary wrestlers from different
                eras of WWE history
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {EvolutionRosterV1.slice(0, 12).map((wrestler) => (
                <WrestlerCard wrestler={wrestler} key={wrestler.id} />
              ))}
            </div>

            <div className="text-center">
              <Dialog
                open={showAllWrestlersV1}
                onOpenChange={setShowAllWrestlersV1}
              >
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <Users className="w-4 h-4 mr-2" />
                    View All {EvolutionRosterV1.length} Wrestlers
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Complete Wrestler Roster</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                    {EvolutionRosterV1.map((wrestler) => (
                      <WrestlerCard wrestler={wrestler} key={wrestler.id} />
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </section>

          <section>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">V2 Roster</h2>
              <p className="text-muted-foreground text-lg">
                {EvolutionRosterV2.length} legendary wrestlers from different
                eras of WWE history
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
              {EvolutionRosterV2.slice(0, 12).map((wrestler) => (
                <WrestlerCard wrestler={wrestler} key={wrestler.id} />
              ))}
            </div>

            <div className="text-center">
              <Dialog
                open={showAllWrestlersV2}
                onOpenChange={setShowAllWrestlersV2}
              >
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <Users className="w-4 h-4 mr-2" />
                    View All {EvolutionRosterV2.length} Wrestlers
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Complete Wrestler Roster</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                    {EvolutionRosterV2.map((wrestler) => (
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
                15 meticulously crafted wrestling venues with authentic
                atmosphere
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {EvolutionArenas.slice(0, 6).map((arena) => (
                <ArenaCard arena={arena} key={arena.id} />
              ))}
            </div>

            <div className="text-center">
              <Dialog open={showAllArenas} onOpenChange={setShowAllArenas}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    <MapPin className="w-4 h-4 mr-2" />
                    View All {EvolutionArenas.length} Arenas
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>All Wrestling Arenas</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {EvolutionArenas.map((arena) => (
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
                Watch the patch in action with gameplay footage and feature
                highlights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <ShowcaseVideo video={video} key={video.id} />
              ))}
            </div>
            {videos.length == 0 && (
              <div className="w-full flex justify-center my-4">
                <p className="text-lg font-semibold text-gray-400 font-schibsted text-center text-balance mt-3">
                  Loading Showcase Videos
                </p>
              </div>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
