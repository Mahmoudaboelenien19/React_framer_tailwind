import { Children } from "@/types";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

interface themeInterface {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
export const themeContext = createContext({} as themeInterface);
const ThemeContextProvider = ({ children }: Children) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <themeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};
export default ThemeContextProvider;
