import WhyHead from "./WhyHead";
import Container from "../widgets/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/images/why/car.png";
import Whysrrvices from "./Whysrrvices";
const Why = () => {
  return (
    <Container
      className="flex  justify-center flex-col items-center gap-2"
      id="why"
    >
      <WhyHead />
      <div className="h-72 ">
        <LazyLoadImage
          src={img}
          alt=""
          effect="blur"
          wrapperClassName="h-full "
          className="h-full object-contain "
        />
      </div>
      <Whysrrvices />
    </Container>
  );
};
export default Why;
