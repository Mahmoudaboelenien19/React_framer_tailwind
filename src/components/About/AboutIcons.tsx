import { useRef } from "react";
import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
const AboutArr = [
  {
    Icon: <MdOutlineDirectionsCar className="w-full h-full" />,
    num: 50,
    text: "Cars type",
  },
  {
    Icon: <MdOutlineMapsHomeWork className="w-full h-full" />,
    num: 150,
    text: "Rental outlets",
  },
  {
    Icon: <MdOutlineBuildCircle className="w-full h-full" />,
    num: 35,
    text: "Repair points",
  },
];
const AboutIcons = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.8 });
  return (
    <div className="flex  gap-20 w-3/4 justify-center" ref={ref}>
      {AboutArr.map(({ Icon, num, text }, index) => {
        return (
          <div key={index} className="txt flex flex-col h-28 items-center">
            <div className="w-10 h-10 text-mainRed">{Icon}</div>
            {inView && (
              <CountUp
                end={num}
                duration={500 / num}
                className="txt text-2xl font-black"
              />
            )}
            <p className="capitalize text-center w-10 opacity-60 txt">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutIcons;
