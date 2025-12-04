import { createContext, useCallback, useContext, useState } from "react";

interface IDrawerContext {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[]
    setDrawerOption: (newDrawerOption : IDrawerOption[]) => void
};
interface IAppThemeProvider {
    children: React.ReactNode
}
interface IDrawerOption {
    icon: string;
    path: string;
    label: string;
}
const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

export const DrawerProvider = ({children}: IAppThemeProvider) => {
    const [isDrawerOpen, setThemeName] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

    const toggleDrawerOpen = useCallback(() => {
        setThemeName(oldDrawerOpen => !oldDrawerOpen);
    },[]);

    const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    },[]);

    return (
        <DrawerContext.Provider value={{isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOption: handleSetDrawerOptions}}>
            {children}
        </DrawerContext.Provider>
    )
}