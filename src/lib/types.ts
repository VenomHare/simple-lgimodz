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



export interface Credit {
    name: string,
    role: string,
}