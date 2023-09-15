import ThemeTogglar from "./ThemeTogglar";
import { Link } from "react-scroll";
import { useState } from "react";
import { motion, useMotionValueEvent } from "framer-motion";
import useNavTransition from "../customHooks/useNavTransition";
import { CgMenuGridO } from "react-icons/cg";
import Logo from "./Logo";
import Links from "./Links";
import MenuLinks from "./MenuLinks";
import useScroll from "../customHooks/useScroll";
const Nav = () => {
  const { boxShadow, scale, LinkClr, navClr, navRef } = useNavTransition();

  const [value, setValue] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useMotionValueEvent(LinkClr, "change", (latest) => {
    setValue(latest);
  });

  useScroll(showMenu);
  return (
    <motion.nav
      ref={navRef}
      style={{ backgroundColor: navClr, color: LinkClr, boxShadow }}
      className="px-4 fixed top-0 left-0 w-full flex items-center justify-between cursor-pointer z-10"
    >
      <Link to="home">
        <Logo fill={LinkClr} scale={scale} />
      </Link>

      <Links />
      <div className="gap-2 flex items-center justify-center">
        <ThemeTogglar clr={value} />

        <CgMenuGridO
          className="text-2xl block z-10 md:hidden"
          onClick={handleShowMenu}
        />
        {showMenu && <MenuLinks handleShowMenu={handleShowMenu} />}
      </div>
    </motion.nav>
  );
};

export default Nav;
