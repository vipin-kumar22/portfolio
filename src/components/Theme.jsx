import React, { createContext, useEffect, useState } from "react";

const dark = {
  bgColor: "bg-black",
  bgColor2: "bg-[#1a1a1a]",
  text1: "text-white",
  border: "border border-white",
};
const light = {
  bgColor: "bg-white",
  text1: "text-black",
  text2: "text-gray-800",
  border: "",
  bgColor: "",
};
export const ThemeContext = createContext({
  theme: light,
  toggleMode: () => {},
});

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") === "true" ? true : false
  );

  const toggleMode = () => {
    console.log("Toggle function is clicked");
    setMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("theme", mode);
    console.log("Mode changed:", mode);
  }, [mode]);

  const theme = mode ? dark : light;

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
