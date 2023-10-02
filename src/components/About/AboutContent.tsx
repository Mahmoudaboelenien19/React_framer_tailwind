import { fadeIn } from "@/utils/variants";
import Button from "../widgets/Button";
import AboutIcons from "./AboutIcons";
import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-8 justify-center items-center"
    >
      <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold txt capitalize gap-4 whitespace-nowrap">
        car services
        <span className="text-mainRed"> simplified.</span>
      </h1>
      <p className=" txt w-5/6  opacity-70 text-center">
        Rent, choose, and repair with ease. Our convenient locations, diverse
        car types, and reliable repair points ensure a seamless car experience.
      </p>
      <AboutIcons />

      <Button
        btn="See All Cars"
        fn={() => null}
        className="w-fit px-20 mx-auto"
      />
    </motion.div>
  );
};

export default AboutContent;
