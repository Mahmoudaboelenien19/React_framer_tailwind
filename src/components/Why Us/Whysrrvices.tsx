import { MdHandshake, MdTrendingUp, MdKey } from "react-icons/md";
import Service from "./Service";

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
      head: "Modern & well maintained vehicles",
      Icon: <MdTrendingUp className="w-full h-full text-mainRed" />,
    },
    {
      service:
        "We prioritize your needs and go above and beyond to ensure your experience with us is nothing short of outstanding",
      head: "   Prompt and flexible services",
      Icon: <MdHandshake className="w-full h-full text-mainRed" />,
    },
  ];
  return (
    <div className="w-full flex flex-wrap justify-center gap-12 md:gap-8 ">
      {services.map((ser, i: number) => {
        return <Service key={i} {...ser} />;
      })}
    </div>
  );
};

export default Whysrrvices;
