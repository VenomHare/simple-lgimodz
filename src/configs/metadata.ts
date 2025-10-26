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
    
    downloadLink: "https://link-target.net/1237994/EcQhGc1ARsjU",
    patreonLink: "https://www.patreon.com/posts/wwe-smackdown-136320331",    
}
 
export const EvolutionMetadata = {
    id: "evolution",
    label: "Evolution Edition",
    description: "Experience the next generation of HCTP with the 2K25 Evolution Patch!! Featuring a fully updated 2025 roster, HD arenas, authentic entrances, new moves, and a revamped UI. Relive the PS2 classic with a modern twist!",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOfWuM_cncBCYxqC_7mBrS1H",
    poster: `${HOST_URL}/poster/evolution.webp`,
    screenshots_count: 7,

    patreonLink: "https://www.patreon.com/cw/lgimodz",    
}

export const LimitedMetadata = {
    id: "limited",
    label: "Limited Edition",
    description: "Unlock the Limited Edition Patch featuring 82 superstars, high-poly visuals, 180+ new moves, 298 attires, 125 themes, and rebalanced gameplay! The ultimate upgrade for HCTP fans.",

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOegQXsvTXRSuwNDB5TQPPbx",
    poster: `${HOST_URL}/poster/limited.png`,
    screenshots_count: 11,

    patreonLink: "https://www.patreon.com/posts/wwe-here-comes-133731425",
}


export const FantasyMetadata = {
    id: "fantasy",
    label: "Fantasy Edition",
    description: `Unleash your imagination with the HCTP Fantasy Edition! Featuring a dream roster of legends, superheroes, and fantasy icons, stunning HD arenas, over-the-top entrances, wild new moves, and a fully reimagined UI. Relive the PS2 classic with a larger-than-life twist that takes HCTP beyond reality! \n Step into a world beyond reality with the HCTP Fantasy Edition!\nWhere legends, icons, and dream warriors collide in a roster built straight from imagination. Enter breathtaking HD arenas, witness explosive entrances, unleash never-before-seen moves, and navigate a bold new interface crafted for the ultimate experience.\n\nThis isn't just HCTP — it's wrestling without limits, where fantasy becomes legend and every match is a battle for greatness!`,

    wrestlers_count: "65+",
    playlist_id: "PLcz4DKrECTOcW8Q91dwLJMD4shvRYNbQi",
    poster: `${HOST_URL}/poster/fantasy.webp`,
    screenshots_count: 10,
    patreonLink: "https://www.patreon.com/cw/lgimodz",    
}

export const KingdomMetadata = {
    id: "kingdom",
    label: "Wrestler Kingdom",
    description: `From the electric Tokyo Dome to the grandest stage of them all, this patch unites AEW icons, NJPW warriors, and WWE Hall of Fame legends in one epic roster. Witness jaw-dropping HD arenas, authentic entrances, signature finishers, and a sleek new interface all built on the timeless HCTP gameplay you love. \n \n This isn't just a patch… it's the battle of generations, promotions, and legacies  where champions are made and legends never die!`,

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