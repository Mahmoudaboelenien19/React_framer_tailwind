import Container from "../widgets/Container";
import TestmonialsSlider from "./TestmonialsSlider";

const Testimonials = () => {
  return (
    <Container
      id="testimonials"
      className=" w-full  overflow-hidden !p-0 flex items-center "
    >
      <TestmonialsSlider />
    </Container>
  );
};

export default Testimonials;
