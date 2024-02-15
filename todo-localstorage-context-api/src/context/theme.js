import { createContext, useContext } from "react";

const ThemeContext = createContext({
  themeMode: "light",
  lightMode: () => {},
  darkMode: () => {},
});

const ThemeProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useTheme };
