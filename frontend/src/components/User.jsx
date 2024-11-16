import { Link } from "react-router-dom"

export const User = ({to}) =>{
    return <div>
    <div className="mt-5 font-medium text-xl">
            Users
    <div className="mt-2">
            <input placeholder="Search users..." type="text" className="w-full px-2 font-normal py-2 border border-gray-300 rounded"/>
    <div className="flex justify-between">
        <div className="flex font-normal mt-3">
            <div className="rounded-full mt-1 h-12 w-12 bg-slate-200 flex justify-center">
            <div className="flex flex-col justify-center h-full text-xl">
                A
            </div>
            </div>
            <div className="flex flex-col justify-center h-full ml-2 mr-4">
                Anuj Sundola
            </div>
            
        </div>
        <div className="mt-6">
            <Link className="text-lg bg-black hover:bg-gray-800 w-full text-white font-semibold py-2 px-5 rounded" to={to}>Send ₹</Link>
        </div>
    </div>
    </div>
    </div>
        </div>
}