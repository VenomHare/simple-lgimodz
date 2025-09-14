import { DiscountOffer } from "@/lib/types"
import { Crown, Star, Zap } from "lucide-react"


//UI
export const discountOffers: DiscountOffer[] = [
  
]

export const LimitedPricing = {
  originalPriceUSD: 24.99,
  originalPriceINR: 1800,

  discountedPriceUSD: 19.99,
  discountedPriceINR: 1600,

  discount: 10,
  hasDiscount: false
}

export const FantasyPricing = {
  originalPriceUSD: 44.99,
  originalPriceINR: 4500,

  discountedPriceUSD: 39.99,
  discountedPriceINR: 4000,

  discount: 10,
  hasDiscount: false
}

export const KingdomPricing = {
  originalPriceUSD: 44.99,
  originalPriceINR: 4500,

  discountedPriceUSD: 39.99,
  discountedPriceINR: 4000,

  discount: 10,
  hasDiscount: false
}

export const EvolutionTiers = [
  {
    id: "evolution_tier1",
    name: "V1",
    icon: <Star className="w-6 h-6" />,
    originalPriceUSD: 39.99,
    discountedPriceUSD: 35.99,

    originalPriceINR: 3999,
    discountedPriceINR: 3599,

    discount: 10,
    hasDiscount: false,
    features: [
      "Complete 2K25 Evolution Patch",
      "65+ Wrestlers",
      "15 Arenas",
      "Enhanced Graphics",
      "Basic Installation Guide",
      "Community Discord Access",
    ],
    popular: false,
  },
  {
    id: "evolution_tier1",
    name: "V2",
    icon: <Crown className="w-6 h-6" />,

    originalPriceUSD: 49.99,
    discountedPriceUSD: 45.99,

    originalPriceINR: 4999,
    discountedPriceINR: 4599,

    discount: 10,
    hasDiscount: false,

    features: [
      "Everything in Basic",
      "Exclusive Bonus Wrestlers (10+)",
      "Premium Arenas Pack (5+)",
      "Custom Entrance Music",
      "Priority Support",
      "Early Access to Updates",
      "Video Installation Tutorial",
    ],
    popular: true,
  },
]


