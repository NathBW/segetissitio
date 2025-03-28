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
import { Link } from "react-router-dom";


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
    <AppBar component="header" className="header" position="static" sx={{ color: "primary", padding: "8px 64px" , borderRadius: "20px", marginTop: "2rem", }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo y Línea*/}
        <Box sx={{ display: "flex", alignItems: "center" /*, flexGrow: 1 */}}>
          {/*<Typography variant="h6" sx={{ fontWeight: 700 }}>
            TOBÍAS
          </Typography>*/}
          <img src={logo} alt="Tobías BPA Logo" style={{ height: 40 }} />

          <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: theme.palette.text.light, height: 40, borderWidth: 2}} />
        </Box>

        {/* Menú de navegación en desktop */}
        {!isMobile && (
          <>
            <Button component={Link} to="/"
              sx={{
                position: "relative", // Necesario para ::after
                color: currentPath === "/" ? theme.palette.background.main : "inherit",
                "&:hover": { backgroundColor: theme.palette.primary.light },
                "&::after": currentPath === "/" ? { // Si es la página actual
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: theme.palette.background.main, // Color de la línea
                  transform: "translateX(-50%)", // Centrar la línea
                  borderRadius: " 0 0 5px 5px",
                } : {}, // Si no es la actual, no se agrega ::after
              }}> 
              <Typography variant="buttontext">Inicio</Typography>
            </Button>

            <Button component={Link} to="/tematicas"
              sx={{
                position: "relative", // Necesario para ::after
                color: currentPath === "/tematicas" ? theme.palette.background.main : "inherit",
                "&:hover": { backgroundColor: theme.palette.primary.light },
                "&::after": currentPath === "/tematicas" ? { // Si es la página actual
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: theme.palette.background.main, // Color de la línea
                  transform: "translateX(-50%)", // Centrar la línea
                  borderRadius: " 0 0 5px 5px",
                } : {}, // Si no es la actual, no se agrega ::after
              }}> 
              <Typography variant="buttontext">Temáticas</Typography>
            </Button>  

            <Button 
              sx={{
                position: "relative", // Necesario para ::after
                color: currentPath === "/tema" ? theme.palette.background.main : "inherit",
                "&:hover": { backgroundColor: theme.palette.primary.light },
                "&::after": currentPath === "/tema" ? { // Si es la página actual
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: theme.palette.background.main, // Color de la línea
                  transform: "translateX(-50%)", // Centrar la línea
                  borderRadius: " 0 0 5px 5px",
                } : {}, // Si no es la actual, no se agrega ::after
              }}> 
              <Typography variant="buttontext">Aula Virtual</Typography>
            </Button> 

            <Button 
              sx={{
                position: "relative", // Necesario para ::after
                color: currentPath === "/tema" ? theme.palette.background.main : "inherit",
                "&:hover": { backgroundColor: theme.palette.primary.light },
                "&::after": currentPath === "/tema" ? { // Si es la página actual
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: theme.palette.background.main, // Color de la línea
                  transform: "translateX(-50%)", // Centrar la línea
                  borderRadius: " 0 0 5px 5px",
                } : {}, // Si no es la actual, no se agrega ::after
              }}> 
              <Typography variant="buttontext">Testimonios</Typography>
            </Button>

            <Button 
              sx={{
                position: "relative", // Necesario para ::after
                color: currentPath === "/tema" ? theme.palette.background.main : "inherit",
                "&:hover": { backgroundColor: theme.palette.primary.light },
                "&::after": currentPath === "/tema" ? { // Si es la página actual
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  bottom: 0,
                  width: "100%",
                  height: "4px",
                  backgroundColor: theme.palette.background.main, // Color de la línea
                  transform: "translateX(-50%)", // Centrar la línea
                  borderRadius: " 0 0 5px 5px",
                } : {}, // Si no es la actual, no se agrega ::after
              }}> 
              <Typography variant="buttontext">Soporte</Typography>
            </Button>

            {/*<Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Temáticas</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Aula Virtual</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Testimonios</Typography></Button>
            <Button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} color="inherit"> <Typography variant="buttontext">Soporte</Typography></Button>+*/}
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
              <ListItem component={Link} to="/" button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}} /*sx={{ backgroundColor: theme.palette.secondary.main, "&:hover": { backgroundColor: theme.palette.secondary.light } }}*/>
                <ListItemText primary="Inicio" sx={{ textAlign: "center", fontWeight: "bold", color: "#fff" }} />
              </ListItem>
              <Divider />
              <ListItem component={Link} to="/tematicas" button sx={{"&:hover": { backgroundColor: theme.palette.primary.light }}}>
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

