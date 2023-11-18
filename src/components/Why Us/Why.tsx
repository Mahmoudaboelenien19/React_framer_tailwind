import WhyHead from "./WhyHead";
import Container from "../widgets/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/images/why/car.png";
import Whysrrvices from "./Whysrrvices";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
const Why = () => {
  return (
    <Container
      className="flex  justify-center flex-col items-center gap-2  !py-16 "
      id="why"
    >
      <WhyHead />
      <motion.div
        className="h-64  my-4"
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        <LazyLoadImage
          src={img}
          alt=""
          effect="blur"
          wrapperClassName="h-full my-4"
          className="h-full object-contain "
        />
      </motion.div>
      <Whysrrvices />
    </Container>
  );
};
export default Why;
