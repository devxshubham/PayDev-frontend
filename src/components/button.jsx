export const Button = ({text, onclick}) => {
    return <button onClick={onclick} className="py-1 w-full rounded bg-black text-white" >
        {text}
    </button>
}