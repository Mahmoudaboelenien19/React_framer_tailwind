import { motion } from "framer-motion";

const CopyRight = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.2, 0.6] }}
      transition={{ delay: 0.8 }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full flex justify-center text-sm md:text-2xl  p-4  mt-2  "
    >
      <small>Car Land &copy; 2023. All rights reserved.</small>
    </motion.div>
  );
};

export default CopyRight;
