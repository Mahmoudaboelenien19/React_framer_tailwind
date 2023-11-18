import { fadeIn } from "@/utils/variants";
import Button from "../widgets/Button";
import { motion } from "framer-motion";
const HeroText = () => {
  return (
    <motion.div
      className="  px-4  md:px-0 w-full   md:w-[40ch] lg:w-[60ch]   lg:max-w-xl flex flex-col  gap-4    p-0 md:p-6 "
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h1 className="md:text-4xl text-5xl     lg:text-6xl font-bold  txt w-full  text-left">
        Explore the Finest
        <span className="text-mainRed"> Global</span> Offers
      </h1>
      <p className="txt opacity-70 capitalize text-sm   md:text-xs  lg:text-sm">
        find your ideal ride for any adventure with our diverse range of
        affordable and dependable car rentals. find your ideal ride for any
        adventure with our diverse range of affordable and dependable car
        rentals.
      </p>
      <Button className=" mt-3  " btn="Book Now" fn={() => {}} />
    </motion.div>
  );
};

export default HeroText;
