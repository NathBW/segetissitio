/*import React from 'react';
/*import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';*/
/*import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';*/

/*const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Ícono del menú (útil para mobile) *//*}
        {/*<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>*//*}

        {/* Logo o título *//*}
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          TOBÍAS BPA
        </Typography>

        {/* Botones de navegación *//*}
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Acerca de</Button>
        <Button color="inherit">Servicios</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;*/

import React, { useState } from "react";
import logo from "./../assets/imagenes/tobias-logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation } from "react-router-dom";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detecta si es móvil
  const location = useLocation();
  const currentPath = location.pathname; // Guarda la ruta actual ("/", "/tematicas", etc.)


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ color: "primary", padding: "8px 64px" , borderRadius: "20px"}}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo y Línea*/}
        <Box sx={{ display: "flex", alignItems: "center" /*, flexGrow: 1 */}}>
          {/*<Typography variant="h6" sx={{ fontWeight: 700 }}>
            TOBÍAS
          </Typography>*/}
          <img src={logo} alt="Tobías BPA Logo" style={{ height: 40 }} />

          <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: "#DBE64C", height: 40, borderWidth: 2}} />
        </Box>

        {/* Menú de navegación en desktop */}
        {!isMobile && (
          <>
            <Button 
              sx={{ position: "relative", color: currentPath === "/" ? "#DBE64C" : "inherit", "&::after": {content: '""',display: "block",width: currentPath === "/" ? "100%" : "0%",
                  height: "3px",backgroundColor: "#DBE64C",transition: "width 0.3s ease-in-out",
                  },"&:hover::after": {width: "100%",
                  },"&:hover": { backgroundColor: theme.palette.primary.light 
                  }}}color="inherit">
              <Typography   sx={{position: "relative", color: "inherit", "&:hover": { backgroundColor: theme.palette.primary.light },"&::after": currentPath === "/" ?
              {content: '""',position: "absolute",left: "50%",bottom: 0,width:"100%",height: "3px",backgroundColor: theme.palette.secondary.main, transform: "translateX(-50%)",} : {}, // Si no es la actual, no se agrega ::after
              }} variant="buttontext">Inicio</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Temáticas</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Aula Virtual</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Testimonios</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Soporte</Typography></Button>
          </>
        )}

        {/* Menú tipo hamburguesa en móvil */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: {
                  backgroundColor: theme.palette.primary.main, // Fondo azul
                  color: "#fff", // Texto blanco
                  width: 250, // Ancho del menú
                  height: 320, // Altura del menú
                  borderRadius: "0 0 0 20px", // Bordes redondeados
                },
              }}
            >
            <List>
              <ListItem button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} /*sx={{ backgroundColor: theme.palette.secondary.main, "&:hover": { backgroundColor: theme.palette.secondary.light } }}*/>
                <ListItemText primary="Inicio" sx={{ textAlign: "center", fontWeight: "bold", color: "#fff" }} />
              </ListItem>
              <Divider />
              <ListItem button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}}>
                <ListItemText primary="Temáticas" sx={{ textAlign: "center", color: "#fff" }} />
              </ListItem>
              <Divider />
              <ListItem button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}}>
                <ListItemText primary="Aula Virtual" sx={{ textAlign: "center", color: "#fff" }} />
              </ListItem>
              <Divider />
              <ListItem button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}}>
                <ListItemText primary="Capacitaciones" sx={{ textAlign: "center", color: "#fff" }} />
              </ListItem>
              <Divider />
              <ListItem button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}}>
                <ListItemText primary="Testimonios" sx={{ textAlign: "center", color: "#fff" }} />
              </ListItem>
              <Divider />
              <ListItem button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}}>
                <ListItemText primary="Soporte" sx={{ textAlign: "center", color: "#fff" }} />
              </ListItem>
            </List>
              </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

