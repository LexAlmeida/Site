import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";

interface IThemeContext {
    themeName: 'light' | 'dark';
    toggleName: () => void;
};
interface IAppThemeProvider {
    children: React.ReactNode
}

const ThemeContext = createContext({} as IThemeContext);

export const useAppContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({children}: IAppThemeProvider) => {
    const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
    const toggleName = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    },[]);

    const theme = useMemo(() => {
        if(themeName === 'light') return LightTheme;
        return DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider value={{themeName, toggleName}}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}