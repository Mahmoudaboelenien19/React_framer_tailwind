import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import CarsSlide from "./CarsSlide";
import Container from "../widgets/Container";

const Cars = () => {
  return (
    <Container
      className="max-w-screen !py-28 md:!py-12  mx-auto flex flex-col justify-between items-center "
      id="cars"
    >
      <motion.h1
        className="font-sofia txt text-5xl font-bold relative w-fit mx-auto capitalize"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.2, 0.4, 0.6, 1] }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ amount: 0.6, once: true }}
      >
        Our Cars
        <div className="absolute top-full right-0 w-full h-1 bg-mainRed "></div>
      </motion.h1>
      <motion.div
        className="w-full h-full"
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <CarsSlide />
      </motion.div>
    </Container>
  );
};

export default Cars;
