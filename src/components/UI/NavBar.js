import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import Switch from '@mui/material/Switch';


export const NavBar = ({ drawerWidth = 200 }) => {
    const data = useContext(ThemeContext);
    
  return (
    
    <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'> PokemonDex </Typography>
                {/* <Typography variant='h8' noWrap component='div'> Login </Typography>     */}
                 <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton> 
            </Grid>
            <Switch name= "theme" onClick={data.handleTheme} id= "dark" value={data.theme==="dark" ? "light" : "dark"}/>

        </Toolbar>

    </AppBar>
  )
}