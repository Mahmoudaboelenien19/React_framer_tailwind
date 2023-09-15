import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen pt-16 flex  flex-col md:flex-row   justify-between items-center w-full 
      "
    >
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default Hero;
