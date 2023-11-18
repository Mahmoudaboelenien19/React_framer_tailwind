import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "../widgets/Container";
import DownloadContent from "./downloadContent";
import img from "@/assets/images/cta/phone.svg";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
const Download = () => {
  return (
    <Container
      id="download"
      className="flex flex-col-reverse md:flex-row justify-center items-center gap:16  lg:gap-[200px]   "
    >
      <DownloadContent />
      <motion.div
        className="h-5/6 "
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <LazyLoadImage
          src={img}
          effect="blur"
          wrapperClassName="w-full h-full"
          className="self-end w-full h-full object-contain"
        />
      </motion.div>
    </Container>
  );
};

export default Download;
