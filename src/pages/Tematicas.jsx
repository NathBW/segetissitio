import { Container, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";
import bannertematica from "../assets/imagenes/img-tematicas/bannertematicas.png";
import theme from "../theme";
import avesImage from "../assets/imagenes/img-tematicas/aves.png"; // Importa la imagen de aves
import agricultoresImage from "../assets/imagenes/img-tematicas/agricultores.png"; // Importa la imagen de aves
import abejasImage from "../assets/imagenes/img-tematicas/abejas.png"; // Importa la imagen de aves
import organismosImage from "../assets/imagenes/img-tematicas/organismos.png"; // Importa la imagen de aves
import distribuidoresImage from "../assets/imagenes/img-tematicas/distribuidores.png"; // Importa la imagen de aves
import GooglePlayIcon from "../assets/imagenes/iconoplay.png";
import AppStoreIcon from "../assets/imagenes/iconoapple.png";
import backgrounImage from "../assets/imagenes/fondoAzul.png";
import backgrounImageTwo from "../assets/imagenes/fondoblanco.png";


const DownloadButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  backgroundColor: theme.palette.background.main,
  color: theme.palette.text.dark,
  "&:hover": {
    backgroundColor: theme.palette.background.light,
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));



const Tematicas = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      
      {/* Sección de Encabezado */}
      <Box 
        sx={{ 
          backgroundImage: `url(${bannertematica})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          height: 400,
          color: "white",
          py: 10,
          borderRadius: "0px 0px 10px 10px",
          display: "flex", // Habilitar flexbox
          flexDirection: "column", // Alinear elementos en columna
          justifyContent: "flex-end", // Mover los textos hacia abajo
          alignItems: "center", // Centrar horizontalmente
          textAlign: "center", // Alinear texto al centro
          paddingBottom: 5, // Espaciado inferior
          gap: 2,
        }}
      >
        <Typography variant="h1" sx={{color: theme.palette.text.main}}>Temáticas</Typography>
        <Typography sx={{typography:theme.typography.text, color:theme.palette.text.main}}>Estas son las temáticas que podrás aprender en la aplicación</Typography>
      </Box>

      {/* Subtítulo */}
      <Box pb={10} sx={{backgroundImage: `url(${backgrounImageTwo})`, backgroundColor: theme.palette.text.light}}>
        <Typography variant="h2" color="secondary.main" mt={0} paddingTop={10}>
          Temáticas
        </Typography>
        <Typography sx={{typography:theme.typography.text}} mt={2} mb={3}>
          Podrás aprender diferentes cosas que facilitarán y mejorarán tu trabajo.
        </Typography>

        {/* Sección de Acordeón */}
        {[
          { title: "Aves", 
            image: avesImage, 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            detailImages: [ backgrounImage, backgrounImageTwo, abejasImage ]
          },
          
          { title: "Agricultores", 
            image: agricultoresImage,
            text: "Texto" },

          { title: "Abejas", 
            image: abejasImage,
            text: "Texto" },

          { title: "Organismos Acuáticos", 
            image: organismosImage,
            text: "Texto" },

          { title: "Distribuidores y Transportadores",
            image: distribuidoresImage,
            text: "Texto" },
            
        ].map((item, index) => (
          <Accordion
            key={index}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
              boxShadow: "0px 3px 0px rgba(0, 0, 0, 0.5)", // Sombra del acordeón
              "&:last-child": {
                borderRadius: 5
              },
              backgroundColor: "transparent", // Fondo transparente para el acordeón
            }}
          >
            <AccordionSummary 
              expandIcon={
              <ExpandMoreIcon 
              sx={{ 
                fontSize:"5rem", 
                color: "background.main",  
                borderRadius: "50%",
                "&:hover": { color: theme.palette.background.light}, 
                "&:active": { color: theme.palette.background.dark },
                "&.Mui-expanded": { color: "rgba(0,0,0, 0)"
                },
                
            }} />}
              sx={{
                backgroundImage: `url(${item.image})`, // Imagen de fondo específica para cada acordeón
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "text.main",
                borderRadius: 5,
                mt: 2,
                height: 100, // Altura fija para el encabezado
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                },
                "&.Mui-expanded": {
                  backgroundColor: "rgba(0,0,0, 0)", // Cambiar fondo cuando esté expandido
                },
              }}
            >
              <Typography variant="h3" sx={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#7184D0", // Fondo oscuro para el contenido7184D0
                typography: theme.typography.text,
                color: "text.dark",
                padding: 3,
                mt: 0.5,
                display: "flex", // Usar flexbox para organizar las columnas
                flexDirection: { xs: "column", md: "row" }, // Columnas en pantallas grandes, apilado en pequeñas
                gap: 3, // Espaciado entre columnas
                alignItems: "center", // Centrar contenido verticalmente
                borderRadius: "5px 5px 20px 20px", // Bordes redondeados
              }}
            >
        {/* Columna de imágenes */}
        {item.detailImages?.length > 0 && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
            }}
          >
            {item.detailImages.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`${item.title} detalle ${imgIndex + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
        )}

        {/* Columna de texto */}
        <Box sx={{ flex: 2, textAlign: "left" }}>
          <Typography sx={{ mb: 2, typography: theme.typography.text }}>{item.text}</Typography>
        </Box>
            </AccordionDetails>
          </Accordion>
        

      ))}
      </Box>

      {/* Sección de Descarga */}
      <Box
        sx={{
          backgroundImage: `url(${backgrounImage})`, // Fondo azul oscuro
          color: "white", // Color del texto
          padding: 10, // Espaciado interno
          borderRadius: "10px 10px 0px 0px", // Bordes redondeados
          mt: 0, // Margen superior
          textAlign: "center", // Centrar texto
        }}
      >
        <Typography variant="h2" sx={{ mb: 2, color: theme.palette.text.main }}>
          Descargar
        </Typography>
        <Box backgroundColor="primary.main" p={5} mt={5} borderRadius={2}>
        <Typography sx={{ mt:4, mb: 4, typography: theme.typography.text, color: theme.palette.text.main }}>
          Descarga nuestra aplicación para poder aprender más
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2, // Espaciado entre botones
            flexDirection: { xs: "column", sm: "row" }, // Apilar en pantallas pequeñas, en fila en pantallas grandes
            alignItems: "center", // Centrar botones horizontalmente cuando están apilados
          }}
        >
          {/* Botón de Play Store */}
            <DownloadButton variant="contained" startIcon={<img src={GooglePlayIcon} alt="Google Play" height="20" />}>
              Play Store
            </DownloadButton>
            <DownloadButton variant="contained" startIcon={<img src={AppStoreIcon} alt="App Store" height="20" />}>
              App Store
            </DownloadButton>
          </Box>
        </Box>

      </Box>
    
    {/*<Footer />*/}
    
    </Container>
  );
};

export default Tematicas;
