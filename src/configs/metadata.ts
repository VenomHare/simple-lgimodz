import { Credit } from "@/lib/types";

export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || "https://lgimodz.vercel.app";
export const DeluxeMetadata = {
    id: "deluxe",
    label: "Deluxe Edition",
    description: "Now featuring updated Titantrons, new loading screens, enhanced character models, 290+ attires, stronger finishers, revamped stables, new menu style, and finisher logos. Includes performance fixes to prevent freezing while keeping save data safe. Use the provided memory card with the latest PCSX2 nightly build; manual moveset setup may be needed.",

    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/deluxe.png`,

    wrestlers_count: "65+",
    screenshots_count: 10,
}

export const EvolutionMetadata = {
    id: "evolution",
    label: "Evolution Edition",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/evolution.png`,
    screenshots_count: 6,
}

export const LimitedMetadata = {
    id: "limited",
    label: "Limited Edition",
    description: "Unlock the Limited Edition Patch featuring 82 superstars, high-poly visuals, 180+ new moves, 298 attires, 125 themes, and rebalanced gameplay! The ultimate upgrade for HCTP fans.",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/limited.png`,
    screenshots_count: 10,
}


export const FantasyMetadata = {
    id: "fantasy",
    label: "Fantasy Edition",
    description: `Step into a whole new world of chaos and imagination with LGI Modz: Fantasy Edition. This patch brings your favorite heroes, legends, and icons straight into the fight. From swinging through the streets as Spider-Man, unleashing Saiyan power with Goku and Vegeta, or scoring goals as Messi and Ronaldo – the Fantasy Edition makes it all possible. Join forces with Miles Morales, Tom Holland’s Spidey, anime giants like Luffy and Eren Yeager, and classics like CJ and Big Smoke from Grove Street. Whether you’re a superhero fan, anime lover, or football fanatic, this patch is built to blow your mind with unlimited crossovers. This isn’t just a mod – it’s your ticket to a multiverse of fantasy battles where anything is possible.`,

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/fantasy.png`,
    screenshots_count: 10,
}

export const KingdomMetadata = {
    id: "kingdom",
    label: "Wrestler Kingdom",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/limited.png`,
    screenshots_count: 10,
}

export const Credits: Credit[] = [
    {
        name: "Aguila316",
        role: "Tools,Mods"
    },
    {
        name: "Ps2 eater @ps2eater ",
        role: "Mods"
    },
    {
        name: "Nero619",
        role: "Tools"
    },
    {
        name: "ERI619",
        role: "Animation Specialist"
    },
    {
        name: "a7med7assan5 @a7med7assan5",
        role: "Mods,Cheats,Movesets,Render and texture"
    },
    {
        name: "Erm31",
        role: "Tools"
    },
    {
        name: "Modding Generation @ModdingGenerationOfficial",
        role: "Mods,Arenas,Render and texture"
    },
    {
        name: "Angry game show @angrygamershow848",
        role: "Mods,moves,Render and texture"
    },
    {
        name: "Ryukuuma @Ryukuuma",
        role: "Mods"
    },
    {
        name: "Ranjay @ranjay12",
        role: "Arenas"
    },
    {
        name: "THQ",
        role: "Base Game"
    },
    {
        name: "JAKKS",
        role: "Base Game"
    },
]