import { useScroll, useTransform } from "framer-motion";
import { useContext, useRef } from "react";
import { themeContext } from "../context/themeContext";

const useNavTransition = <T extends HTMLElement>() => {
  const { theme } = useContext(themeContext);
  const navRef = useRef<T | null>(null);
  const { scrollY } = useScroll({
    target: navRef,
    layoutEffect: false,
  });
  const navClr = useTransform(
    scrollY,
    [0, 0.5],
    [!theme ? "#fff" : "#000", theme ? "#fff" : "#000"]
  );

  const LinkClr = useTransform(
    scrollY,
    [0, 0.5],
    [theme ? "#fff" : "#000", !theme ? "#fff" : "#000"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 0.5],
    ["0 0 0 000", ".5px .5px 1.5px 000"]
  );

  const scale = useTransform(scrollY, [0, 0.5], [0.6, 0.5]);
  return { navRef, navClr, LinkClr, boxShadow, scale };
};

export default useNavTransition;
