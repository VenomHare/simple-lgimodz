import { Crown, Star, Zap } from "lucide-react"

//Paypal Payment Processing 
export const AvailablePatches = [
  {
    id: "limited",
    price: 24.99
  },
  {
    id: "evolution_tier1",
    price: 39.99
  },
  {
    id: "evolution_tier2",
    price: 49.99
  },
  {
    id: "kingdom",
    price: 44.99
  },
  {
    id: "fantasy",
    price: 44.99
  }
]

//UI
export const LimitedPricing = {
  priceUSD: 24.99,
  priceINR: 1800
}

export const FantasyPricing = {
  priceUSD: 44.99,
  priceINR: 4500
}

export const KingdomPricing = {
  priceUSD: 44.99,
  priceINR: 4500
}

export const EvolutionTiers = [
  {
    id: "evolution_tier1",
    name: "V1",
    icon: <Star className="w-6 h-6" />,
    priceUSD: 39.99,
    priceINR: 4000,
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
    priceUSD: 49.99,
    priceINR: 5000,
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
  // {
  //   name: "Ultimate",
  //   icon: <Zap className="w-6 h-6" />,
  //   priceUSD: 34.99,
  //   priceINR: 2799,
  //   features: [
  //     "Everything in Premium",
  //     "Modding Tools & Assets",
  //     "Custom Wrestler Creator",
  //     "Arena Editor Access",
  //     "1-on-1 Setup Support",
  //     "Lifetime Updates",
  //     "VIP Discord Channel",
  //     "Behind-the-Scenes Content",
  //   ],
  //   popular: false,
  // },
]