import * as React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { themeContext } from "../context/themeContext";

const ThemeTogglar = ({ clr }: { clr: string }) => {
  const { setTheme, theme } = React.useContext(themeContext);
  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked);
  };

  return (
    <DarkModeSwitch
      moonColor={clr}
      sunColor={clr}
      checked={theme}
      onChange={toggleDarkMode}
      size={20}
    />
  );
};
export default ThemeTogglar;
