import { Button } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppContext } from "../shared/context/ThemeContext";


export const AppRoutes = () => {
    const {toggleName} = useAppContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleName}>Toggle Theme</Button>}/>

            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    )
}