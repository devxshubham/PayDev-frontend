
export const InputBox = ({place, type, onChange}) => {
    return <input onChange={onChange} className="border bg-transparent outline-none rounded py-1 px-2" type={type} placeholder={place}/>
}