import { fadeIn } from "@/utils/variants";
import Button from "../widgets/Button";
import { motion } from "framer-motion";
const HeroText = () => {
  return (
    <motion.div
      className="  px-4  md:px-0 w-full   md:w-1/2   lg:max-w-xl flex flex-col  gap-4   mt-20 md:mt-0 p-0 md:p-6 "
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h1 className="text-4xl     lg:text-6xl font-bold  txt w-full  text-left">
        Explore the Finest
        <span className="text-mainRed"> Global</span> Offers
      </h1>
      <p className="txt opacity-75 capitalize text-sm  text-balance text-center">
        find your ideal ride for any adventure with our diverse range of
        affordable and dependable car rentals. find your ideal ride for any
        adventure with our diverse range of affordable and dependable car
        rentals.
      </p>
      <Button className=" mt-3  mx-auto" btn="Book Now" fn={() => {}} />
    </motion.div>
  );
};

export default HeroText;
