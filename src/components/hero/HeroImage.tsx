import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import svg from "../../assets/images/hero/car.svg";
const HeroImage = () => {
  return (
    <LazyLoadImage
      src={svg}
      effect="blur"
      alt={"car"}
      wrapperClassName=" h-5/6  w-5/8 !flex !justify-end !items-end"
      className="self-end! w-full h-5/6 object-contain filter"
    />
  );
};

export default HeroImage;
