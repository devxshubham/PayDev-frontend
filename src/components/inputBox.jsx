export const InputBox = ({place, type, onchange}) => {
    return <input onChange={onchange} className="border bg-transparent outline-none rounded py-1 px-2" type={type} placeholder={place}/>
}