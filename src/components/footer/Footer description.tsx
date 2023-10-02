import { useContext } from "react";
import Logo from "../Nav/Logo";
import { themeContext } from "../context/themeContext";
import { MdEmail, MdPhone } from "react-icons/md";
import FooterContent from "./FooterContent";

const FooterDescription = () => {
  const { theme } = useContext(themeContext);
  const arr = [
    { Icon: <MdEmail />, content: "office@carland.com" },

    { Icon: <MdPhone />, content: "(123)456-789" },
  ];

  return (
    <FooterContent head={<Logo fill={theme ? "white" : "black"} scale={1} />}>
      <p className=" text-center max-w-xs">
        Unlock the freedom of renting cars anytime, anywhere effortlessly.
      </p>

      {arr.map(({ Icon, content }, index) => (
        <div
          key={index}
          className=" my-2 flex gap-4 txt items-center  text-mainWhite opacity-60"
        >
          {Icon}
          <p className="">{content}</p>
        </div>
      ))}
    </FooterContent>
  );
};

export default FooterDescription;
