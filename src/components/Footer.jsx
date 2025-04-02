import React from "react";
import { Box, Typography, Link, Grid, Divider, Button, SvgIcon } from "@mui/material";
import theme from "../theme";
import GooglePlayIcon from "../assets/imagenes/Google.svg"; // Agrega la imagen correcta
import AppStoreIcon from "../assets/imagenes/AppStore.png"; // Agrega la imagen correcta
import logo from "./../assets/imagenes/icono-tobias.png";
import instagramlogo from "./../assets/svg/iconoi.svg"
import youtubelogo from "./../assets/svg/iconoy.svg"
import facebooklogo from "./../assets/svg/iconof.svg"

const Footer = () => {
  return (
    <Box>
    <Box
      component="footer"
      className="footer"
        sx={{
            background: "linear-gradient(to bottom, #265026,#193419)",
            width: "100%",  
            color: theme.palette.text.light,
            padding: 4,
            textAlign: "center",
        }}
    >
      {/* Secciones principales */}
      <Grid container spacing={4} justifyContent="center" width="100%" margin={0}>
        {/* Secciones */}
        <Grid item xs={12} sm={6} md={2} >
          <Typography variant="h3" sx={{  mb: 2 }}>
            Secciones
          </Typography>
          <Link href="/" sx={{ typography:theme.typography.a, display: "block", mb: 1,  color: theme.palette.background.main }}>
            Inicio
          </Link>
          <Link href="/tematicas" sx={{ typography:theme.typography.a, display: "block", mb: 1, color: theme.palette.background.main  }}>
            Temáticas
          </Link>
          <Link href="/aula-virtual" sx={{ typography:theme.typography.a, display: "block", mb: 1, color: theme.palette.background.main  }}>
            Aula Virtual
          </Link>
          <Link href="/testimonios" sx={{ typography:theme.typography.a, display: "block", color: theme.palette.background.main  }}>
            Testimonios
          </Link>
        </Grid>

        {/* Certificados */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Certificados
          </Typography>
          <Link href="/sobre" sx={{ typography:theme.typography.a, display: "block", mb: 1, color: theme.palette.background.main  }}>
            Sobre
          </Link>
          <Link href="/otro" sx={{ typography:theme.typography.a, display: "block", color: theme.palette.background.main  }}>
            Otro
          </Link>
        </Grid>

        {/* Redes Sociales */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h3" sx={{  mb: 2 }}>
            Redes Sociales
          </Typography>
          <Link href="#" sx={{ typography:theme.typography.a, display: "block", mb: 1, color: theme.palette.background.main  }}>
          <img src={instagramlogo} style={{
          width: 20,
        }} />
            Instagram
          </Link>
          <Link href="#" sx={{ typography:theme.typography.a, display: "block", mb: 1, color: theme.palette.background.main  }}>
          <img src={facebooklogo} style={{
          width: 20,
        }} />
            Facebook
          </Link>
          <Link href="#" sx={{ typography:theme.typography.a, display: "block", color: theme.palette.background.main  }}>
          <img src={youtubelogo} style={{
          width: 20,
        }} />
            YouTube
          </Link>
        </Grid>

        {/* Soporte */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Soporte
          </Typography>
          <Link href="/faq" sx={{ typography:theme.typography.a, display: "block", mb: 1, color: theme.palette.background.main  }}>
            Preguntas Frecuentes
          </Link>
          <Link href="/contacto"  sx={{ typography:theme.typography.a, display: "block", color: theme.palette.background.main }}>
            Contacto
          </Link>
        </Grid>
        <Divider orientation="vertical" flexItem 
        sx={{ 
        mx: 2, 
        borderColor: theme.palette.text.light, 
        marginTop:5, 
        height: 150, 
        borderWidth: 2, 
        borderRadius: 5,
        [theme.breakpoints.down("sm")]: {
          transform: "rotate(90deg)", // Permite adaptación en móviles
          margin: 0,
          p: 0
        },
        }} />
        
              
        {/* Contacto */}
        <Grid item xs={12} sm={6} md={3}>

          <Typography variant="h3" sx={{  mb: 2 }}>
            Contacto
          </Typography>
          <img src={logo} alt="Tobías BPA Logo" style={{ height: 50 }} />
          <Typography sx={{typography:theme.typography.text, mb: 1 }}>(+571) 486 1725</Typography>
          <Typography sx={{typography:theme.typography.text, mb: 1 }}>
            Bogotá: Calle 106 # 54-73 Of. 703
          </Typography>
          <Typography sx={{typography:theme.typography.text}}>serviciocliente@segetis.co</Typography>
        </Grid>
      </Grid>



      {/* Línea divisoria */}
      <Divider 
      sx={{ 
        backgroundColor: theme.palette.text.light, 
        my: 3,
       }}
      
      />

      {/* Botones de App Store y Google Play */}
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
      <Button>
        <img
          src={GooglePlayIcon}
          alt="Google Play"
          style={{
            height: 30,
            transition: "opacity 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
          onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
        />
      </Button>
      <Button>
        <img
          src={AppStoreIcon}
          alt="App Store"
          style={{
            height: 30,
            transition: "opacity 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)}
          onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
        />
      </Button>

    </Box>

      {/* Derechos reservados */}
      <Typography sx={{ textAlign:"center", typography:theme.typography.text, color:theme.palette.text.main, mt: 2, opacity: 0.8 }}>
        Copyright © 2025 All Rights Reserved
      </Typography>
    </Box>
    </Box>

  );
};

export default Footer;
