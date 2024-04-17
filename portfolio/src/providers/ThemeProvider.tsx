import React, { useState, createContext } from "react";

type DarkModeContext = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<DarkModeContext>({darkMode: false} as DarkModeContext);

export function DarkModeProvider({ children }: {children: React.ReactNode}){
  const [darkMode, setdarkMode] = useState<boolean>(false);
  
  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  }

  return (
    <ThemeContext.Provider value= {{darkMode, toggleDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
}