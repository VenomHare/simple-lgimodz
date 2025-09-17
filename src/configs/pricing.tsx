import { DiscountOffer } from "@/lib/types"
import { Crown, Star } from "lucide-react"


//UI
export const discountOffers: DiscountOffer[] = [
  
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

    originalPriceUSD: 59.99,
    discountedPriceUSD: 49.99,

    originalPriceINR: 5999,
    discountedPriceINR: 4999,

    discount: 10,
    hasDiscount: true,

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


