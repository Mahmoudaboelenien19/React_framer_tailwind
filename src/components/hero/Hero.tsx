import Container from "../widgets/Container";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container
      id="home"
      className=" flex  flex-col md:flex-row   justify-between items-center
      "
    >
      <HeroText />
      <HeroImage />
    </Container>
  );
};

export default Hero;
