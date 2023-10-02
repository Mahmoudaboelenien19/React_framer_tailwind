import { MdHandshake, MdTrendingUp, MdKey } from "react-icons/md";
import Service from "./Service";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

const Whysrrvices = () => {
  const services = [
    {
      service:
        "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding",
      head: "Rent simply and quickly",
      Icon: <MdKey className="w-full h-full text-mainRed" />,
    },
    {
      service:
        "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding",
      head: "Modern maintained vehicles",
      Icon: <MdTrendingUp className="w-full h-full text-mainRed" />,
    },
    {
      service:
        "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding",
      head: "     flexible services",
      Icon: <MdHandshake className="w-full h-full text-mainRed" />,
    },
  ];
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="w-full flex flex-wrap justify-center gap-12 md:gap-8"
    >
      {services.map((ser, i: number) => {
        return <Service key={i} {...ser} />;
      })}
    </motion.div>
  );
};

export default Whysrrvices;
