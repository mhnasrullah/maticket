export type BreadList = {
    href? : string,
    name : string
}

export type dataTimeline = {
    date : string,
    title : string,
    description : string
}

export type DropLangType = {
    name : string,
    flag : string
}

export type ArtistData = {
    id : number,
    award? : string | null,
    banner_image : string,
    bio : string,
    country : string,
    created_at? : string,
    genre : string,
    image : string,
    instagram : string,
    team? : string | null,
    title : string,
    twitter : string,
    update_at? : string,
    website : string
}