 import video1 from '../assets/video1.mp4'
 import video2 from '../assets/video2.mp4'



function Hero() {
  return (
    <div className='flex flex-col items-center mt-3 lg:mt-15'>
       <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>"Explore the cutting-edge features 
      <span className='bg-gradient-to-r  from-pink-600 to-violet-900 text-transparent bg-clip-text' > 
       {" "}  Of Cybritech"
      </span>
     </h1> 
     <p className="mt-10 text-lg text-center text-neutral-700 max-w-4xl">If future generations are to remember us more with gratitude than sorrow, we must achieve more than just the miracles of technology. We must also leave them a glimpse of the world as it was created, not just as it looked when we got through with it.
Lyndon B. Johnson - Former President of the United States of America</p>
    <div className="flex justify-center my-10">
    
    <a
  href="#_"
  className="relative px-6 py-3 font-bold text-white rounded-lg group"
>
  <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0" />
  <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen" />
  <span className="relative">Know More</span>
</a>


    </div>
    <div className="flex mt10 justify-center">
      <video autoPlay loop muted  className="rounded-lg w-1/2 border border-pink-900 shadow-pink-700 mx-2 my-4">
        <source src={video1} type="video/mp4" />
        Your Browser Does Not This Vieo.
      </video>
      <video autoPlay loop muted  className="rounded-lg w-1/2 border border-pink-900 shadow-pink-700 mx-2 my-4">
        <source src={video2} type="video/mp4" />
        Your Browser Does Not This Vieo.
      </video>
    </div>
    </div>
  )
}

export default Hero
