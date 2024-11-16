export const InputBox = ({label, placeholder}) =>{
    return <div className="text-left text-sm font-semibold py-2">
        {label}
        <div>
            <input placeholder={placeholder} className="w-full px-2 font-normal py-1 border border-gray-300 rounded" type="text" />
        </div>
    </div>
}