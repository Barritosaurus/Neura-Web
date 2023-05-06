import React, { createContext, useContext } from "react";

const defaultTheme = { headerFont: "text-3xl" };

const ThemeContext = createContext(defaultTheme);

export const useTheme = () => {
	return useContext(ThemeContext);
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const theme = {
		headerFont: "text-3xl text-white font-h2 font-bold",
	};

	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
