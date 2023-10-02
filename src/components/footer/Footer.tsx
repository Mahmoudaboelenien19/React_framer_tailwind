import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import CopyRight from "./CopyRight";
import FooterDescription from "./Footer description";
import NwesLetter from "./NwesLetter";
import WorkingHours from "./WorkingHours";

const Footer = () => {
  return (
    <div
      className="text-white mt-8 bg-gray-600 p-8 pb-0"
      id="
    "
    >
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center   gap-6 "
      >
        <FooterDescription />
        <WorkingHours />
        <NwesLetter />
      </motion.div>
      <CopyRight />
    </div>
  );
};

export default Footer;
