import {Link} from "react-router-dom"

export const WarningButton = ({label, buttontext, to})=>{
    return <div className="flex font-semibold justify-center text-sm py-2">
    <div>
    {label} 
    </div>
    <Link className="underline px-1" to={to}>
    {buttontext}
    </Link>
    </div>
}