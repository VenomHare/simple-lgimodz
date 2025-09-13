import { Crown, Star, Zap } from "lucide-react"

//Paypal Payment Processing 
export const AvailablePatches = [
  {
    id: "limited",
    price: 25
  },
  {
    id: "evolution_tier1",
    price: 9.99
  },
  {
    id: "evolution_tier2",
    price: 19.99
  },
  {
    id: "evolution_tier3",
    price: 29.99
  }
]

//UI
export const LimitedPricing = {
  priceUSD: 25,
  priceINR: 1800
}

export const FantasyPricing = {
  priceUSD: 25,
  priceINR: 1800
}

export const KingdomPricing = {
  priceUSD: 25,
  priceINR: 1800
}

export const EvolutionTiers = [
  {
    id: "evolution_tier1",
    name: "Basic",
    icon: <Star className="w-6 h-6" />,
    priceUSD: 9.99,
    priceINR: 799,
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
    name: "Premium",
    icon: <Crown className="w-6 h-6" />,
    priceUSD: 19.99,
    priceINR: 1599,
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