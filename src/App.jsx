 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import About from "./components/About"
import Testimonials from './components/Testimonials'
 

function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
    <Hero/>
   
    </div>
    <Features/>
    <Workflow/>
    <Pricing/>
    <Testimonials/>
    <About/>
   
    </>
  )
}

export default App