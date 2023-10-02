import Google from "@/assets/icons/buttons/google-play.svg";
import Apple from "@/assets/icons/buttons/app-store.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const DownloadContent = () => {
  const iconsAr = [Google, Apple];
  return (
    <div className="txt  mr-0 sm:mx-auto lg:mx-0 md:mr-8 mt-10 max-w-md  ">
      <motion.h3
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="font-bold text-4xl  "
      >
        Download our App now and hit the road with ease
      </motion.h3>

      <motion.p
        className="my-4 opacity-60 whitespace-break-spaces "
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
      >
        Download our App now and hit the road with ease. Rent a car hassle-free,
        choose from a wide range of vehicles, and enjoy seamless booking and
        pick-up experience.
      </motion.p>
      <div>
        <motion.div
          className="flex w-full justify-center gap-7 mt-6"
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {iconsAr.map((icon, index) => (
            <div key={index} className="bg-gray-500 w-40  h-14 p-2 rounded">
              <LazyLoadImage
                src={icon}
                wrapperClassName="h-full w-full"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadContent;
