import { Avatar, Box, Divider, Drawer, useTheme } from "@mui/material"

interface IMenuLateral {
    children: React.ReactNode;
}

export const MenuLateral = ({children}: IMenuLateral) => {
    const theme = useTheme();
    return (
        <>
            <Drawer variant="permanent">
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
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
            {children}
        </>
    )
}