import { Credit } from "@/lib/types";

export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || "https://lgimodz.vercel.app";
export const DeluxeMetadata = {
    id: "deluxe",
    label: "Deluxe Edition ",
    description: "Now featuring updated Titantrons, new loading screens, enhanced character models, 290+ attires, stronger finishers, revamped stables, new menu style, and finisher logos. Includes performance fixes to prevent freezing while keeping save data safe. Use the provided memory card with the latest PCSX2 nightly build; manual moveset setup may be needed.",

    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/deluxe.webp`,

    wrestlers_count: "65+",
    screenshots_count: 10,

    patreonLink: "https://www.patreon.com/posts/wwe-smackdown-136320331",    
}

export const EvolutionMetadata = {
    id: "evolution",
    label: "Evolution Edition",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOfWuM_cncBCYxqC_7mBrS1H",
    poster: `${HOST_URL}/poster/evolution.webp`,
    screenshots_count: 6,

    patreonLink: "https://www.patreon.com/cw/lgimodz",    
}

export const LimitedMetadata = {
    id: "limited",
    label: "Limited Edition",
    description: "Unlock the Limited Edition Patch featuring 82 superstars, high-poly visuals, 180+ new moves, 298 attires, 125 themes, and rebalanced gameplay! The ultimate upgrade for HCTP fans.",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOegQXsvTXRSuwNDB5TQPPbx",
    poster: `${HOST_URL}/poster/limited.png`,
    screenshots_count: 10,

    patreonLink: "https://www.patreon.com/posts/wwe-here-comes-133731425",
}


export const FantasyMetadata = {
    id: "fantasy",
    label: "Fantasy Edition",
    description: `Step into a whole new world of chaos and imagination with LGI Modz: Fantasy Edition. This patch brings your favorite heroes, legends, and icons straight into the fight. From swinging through the streets as Spider-Man, unleashing Saiyan power with Goku and Vegeta, or scoring goals as Messi and Ronaldo – the Fantasy Edition makes it all possible. Join forces with Miles Morales, Tom Holland’s Spidey, anime giants like Luffy and Eren Yeager, and classics like CJ and Big Smoke from Grove Street. Whether you’re a superhero fan, anime lover, or football fanatic, this patch is built to blow your mind with unlimited crossovers. This isn’t just a mod – it’s your ticket to a multiverse of fantasy battles where anything is possible.`,

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/fantasy.webp`,
    screenshots_count: 10,
    patreonLink: "https://www.patreon.com/cw/lgimodz",    
}

export const KingdomMetadata = {
    id: "kingdom",
    label: "Wrestler Kingdom",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOfqZSxs_t6vRFz6C2ZY5Dvn",
    poster: `${HOST_URL}/poster/kingdom.webp`,
    screenshots_count: 10,
    patreonLink: "https://www.patreon.com/cw/lgimodz",    
}
export const Credits: Credit[] = [
    {
        name: "Aguila316",
        role: "Tools, Mods"
    },
    {
        name: "ps2eater",
        role: "Mods"
    },
    {
        name: "Nero619",
        role: "Tools"
    },
    {
        name: "ERI619",
        role: "Tools"
    },
    {
        name: "a7med7assan5",
        role: "Lessons, Discoveries"
    },
    {
        name: "Erm31",
        role: "Tools"
    },
    {
        name: "ModdingGenerationOfficial",
        role: "Mods"
    },
    {
        name: "angrygamershow848",
        role: "Mods, Moves"
    },
    {
        name: "RhapsoTheSeer",
        role: "C4D Renders"
    },
    {
        name: "L.O.M.",
        role: "Platform"
    },
    {
        name: "Ryukuuma",
        role: "Mods"
    },
    {
        name: "ranjay12",
        role: "Arenas"
    },
    {
        name: "THQ",
        role: "Original Creators (Base Game)"
    },
    {
        name: "JAKKS",
        role: "Original Creators (Base Game)"
    },
];