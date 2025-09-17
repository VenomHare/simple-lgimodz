"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Zap } from "lucide-react"
import Link from "next/link"
import { DiscountOffer } from "@/lib/types"
import { discountOffers } from "@/configs/pricing"


export default function DiscountPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentOffer, setCurrentOffer] = useState<DiscountOffer | null>(null)
  const [timeLeft, setTimeLeft] = useState("")
  const [expiryTime, setExpiryTime] = useState<number | null>(null)

  useEffect(() => {
    // Check if popup was already shown in this session
    // const popupShown = sessionStorage.getItem("discountPopupShown")
    const popupShown = false;

    if (!popupShown) {
      // Random delay between 5-15 seconds
      const delay = Math.random() * 10000 + 5000

      setTimeout(() => {
        // Select random offer
        const randomOffer = discountOffers[Math.floor(Math.random() * discountOffers.length)]
        setCurrentOffer(randomOffer)
        setIsOpen(true)
        sessionStorage.setItem("discountPopupShown", "true")
      }, delay)
    }
  }, [])

  useEffect(() => {
    if (currentOffer && isOpen) {
      if (expiryTime === null) {
        const totalMs = currentOffer.expiresIn * 60 * 60 * 1000
        const minimumMs = Math.min(totalMs, 60 * 1000) // ensure at least 1 minute if possible
        const randomMs = minimumMs + Math.floor(Math.random() * Math.max(1, totalMs - minimumMs))
        setExpiryTime(Date.now() + randomMs)
        return
      }

      const updateTimer = () => {
        const now = Date.now()
        const timeRemaining = expiryTime - now

        if (timeRemaining > 0) {
          const hours = Math.floor(timeRemaining / (1000 * 60 * 60))
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
          const hh = String(hours)
          const mm = String(minutes).padStart(2, '0')
          const ss = String(seconds).padStart(2, '0')
          setTimeLeft(`${hh}:${mm}:${ss}`)
        } else {
          setTimeLeft("Expired")
        }
      }

      updateTimer()
      const interval = setInterval(updateTimer, 1000)
      return () => clearInterval(interval)
    } else {
      setExpiryTime(null)
      setTimeLeft("")
    }
  }, [currentOffer, isOpen, expiryTime])

  if (!currentOffer) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            {currentOffer.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
              {currentOffer.discount}% OFF
            </Badge>
            <p className="text-muted-foreground">{currentOffer.description}</p>
          </div>

          <div className="bg-card p-4 rounded-lg text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-2xl line-through text-muted-foreground">${currentOffer.originalPrice}</span>
              <span className="text-3xl font-bold text-primary">${currentOffer.discountedPrice}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Save ${(currentOffer.originalPrice - currentOffer.discountedPrice).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Timer className="w-4 h-4 text-destructive" />
            <span className="text-destructive font-semibold">Expires in: {timeLeft}</span>
          </div>

          <div className="flex gap-2">
            <Link
              className="flex-1"
              href={currentOffer.sectionUrl}
            >
              <Button
                className="w-full"
                onClick={() => {
                  // Scroll to purchase section
                  setIsOpen(false)
                }}
              >
                Claim Offer
              </Button>
            </Link>
            <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
