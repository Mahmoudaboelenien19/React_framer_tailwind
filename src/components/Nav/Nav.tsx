import ThemeTogglar from "./ThemeTogglar";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import useNavTransition from "../customHooks/useNavTransition";
import Logo from "./Logo";
const Nav = () => {
  const { boxShadow, scale, LinkClr, navClr, navRef } = useNavTransition();
  const linksArr = [
    { link: "home", name: "Home" },
    { link: "services", name: "services" },
    { link: "about", name: "About" },
  ];
  const [value, setValue] = useState("");
  useMotionValueEvent(LinkClr, "change", (latest) => {
    setValue(latest);
  });
  return (
    <motion.nav
      ref={navRef}
      style={{ backgroundColor: navClr, color: LinkClr, boxShadow }}
      className="px-4 sticky top-0 left-0 w-full flex items-center justify-between cursor-pointer"
    >
      <Link to="home">
        <Logo fill={LinkClr} scale={scale} />
      </Link>

      <div className="flex justify-center gap-3">
        {linksArr.map(({ link, name }) => (
          <Link
            key={link}
            smooth
            spy
            className="hover:text-yellow-50"
            activeClass="text-green-500"
            to={link}
          >
            {name}
          </Link>
        ))}
      </div>

      <ThemeTogglar clr={value} />
    </motion.nav>
  );
};

export default Nav;
