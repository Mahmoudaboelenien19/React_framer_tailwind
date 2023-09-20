import Img from "@/assets/images/about/car01.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AboutImg = () => {
  return (
    <LazyLoadImage
      src={Img}
      effect="blur"
      alt=""
      wrapperClassName="w-full    lg:w-4/5 object-cotain  "
    />
  );
};

export default AboutImg;
