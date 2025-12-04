import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import { useDrawerContext } from "../shared/context";
import { useEffect } from "react";


export const AppRoutes = () => {
    const {toggleDrawerOpen, setDrawerOption} = useDrawerContext();

    useEffect(() => {
        setDrawerOption([
            {
                label: "Página Inicial",
                icon: "home",
                path: "/pagina-inicial", 
            }
        ])
    },  []);
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
}