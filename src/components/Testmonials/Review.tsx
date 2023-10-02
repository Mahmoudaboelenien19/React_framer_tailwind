import clsx from "clsx";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
  img: string;
  name: string;
  review: string;
  isActive: boolean;
}
const Review = ({ img, name, review, isActive }: Props) => {
  return (
    <motion.div
      className={clsx(
        "h-[300px] md:h-48 max-w-4xl flex flex-col md:flex-row  items-center  gap-4 md:gap-8  p-6 rounded transition w-10/12 mx-auto bg-gray-500 text-mainWhite",

        !isActive && "scale-90 blur-sm"
      )}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.8, 1] }}
      transition={{ delay: 0.1 }}
    >
      <div>
        <LazyLoadImage
          src={img}
          alt=""
          wrapperClassName="w-32 h-32 overflow-hidden  rounded-full"
          className=" h-full w-full object-cover"
        />
      </div>
      <div className="pt-0  md:pt-8 flex flex-col justify-between h-full opacity-60">
        <p>{review}</p>
        <div className="font-bold w-full text-right md:text-left mt-1">
          {name}
        </div>
      </div>
    </motion.div>
  );
};

export default Review;
