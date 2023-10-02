import Audi from "@/assets/icons/brands/audi.svg";
import Bmw from "@/assets/icons/brands/bmw.svg";
import Mazada from "@/assets/icons/brands/mazda.svg";
import Ford from "@/assets/icons/brands/ford.svg";
import mercedes from "@/assets/icons/brands/mercedes.svg";
import skoda from "@/assets/icons/brands/skoda.svg";
import Vw from "@/assets/icons/brands/vw.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";
const BrandsArr = [Audi, Bmw, Mazada, Ford, mercedes, skoda, Vw];
const Barnds = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="  flex flex-wrap  justify-center mx-auto  w-full  md:w-5/6 gap-3 md:gap-14   mt-4 "
    >
      {BrandsArr.map((brand: string, i) => {
        return (
          <LazyLoadImage
            src={brand}
            className="scale-100 md:scale-125   opacity-60"
            key={i}
          />
        );
      })}
    </motion.div>
  );
};

export default Barnds;
