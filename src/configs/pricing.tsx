import { DiscountOffer } from "@/lib/types"
import { Crown, Star } from "lucide-react"
import { EvolutionRosterV1 } from "./roster"
import { EvolutionArenas } from "./arenas"


//UI
export const discountOffers: DiscountOffer[] = [
  {
    name: "Exclusive Offer",
    discount: 10,
    originalPrice: 44.99,
    discountedPrice: 39.99,
    expiresIn: 12,
    description: "Grab the Evolution Patch with Limited Time Launch Offer",
    sectionUrl: "/evolution#tiers"
  },
  {
    name: "Super Fan Offer",
    discount: 10,
    originalPrice: 49.99,
    discountedPrice: 44.99,
    expiresIn: 12,
    description: "Pre Order Fantasy Edition for exclusive discount",
    sectionUrl: "/fantasy"
  },
]

export const LimitedPricing = {
  originalPriceUSD: 34.99,
  discountedPriceUSD: 24.99,

  originalPriceINR: 2500,
  discountedPriceINR: 1800,

  discount: 30,
  hasDiscount: true
}

export const FantasyPricing = {
  originalPriceUSD: 49.99,
  discountedPriceUSD: 44.99,

  originalPriceINR: 5000,
  discountedPriceINR: 4500,

  discount: 10,
  hasDiscount: true
}

export const KingdomPricing = {
  originalPriceUSD: 49.99,
  discountedPriceUSD: 44.99,

  originalPriceINR: 5000,
  discountedPriceINR: 4500,

  discount: 10,
  hasDiscount: true
}

export const EvolutionTiers = [
  {
    id: "evolution_tier1",
    name: "V1",
    icon: <Star className="w-6 h-6" />,
    originalPriceUSD: 44.99,
    discountedPriceUSD: 39.99,

    originalPriceINR: 4499,
    discountedPriceINR: 3999,

    discount: 10,
    hasDiscount: true,
    features: [
      "HD Renders & UI",
      `${EvolutionRosterV1.length}+ Wrestlers`,
      `${EvolutionArenas.filter(i => i.name == "V1" ).length} Arenas`,
      "Enhanced Graphics",
      "Basic Installation Guide",
      "Community Discord Access",
    ],
    popular: false,
  },
  {
    id: "evolution_tier2",
    name: "V2",
    icon: <Crown className="w-6 h-6" />,

    originalPriceUSD: 59.99,
    discountedPriceUSD: 54.99,

    originalPriceINR: 5999,
    discountedPriceINR: 4999,

    discount: 10,
    hasDiscount: true,

    features: [
      "Everything in Basic",
      "Exclusive Bonus Wrestlers (10+)",
      "Extra Premium Arenas Pack (10+)",
      "Custom Entrance Music",
      // "Priority Support",
      "Early Access to Updates",
      "Video Installation Tutorial",
    ],
    popular: true,
  },
]


