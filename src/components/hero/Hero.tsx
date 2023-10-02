import Barnds from "../Cars/Barnds";
import Container from "../widgets/Container";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container
      id="home"
      className=" flex  flex-col   justify-center items-center   gap-10 h-screen  
      "
    >
      <div className=" h-[70vh] flex   w-full gap-10 flex-col md:flex-row   justify-between items-end   ">
        <HeroText />
        <HeroImage />
      </div>
      <Barnds />
    </Container>
  );
};

export default Hero;
