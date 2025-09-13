import { Credit } from "@/lib/types";

export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || "https://lgimodz.vercel.app";
export const DeluxeMetadata = {
    id: "deluxe",
    label: "Deluxe Edition",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/deluxe.png`,

    wrestlers_count: "65+",
    screenshots_count: 10,
}

export const EvolutionMetadata = {
    id: "evolution",
    label: "2K25 Evolution",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/evolution.png`,
    screenshots_count: 6,
}

export const LimitedMetadata = {
    id: "limited",
    label: "Limited Edition",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/limited.png`,
    screenshots_count: 10,
}


export const FantasyMetadata = {
    id: "fantasy",
    label: "Fantasy Edition",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/limited.png`,
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