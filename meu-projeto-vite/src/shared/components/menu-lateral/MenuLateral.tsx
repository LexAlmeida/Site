import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../context";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IMenuLateral {
    children: React.ReactNode;
}
interface IListItemLinkProps {
    to: string;
    label: string;
    icon: string;
    onClick: (() => void) | undefined;
}
const ListItemLink = ({to, label, icon, onClick}: IListItemLinkProps) => {
    const navigate = useNavigate();
    const resolvedPath = useResolvedPath(to);
    const match = useMatch({path: resolvedPath.pathname, end: false})

    function handleClick(){
        navigate(to);
        onClick?.();
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

export const MenuLateral = ({children}: IMenuLateral) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useDrawerContext();
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
                        <List component='nav'>
                        {drawerOptions.map(drawerOption => (
                            <ListItemLink 
                            key={drawerOption.path}
                            icon={drawerOption.icon}
                            label={drawerOption.label}
                            to={drawerOption.path}
                            onClick={smDown ? toggleDrawerOpen : undefined}/>
                        ))}
                        </List>
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