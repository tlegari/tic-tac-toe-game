import { useState, createContext } from "react";

export const ThemeContext = createContext({})

export function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState("light")
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

