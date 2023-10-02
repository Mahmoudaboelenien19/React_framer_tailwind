import { useEffect } from "react";
import About from "./About/About";
import Cars from "./Cars/Cars";
import Download from "./Download/download";
import Nav from "./Nav/Nav";
import Testimonials from "./Testmonials/Testimonials";
import Why from "./Why Us/Why";
import Footer from "./footer/Footer";
import Hero from "./hero/Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full  bg-white dark:bg-mainDark  ">
      <Nav />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <Download />
      <Footer />
    </div>
  );
};

export default Home;
