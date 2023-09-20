import {
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
  MdOutlineMapsHomeWork,
} from "react-icons/md";

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
  return (
    <div className="flex  gap-20 w-3/4 justify-center">
      {AboutArr.map(({ Icon, num, text }, index) => {
        return (
          <div
            key={index}
            className="text-mainDark flex flex-col h-28 items-center"
          >
            <div className="w-10 h-10 text-mainRed">{Icon}</div>
            <h1 className="text-mainBlack dark:text-mainWhite text-2xl font-black">
              {num}
            </h1>
            <p className="capitalize text-center w-10 opacity-60  text-mainBlack dark:text-mainWhite">
              {text}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutIcons;
