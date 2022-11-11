export const sliceString = (text : string):string => {
    return `${text.slice(0,100)}... `;
}

export const strToArray = (text : string):string[] => {
    // var str = text.replace('"','');
    // str = text.replace('[','');
    var str = text.slice(1,-1)
    var arrOne = str.split(',')
    var arrest : string[] = [];

    arrOne.map((e)=>{
        arrest = [
            ...arrest,
            e.slice(1,-1)
        ]
        // console.log(e.slice(1,-1))
    })

    return str.split(',');
}


export const getArtistbyId = (data : any[],id : number):object => {
    return data.filter((e)=>(
        e.id == id
    ))[0]
}