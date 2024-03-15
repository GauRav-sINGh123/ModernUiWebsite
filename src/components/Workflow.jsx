import { CheckCircle2} from "lucide-react"
import codeImg from "../assets/code.jpg"
import {checklistItems} from "../constants/index"

function Workflow() {
  return (
    <div className="mt-20"> 
    <h2 className="font-light text-2xl sm:text-4xl lg:text-5xl text-center mt-8 tracking-wider">Boost your productivity with our <span className="bg-gradient-to-r  from-red-600 to-violet-900 text-transparent bg-clip-text">Tools</span></h2>
    <div className="flex flex-wrap justify-center mt-20">
        <div className=" w-full lg:w-1/2 px-10 ">
            <img src={codeImg} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
            {
            checklistItems.map((item, index) => (
                 <div key={index} className="flex mb-12">
                    <div className="text-green-600 mx-6 bg-neutral-900 h-10 w-10
                    p-2 justify-center items-center rounded-full">
                        <CheckCircle2/>
                    </div>
                    <div>
                        <h5 className="mt-2 mb-2 text-xl">{item.title}</h5>
                        <p className="text-neutral-500 text-md"> {item.description}</p>
                    </div>
                 </div>
                  
                    
                
                    ))}
        </div>
    </div>
    </div>
  )
}

export default Workflow