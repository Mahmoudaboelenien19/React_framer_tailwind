import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import svg from "../../assets/images/hero/car.svg";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
const HeroImage = () => {
  return (
    <motion.div
      className="h-5/6 placeholder:w-full md:w-1/2"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <LazyLoadImage
        src={svg}
        effect="blur"
        alt={"car"}
        wrapperClassName=" h-full  w-full !flex !justify-end !items-end"
        className="self-end! w-full h-full object-contain filter"
      />
    </motion.div>
  );
};

export default HeroImage;
