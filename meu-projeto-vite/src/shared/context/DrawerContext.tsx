import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContext {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
};
interface IAppThemeProvider {
    children: React.ReactNode
}

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider = ({children}: IAppThemeProvider) => {
    const [isDrawerOpen, setThemeName] = useState(false);
    const toggleDrawerOpen = useCallback(() => {
        setThemeName(oldDrawerOpen => !oldDrawerOpen);
    },[]);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, toggleDrawerOpen}}>
            {children}
        </DrawerContext.Provider>
    )
}