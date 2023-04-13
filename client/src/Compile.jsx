import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Carousel,
} from "./components";

const Compile = () => {
  
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel />
      </div>

      {/* <Feedbacks /> */}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Compile;
