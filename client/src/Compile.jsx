import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Gallery } from "./components";


const Compile = () => {
  return(
    <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          <Gallery/>
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
  )
  }

export default Compile;