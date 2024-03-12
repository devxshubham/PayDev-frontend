export const Button = ({text, onClick}) => {
    return <button onClick={onClick} className="py-1 w-full rounded bg-black text-white" >
        {text}
    </button>
}