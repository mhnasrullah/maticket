export const sliceString = (text : string):string => {
    return `${text.slice(0,100)}... `;
}

export const strToArray = (text : string):string[] => {
    var str = text.slice(1,-1)
    var arrOne = str.split(',')
    var arrest : string[] = [];

    arrOne.map((e)=>{
        arrest = [
            ...arrest,
            e.slice(1,-1)
        ]
    })

    return str.split(',');
}


export const getArtistbyId = (data : any[],id : number):object => {
    return data.filter((e)=>(
        e.id == id
    ))[0]
}

export const searchEvent = (data : any[],text : string) : any[]=>{
    return (
        data.filter((e)=>e.title.toLowerCase().match(text.toLocaleLowerCase()))
    )
}

export const getAllEventByArtist = (data : any[] , id : number) : any[]=>{

    let result : any[] = [];

    data.map((event : any)=>{
        event.line_up_artist.map((e:any)=>{
            let idArtist : number[] = [];

            idArtist = [
                ...idArtist,
                e.id
            ]

            if(idArtist.includes(id)){
                result = [
                    ...result,
                    event
                ]
            }
        })
    })

    return result

}

export const getShortDateByString = (str : string) => {
    const date = new Date(str)
    return `${date.getDate()}/${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}`
}