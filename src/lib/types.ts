export interface Videos {
    id: number,
    title: string,
    thumbnail: string,
    url: string
}

export interface Arena {
    id: number
    image: string
    name: string
}

export interface Wrestler {
    id: number
    name: string
    image: string
    category: string
}

export interface DiscountOffer {
    name: string
    discount: number
    originalPrice: number
    discountedPrice: number
    expiresIn: number // hours
    description: string
    sectionUrl: string
}


export interface Credit {
    name: string,
    role: string,
}

export type PaymentScreens = "details" | "payment" | "success" | "failed" | "upi"
export type Platform = "PC" | "Mobile" | "PS2"

export type PatchDetails = {
    id: string
    name: string
    description: string
    price: number
    thumbnail: string
    hasDiscount: false
} | {
    id: string
    name: string
    description: string
    price: number
    thumbnail: string
    hasDiscount: true
    discountPrice: number
}

export interface UserInfo {
    gmail: string
    discordId?: string
    platform: Platform | ""
}

export interface PaymentPopupProps {
    isOpen: boolean
    onClose: () => void
    patchDetails: PatchDetails
}