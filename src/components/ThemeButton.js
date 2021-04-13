import React, { useContext } from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ThemeContext from "./context/ThemeContext";
import { IconButton } from "./ui/UIComponents";

const ThemeButton = () => {
  const { themeMode, setThemeMode } = useContext(ThemeContext);
  return (
    <IconButton
      onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
    >
      {themeMode === "light" ? <Brightness2Icon /> : <WbSunnyIcon />}
    </IconButton>
  );
};

export default ThemeButton;
