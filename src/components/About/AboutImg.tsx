import Img from "@/assets/images/about/car01.png";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AboutImg = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className=" xl:pt-12    !w-full md:w-3/5      flex items-center "
    >
      <LazyLoadImage
        src={Img}
        effect="blur"
        alt=""
        wrapperClassName=" xl:pr-32 w-full  h-full  "
        className="w-full  h-full object-contain p-0   "
      />
    </motion.div>
  );
};

export default AboutImg;
