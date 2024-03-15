 import {features} from "../constants/index"

function Features() {
  return (
<>
   
  <div className="container my-24 bg-inherit mx-auto md:px-6  ">
    
    <section className="mb-28">
      <div className="flex justify-center">
        <div className="max-w-[700px] mb-5 text-center">
          <p className="mb-6 font-bold uppercase text-neutral-400   text-primary dark:text-primary-400">
           Features
          </p>
          <h2 className="mb-6 text-3xl md:text-5xl font-light tracking-wider">Why is it <span className="bg-gradient-to-r  from-pink-600 to-violet-800 text-transparent bg-clip-text">so great?</span></h2>
           
        </div>
      </div>
      <div className=" mt-10 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
        {features.map((feature, index) => (
            
            <div key={index} className="mb-12">
          <div className="flex">
            <div className="px-4 shrink-0 text-purple-800 ">
               {feature.icon}
            </div>
            <div className="ml-2 grow">
              <p className="mb-1 font-bold">{feature.text}</p>
              <p className="  mt-8 text-neutral-500">
               {feature.description}
              </p>
            </div>
          </div>
        </div>
            )
        )}
      </div>
    </section>
     <hr className="border-neutral-800" />
  </div>

   
</>

  )
}

export default Features