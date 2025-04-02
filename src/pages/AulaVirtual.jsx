import { Container, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "../components/Footer";
import bannertematica from "../assets/imagenes/img-aula/banneraula-virtual.png";
import theme from "../theme";
import backgrounImage from "../assets/imagenes/fondoAzul.png";
import backgrounImageTwo from "../assets/imagenes/fondoblanco.png";
import certificado from "../assets/imagenes/aliado.png";

const externalButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1.5, 3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.main,
    "&:hover": {
      backgroundColor: theme.palette.background.light,
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: theme.spacing(1, 0),
    },
  }));

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
      margin: theme.spacing(1, 0),
    },
  }));

  
const AulaVirtual = () => {
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
          display: "flex", // Habilitar flexbox
          flexDirection: "column", // Alinear elementos en columna
          justifyContent: "flex-end", // Mover los textos hacia abajo
          alignItems: "center", // Centrar horizontalmente
          textAlign: "center", // Alinear texto al centro
          paddingBottom: 5, // Espaciado inferior
          gap: 5,
        }}
      >
        <Typography variant="h1" sx={{color: theme.palette.text.main}}>Aula Virtual</Typography>
        <Typography sx={{typography:theme.typography.text, color:theme.palette.text.main}}>Aprende con nosotros por medio de nuestra Aula Virtual, una forma diferente para que no te pierdas de nada</Typography>
        <DownloadButton variant="contained" alt="Aula Virtual" height="20" >
        Aula Virtual
        </DownloadButton>
      </Box>

      {/*Sección de Información*/}
      <Box
  sx={{
    backgroundImage: `url(${backgrounImage})`, 
    color: theme.palette.text.main,
    padding: 10,
    display: "flex",
    flexDirection: "column", // Cambio aquí para asegurar que el título esté arriba y centrado
    alignItems: "center", // Asegura que el título esté centrado horizontalmente
    gap: 4,
  }}
>
  {/* Título centralizado */}
  <Typography
    variant="h2"
    sx={{
      mb: 2,
      textAlign: "center", // Asegura que el texto esté alineado al centro
    }}
  >
    Información Extra
  </Typography>

  {/* Contenedor de contenido en filas */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // Apilar en pantallas pequeñas, en fila en grandes
      gap: 4,
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%", // Asegura que ocupe todo el ancho
    }}
  >
    {/* Columna de texto */}
    <Box sx={{ flex: 1 }}>
      <Box sx={{ textAlign: "left" }}>
        {/* Certificados */}
        <Typography variant="h3" sx={{ mb: 1 }}>
          Certificados
        </Typography>
        <Typography
          sx={{
            typography: theme.typography.variabletext,
            color: theme.palette.secondary.main,
            mb: 1,
          }}
        >
          No nos olvidamos
        </Typography>
        <Typography sx={{ typography: theme.typography.text, mb: 3 }}>
          Por medio del Aula Virtual también vas a ser capaz de conseguir tu certificado.
        </Typography>

        {/* Formas Evaluativas */}
        <Typography variant="h3" sx={{ mb: 1 }}>
          Formas Evaluativas
        </Typography>
        <ul
          style={{
            textAlign: "left",
            marginLeft: "1rem",
            typography: theme.typography.text,
          }}
        >
          <li>Se puede desde computador y tableta.</li>
          <li>No necesitas descargarla.</li>
          <li>Formas interactivas y diferentes de verificar lo aprendido.</li>
        </ul>
      </Box>
    </Box>

    {/* Columna de imágenes */}
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
      }}
    >
      <img
        src= {certificado}
        alt="Certificado"
        style={{
          width: "50%",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
      <img
        src= {certificado}
        alt="Evaluación"
        style={{
          width: "50%",
          maxWidth: "400px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      />
    </Box>
  </Box>
    </Box>


{/* Sección de Materiales de Ayuda */}
<Box sx={{ textAlign: "center", mt: 0, pt: 10, pb: 10, backgroundImage: `url(${backgrounImageTwo})`, }}>
  <Typography
    variant="h2"
    sx={{
      color: theme.palette.secondary.dark, 
      mb: 3
    }}
  >
    Materiales de Ayuda
  </Typography>

  {/* Contenedor con fondo y bordes redondeados */}
  <Box
    sx={{
      backgroundColor: theme.palette.background.darkest, // Color de fondo más claro
      padding: 4,
      borderRadius: 2,
      boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)", // Sombra suave
      display: "flex",
      flexDirection: "column",
      gap: 2,
      maxWidth: "800px",
      margin: "0 auto", // Centrar el contenedor
    }}
  >
    {/* Elementos de la lista con botones alineados a la derecha */}
    {[
      { text: "Mira este material externo acerca de cómo hacer el triple lavado.", link: "#" },
      { text: "Revisa con nosotros estos equipos de protección.", link: "#" },
      { text: "Mira estas nuevas leyes y normativas.", link: "#" },
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Separa el texto del botón
          padding: 2,
          backgroundColor: "transparent",
          borderRadius: 1,
        }}
      >
        <Typography sx={{ typography: theme.typography.text }}>
          • {item.text}
        </Typography>
        <Button
            variant="contained"
            sx={{
                backgroundColor: theme.palette.primary.dark,
                color: "white",
                "&:hover": {
                backgroundColor: theme.palette.primary.main,
                transform: "scale(1.05)",
                },
                borderRadius: "8px",
                minWidth: "140px", // Asegura un tamaño mínimo
                padding: "10px 20px", // Espaciado uniforme
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "bold",
                flexShrink: 0, // Evita que los botones se encojan en pantallas pequeñas
                [theme.breakpoints.down("sm")]: {

                minWidth: "unset", // Permite adaptación en móviles
                },
            }}
            >
            ABRIR CONTENIDO
        </Button>
      </Box>
    ))}
  </Box>
</Box>


        {/*<Footer />*/}
          
</Container>
    );
  };
  
  export default AulaVirtual;