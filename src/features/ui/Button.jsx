import { Link } from "react-router-dom";
const Button = ({children,disabled,to}) => {
    const className = "disabled:cursor-not-allowed; inline-block cursor-pointer rounded-full bg-yellow-400 px-4 py-3  font-semibold tracking-wide text-stone-800 uppercase    transition-colors duration-300 hover:bg-yellow-300   focus:bg-yellow-300 focus:ring focus:ring-yellow-300   focus:ring-offset-1 focus:outline-none active:bg-slate-400 md:px-6 md:py-4";
    if(to){
        return <Link className={className} to={to}>{children}</Link>
    }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  )
}

export default Button
