"use client"

import { useEffect, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

type CountdownProps = {
  target: string | Date
  title?: string
  subtitle?: string
}

function getTimeLeft(targetDate: Date) {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now

  const clamped = Math.max(distance, 0)
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24))
  const hours = Math.floor((clamped % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((clamped % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((clamped % (1000 * 60)) / 1000)

  return { distance, days, hours, minutes, seconds }
}

export default function Countdown({
  target,
  title = "Release Countdown",
  subtitle = "Mark your calendars!",
}: CountdownProps) {
  const targetDate = useMemo(() => (target instanceof Date ? target : new Date(target)), [target])
  const [time, setTime] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTimeLeft(targetDate))
    }, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  const isReleased = time.distance <= 0

  return (
    <section className="relative" aria-label="Release countdown section">
      <div className="text-center mb-6">
        <Badge variant="secondary" className="px-4 py-2 text-xs sm:text-sm">
          <Clock className="w-4 h-4 mr-2" />
          Limited Sale
        </Badge>
        <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-balance">{title}</h2>
        <p className="mt-2 text-muted-foreground text-xs sm:text-sm md:text-base">{subtitle}</p>
      </div>

      <div
        role="timer"
        aria-live="polite"
        className="group border-2 border-secondary/40 hover:border-primary/40 transition-colors rounded-xl"
      >
        <div className="p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-stretch">
            {[
              { label: "Days", value: time.days },
              { label: "Hours", value: time.hours },
              { label: "Minutes", value: time.minutes },
              { label: "Seconds", value: time.seconds },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="relative rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors text-center p-2 sm:p-3 md:p-4 select-none"
              >
                <div className="font-mono font-bold text-xl [@media(max-width:340px)]:text-base sm:text-2xl md:text-4xl text-foreground tracking-tight transform-gpu transition-transform duration-200 group-active:scale-95">
                  {isReleased ? 0 : value.toString().padStart(2, "0")}
                </div>

                <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-muted-foreground transition-opacity">
                  {label}
                </div>

                <div className="pointer-events-none absolute left-3 right-3 -bottom-1 h-[2px] bg-primary/20 group-hover:bg-primary/40 transition-colors rounded-full" />
              </div>
            ))}
          </div>

          {/* {!isReleased && (
            <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-[10px] sm:text-xs text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
              <span>Auto-updates every second</span>
            </div>
          )} */}

          {isReleased && (
            <div className="mt-3 md:mt-4 text-center text-sm sm:text-base font-semibold text-primary">
              The patch is released! Grab it below.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
