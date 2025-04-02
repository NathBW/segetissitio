import { Container, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";
import bannersoporte from "../assets/imagenes/bannersoporte.png";
import theme from "../theme";
import backgrounImage from "../assets/imagenes/fondoAzul.png";
import backgrounImageTwo from "../assets/imagenes/fondoblanco.png";
import capacitacion from "../assets/imagenes/aliado.png";




const sectionBoxStyle = {
    backgroundColor: theme.palette.background.darkest,
    padding: 3,
    borderRadius: 2,
    boxShadow: 2,
  };

const Soporte = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      
      {/* Sección de Encabezado */}
      <Box 
        sx={{ 
          backgroundImage: `url(${bannersoporte})`, 
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
        }}
      >
        <Typography variant="h1" sx={{color: theme.palette.text.main}}>Soporte</Typography>
      </Box>

      {/* Subtítulo */}
      <Box pb={10} sx={{backgroundImage: `url(${backgrounImageTwo})`, backgroundColor: theme.palette.text.light}}>
        <Typography variant="h2" color="secondary.main" mt={0} paddingTop={10} pb={5}>
          Preguntas Frecuentes
        </Typography>

        {/* Sección de Acordeón */}
        {[
          { title: "Pregunta 1", 
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            //detailImages: [ backgrounImage, backgrounImageTwo, backgrounImage ]
          },
          
          { title: "Pregunta 2", 
            text: "Texto" },

          { title: "Pregunta 3", 
            text: "Texto" },

          { title: "Pregunta 4", 
            text: "Texto" },

          { title: "Pregunta 5",
            text: "Texto" },
        
            { title: "Pregunta 6",
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
                "&.Mui-expanded": { color: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.light,
                },
                
            }} />}
              sx={{
                backgroundColor: theme.palette.primary.main, // Imagen de fondo específica para cada acordeón
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
                  backgroundColor: theme.palette.primary.light, // Cambiar fondo cuando esté expandido
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
      


      {/* How to Use Section */}
      <Box mt={0} pt={10} pb={10} sx={{backgroundImage: `url(${backgrounImage})`, backgroundColor: theme.palette.text.light}}>
              <Typography variant="h2" textAlign="center" color="text.main">
                Capacitaciones que Ofrecemos
              </Typography>
              <Box mt={5} mb={5}>
                <Typography sx={{ typography: theme.typography.text }} textAlign="center" fontWeight="regular" color="text.main">
                Si necesitas nuestra ayuda para capacitarte, ofrecemos nuestro servicio para capacitar a grupos, empresas y personas.
                </Typography>
              </Box>
      
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                {[
                  {
                    title: "Presencial",
                    frase: "Nosotros vamos a ti",
                    description: "Si necesitas que vayamos y capacitemos presencialmente. Escríbenos y nos reunimos con tu grupo, escuela, más, para enseñarles a usar la aplicación.",
                    image: capacitacion,
                  },
                  {
                    title: "Virtual",
                    frase: "En llamada",
                    description: "Si no tienes el espacio o el tiempo, no te preocupes, también realizamos capacitaciones virtuales.",
                    image: capacitacion,
                  },
                ].map((item, index) => (
                  <Grid item xs={12} md={10} key={index}>
                    <Box
                      display="flex"
                      alignItems="center"
                      sx={sectionBoxStyle}
                    >
                      <Box textAlign={{ xs: "center", md: "left" }}>
                        <Typography p={2} variant="h3" color="primary.light">
                          {item.title}
                        </Typography>
                        <Typography p={2} sx={{ typography: theme.typography.variabletext, color: theme.palette.primary.light, textAlign: "justify" }}>
                          {item.frase}
                        </Typography>
                        <Typography p={2} sx={{ typography: theme.typography.text, color: theme.palette.primary.light, textAlign: "left" }}>
                          {item.description}
                        </Typography>
                      </Box>
                      <img src={item.image} alt={item.title} style={{ objectFit: "contain" }} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
    
    {/*<Footer />*/}
    
    </Container>
  );
};

export default Soporte;
