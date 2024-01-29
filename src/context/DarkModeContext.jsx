import {createContext, useContext, useState} from "react";
const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
        updateDarkMode(!darkMode);
    }

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
                {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}