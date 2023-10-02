import Container from "../widgets/Container";
import AboutContent from "./AboutContent";
import AboutImg from "./AboutImg";

const About = () => {
  return (
    <Container
      id="about"
      className="   flex  flex-col lg:flex-row justify-center items-center gap-12    mt-8 "
    >
      <AboutImg />
      <AboutContent />
    </Container>
  );
};

export default About;
