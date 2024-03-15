import logo from '../assets/logo.png'
import {Menu,X} from  "lucide-react"
 
import { useState } from "react"
 
import {navItems} from '../constants/index'
function Navbar() {
    const[toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
  return (
   <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
    <div className='container px-4 mx-auto relative text-sm'>
    <div className="flex justify-between items-center">
      <div className="flex items-center flex-shrink-0">
      <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
      <h2>IvetCross</h2>
      </div>
      <ul className="hidden lg:flex ml-14 space-x-12">
       {navItems.map((item,index)=>(
          <li className=" hover:text-sky-400" key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))
       } 
      </ul>
      <div className="hidden lg:flex justify-center space-x-12 items-center">
      <a
  href="#"
  className="relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-bold rounded-full group cursor-pointer"
>
  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]" />
  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8" />
  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
   Get Started
  </span>
  <span className="absolute inset-0 border-2 border-white rounded-full" />
</a>
 </div>
  <div className="lg:hidden md:flex flex-col justify-end">
    <button onClick={handleToggle}>
        {toggle ? <X /> : <Menu/>}
    </button>
  </div>
</div>
{toggle&&(
    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex
    flex-col justify-center items-center lg:hidden">
        <ul className="py-2 space-y-3">
            {
            navItems.map((item,index)=>(
                <li key={index}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>
        <div className="flex space-x-3 mt-5">
         
        </div>
    </div>
)}
    </div>
   </nav>
  )
}

export default Navbar