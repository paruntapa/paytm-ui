export const Sidebar = ()=>{
    return <div className="flex">
        <div className="bg-red-800 tansition-all ease-in-out duratoin-150 md:w-96 h-screen w-0">
            Sidebar
        </div>
        
        <div className="bg-blue-800 w-full">
            Content
        </div>
        <div className="h-screen bg-red-500 dark:bg-black text-white"> 
            <h1>Toggle Theme</h1>
        </div>
    </div>
}