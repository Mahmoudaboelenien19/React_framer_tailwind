import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

const WhyHead = () => {
  return (
    <motion.div
      className=" gap-2 flex flex-col mt-8"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2 className=" txt text-4xl md:text-3xl lg:text-4xl font-bold capitalize text-center    mb-2 ">
        Unmatched excellence and customer satisfaction
      </h2>
      <p className="mx-auto max-w-xl  text-center txt  opacity-60 text-xs md:text-base ">
        Our dedication to providing exceptional services sets us apart
        competition. From from the moment you engage with us, we strive to
        exceed your expectations in every interaction.
      </p>
    </motion.div>
  );
};

export default WhyHead;
