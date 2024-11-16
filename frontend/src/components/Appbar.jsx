export const Appbar = () =>{
    return <div className="shadow h-14 flex justify-between">
        <div className="font-bold flex flex-col justify-center h-full ml-4">
            PayTM Karo
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Namaste
            </div>
            <div className="rounded-full mt-1 mr-2 h-12 w-12 bg-slate-200 flex justify-center">
                <div className="flex flex-col justify-center h-full text-xl">
                    Me
                </div>
            </div>
        </div>
    </div>
}