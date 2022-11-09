import Link from "next/link"
import {BreadList} from '../utils/type'

interface Props{
    list : BreadList[]
}

const BreadCrumb = ({list} : Props) => {
    return(
    <div className="flex text-sm md:text-base flex-wrap">
        {list.map((e,i)=>{
            if(e.href){
                return (
                    <div key={i} className="ml-2 font-medium">
                        <Link href={e.href} className="mr-2">{e.name}</Link>
                        /
                    </div>
                )
            }else{
                return (
                    <p key={i} className="ml-2">{e.name}</p>
                )
            }
        })}
    </div>
    )
}

export default BreadCrumb