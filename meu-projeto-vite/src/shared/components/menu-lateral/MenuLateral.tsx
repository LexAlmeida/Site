import { Avatar, Box, Divider, Drawer, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../context";

interface IMenuLateral {
    children: React.ReactNode;
}

export const MenuLateral = ({children}: IMenuLateral) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();
    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? "temporary" : "permanent"} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar 
                        sx={{height: theme.spacing(12), width: theme.spacing(12)}}
                        src="https://cataas.com/cat" />
                    </Box>
                    <Divider/>
                    <Box flex={1}>

                    </Box>
                </Box> 
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
            {children}
        </>
    )
}