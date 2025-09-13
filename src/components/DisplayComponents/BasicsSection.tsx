"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Gamepad2, Trophy, Zap, Target } from "lucide-react"
import { basicControls, matchTypes } from "@/configs/basics_data"

export default function BasicsSection() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const controlCategories = Object.keys(basicControls) as Array<keyof typeof basicControls>
  const matchTypesList = Object.entries(matchTypes)

  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="text-lg px-6 py-2 mb-4 animate-pulse">
            <Gamepad2 className="w-5 h-5 mr-2" />
            Game Basics
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-balance font-anton">Master the Ring</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Learn the essential controls and match types to dominate in WWE Here Comes The Pain. From basic grapples to
            advanced maneuvers, become the ultimate champion.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold font-schibsted">Game Controls</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {controlCategories.map((category, index) => (
                <Card
                  key={category}
                  className="group h-fit hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-blue-600/20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <Collapsible open={openSections[category]} onOpenChange={() => toggleSection(category)}>
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-secondary/50 transition-colors rounded-t-lg">
                        <CardTitle className="flex items-center justify-between text-lg group-hover:text-blue-600 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                              <Zap className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-schibsted">{category}</span>
                          </div>
                          {openSections[category] ? (
                            <ChevronDown className="w-5 h-5 transition-transform" />
                          ) : (
                            <ChevronRight className="w-5 h-5 transition-transform" />
                          )}
                        </CardTitle>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          {basicControls[category].map((control, controlIndex) => (
                            <div
                              key={controlIndex}
                              className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group/item"
                              style={{
                                animationDelay: `${controlIndex * 50}ms`,
                              }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                              <span className="text-sm leading-relaxed font-mono">{control}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold font-schibsted">Match Types</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {matchTypesList.map(([matchName, matchData], index) => (
                <Card
                  key={matchName}
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-blue-600/20 bg-gradient-to-br from-card to-secondary/10"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-lg group-hover:text-blue-600 transition-colors">
                      <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                        <Trophy className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-schibsted text-balance">{matchName}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {matchData.winConditions && (
                      <div className="space-y-2">
                        <Badge variant="outline" className="text-xs">
                          Win Conditions
                        </Badge>
                        <p className="text-sm text-muted-foreground font-mono">{matchData.winConditions}</p>
                      </div>
                    )}
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-xs">
                        Description
                      </Badge>
                      <p className="text-sm leading-relaxed text-pretty">{matchData.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  )
}
