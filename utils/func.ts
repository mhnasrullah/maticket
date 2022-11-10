export const sliceString = (text : string):string => {
    return `${text.slice(0,100)}... `;
}

export const getArtistbyId = (data : any[],id : number):object => {
    return data.filter((e)=>(
        e.id == id
    ))[0]
}