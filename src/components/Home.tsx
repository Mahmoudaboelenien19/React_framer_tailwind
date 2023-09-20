import About from "./About/About";
import Cars from "./Cars/Cars";
import Nav from "./Nav/Nav";
import Testimonials from "./Testmonials/Testimonials";
import Why from "./Why Us/Why";
import Hero from "./hero/Hero";

const Home = () => {
  return (
    <div className="w-full  bg-white dark:bg-mainDark  ">
      <Nav />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
    </div>
  );
};

export default Home;
