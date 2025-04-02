import { Container, Typography, Button, Box, Grid, List, ListItem, Divider } from "@mui/material";
import { styled } from "@mui/system";
import GooglePlayIcon from "../assets/imagenes/iconoplay.png";
import AppStoreIcon from "../assets/imagenes/iconoapple.png";
import Footer from "../components/Footer";
import theme from "../theme";
import backgroundVideo from "../assets/videos/PARTE1.mp4";
import backgrounImage from "../assets/imagenes/fondoAzul.png";
import backgrounImageTwo from "../assets/imagenes/fondoblanco.png";
import aliado from "../assets/imagenes/aliado.png";
import mapausuario from "../assets/imagenes/mapa.png";
import loginImage from "../assets/imagenes/celular.png";

// Estilos reutilizables
// Sección de estilo para el contenedor de la sección
const sectionBoxStyle = {
  backgroundColor: theme.palette.background.darkest,
  padding: 3,
  borderRadius: 2,
  boxShadow: 2,
};

// Constantes vídeo
const HeroBanner = styled(Box)({
  position: "relative",
  width: "100%",
  height: "50vh",
  minHeight: "600px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const VideoBackground = styled("video")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: 0,
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  maxWidth: "800px",
  padding: theme.spacing(4),
  backgroundColor: "hsla(234, 61.40%, 40.60%, 0.21)",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  textAlign: "center",
  margin: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    width: "90%",
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
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));

const allies = [
  { id: 1, name: "ANLA", image: aliado },
  { id: 2, name: "ANLA", image: aliado },
  { id: 3, name: "ANLA", image: aliado },
  { id: 4, name: "ANLA", image: aliado },
  { id: 5, name: "ANLA", image: aliado },
];

const Home = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      {/* Hero Banner */}
      <HeroBanner>
        <VideoBackground autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </VideoBackground>

        <HeroContent>
          <Typography variant="h1" component="h1" sx={{ color: theme.palette.text.main }}>
            ¡Descarga Ya!
          </Typography>
          <Typography sx={{typography:theme.typography.text}} paragraph>
            TOBIAS BPA es una App donde podrás entender, aprender y fortalecer tus conocimientos de Buenas prácticas agrícolas.
          </Typography>
          <Divider sx={{ bgcolor: "white", my: 3 }} />
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <DownloadButton variant="contained" startIcon={<img src={GooglePlayIcon} alt="Google Play" height="20" />}>
              Play Store
            </DownloadButton>
            <DownloadButton variant="contained" startIcon={<img src={AppStoreIcon} alt="App Store" height="20" />}>
              App Store
            </DownloadButton>
          </Box>
        </HeroContent>
      </HeroBanner>

      {/* Allies Section */}
      <Box textAlign="center" mt={0} sx={{ backgroundImage: `url(${backgrounImage})`, backgroundSize: "cover", padding: 10 }}>
        <Typography variant="h2" color="text.main">
          Aliados y Entidades
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          {allies.map((ally) => (
            <Grid item key={ally.id}>
              <img src={ally.image} alt={`Aliado ${ally.id}`} height="100" />
              <Typography sx={{ typography: theme.typography.h3, color: theme.palette.text.main }}>{ally.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How to Use Section */}
      <Box mt={0} pt={10} pb={10} sx={{backgroundImage: `url(${backgrounImageTwo})`, backgroundColor: theme.palette.text.light}}>
        <Typography variant="h2" textAlign="center" color="secondary.light">
          ¿Cómo utilizar?
        </Typography>
        <Box mt={5} mb={5}>
          <Typography sx={{ typography: theme.typography.text }} textAlign="center" fontWeight="regular" color="text.dark">
            Con nuestra aplicación podrás realizar diferentes cosas
          </Typography>
        </Box>

        <Grid container spacing={8} alignItems="center" justifyContent="center">
          {[
            {
              title: "Iniciar Sesión",
              description:
                "La aplicación te permite crear tu sesión para que mantengas tu información necesaria acerca de BPA. Lo que tienes que llenar a la hora de crear tu cuenta es tus nombres y apellidos completos, tu rol dentro de el ciclo de proceso agrícola, el departamento y municipio donde vives. También, tienes que específicar con cual producto es con el que trabajas y además, tu número de télefono para que se tenga claro. Autorizas el tratamiento y los términos y condiciones y listo, ya estarás preparado para iniciar con las capacitaciones que ofrece TOBÍAS BPA.",
              image: loginImage,
            },
            {
              title: "Cambiar Foto de Perfil",
              description: "La aplicación te permite personalizar tu perfil como guardar el tipo de cultivo que manejes o tener una foto de perfil más a tu propio gusto. Lo único que tienes que hacer es irte a perfil y darle tap a la imagen de perfil de Tobías. Ahí, te permite tomar una foto o escogerla desde tu galería.",
              image: loginImage,
            },
            {
              title: "Aprende diferentes temáticas",
              description: "La aplicación te mostrará diferentes temáticas que podrás cursar a tu propio tiempo, solo tienes que irte a temáticas y escoger el tema que más te guste. También podrás mantener pendiente el porcentaje que vas de cada tema y ganar diferentes premios.",
              image: loginImage,
            },
            {
              title: "Descarga tu certificado",
              description: "Para verificar que aprendas, te daremos diferentes trivias que tendrás que resolver y con eso, podrás descargar tu certificado que está validado por diferentes entidades gubernamentales como el ANLA.",
              image: loginImage,
            },
          ].map((item, index) => (
            <Grid item xs={12} md={10} key={index}>
              <Box
                display="flex"
                alignItems="center"
                gap={5}
                sx={sectionBoxStyle}
                flexDirection={{ xs: "column-reverse", md: index % 2 === 0 ? "row" : "row-reverse" }} // Alterna la posición
              >
                <img src={item.image} alt={item.title} style={{ width: "250px", objectFit: "contain" }} />
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Typography p={2} variant="h3" color="primary.light">
                    {item.title}
                  </Typography>
                  <Typography p={2} sx={{ typography: theme.typography.text, color: theme.palette.primary.light, textAlign: "justify" }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

            {/* Benefits Section */}
            <Box mt={0} sx={{ backgroundImage: `url(${backgrounImage})`, backgroundSize: "cover", padding: 10 }}>
        <Typography textAlign="center" variant="h2" color="text.main">
          Beneficios
        </Typography>
        <Grid mt={2} container spacing={5} textAlign="left" alignItems="left" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" color="text.main" mb={2}>
              Certificados
            </Typography>
            <Typography sx={{ typography: theme.typography.variabletext }} color="secondary.main" mb={1}>
              Descarga tus certificados
            </Typography>
            <Typography sx={{ typography: theme.typography.text }} mb={4} color="text.main">
              Podrás conseguir certificados que están avalados por las entidades gubernamentales.
            </Typography>
            <Typography variant="h3" color="text.main" mt={10}>
              Otros Beneficios
            </Typography>
            <List
              sx={{
                typography: theme.typography.text,
                listStyleType: "disc",
                paddingLeft: 2,
                color: theme.palette.text.main,
                fontWeight: "light",
              }}
            >
              <ListItem>• Aprenderás sobre etiquetas.</ListItem>
              <ListItem>• Aprenderás sobre Equipos de protección personal.</ListItem>
              <ListItem>• Aprenderás sobre el Destino Ambiental.</ListItem>
              <ListItem>• Aprenderás sobre las franjas de seguridad.</ListItem>
              <ListItem>• Aprenderás sobre contingencias.</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
              <img src={aliado} alt="Certificado" style={{ width: "30%", maxWidth: "350px", borderRadius: 8 }} />
              <img src={aliado} alt="Beneficio" style={{ width: "30%", maxWidth: "350px", borderRadius: 8 }} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Users and Map Section */}
      <Box mt={0} textAlign="center" sx={{ backgroundImage: `url(${backgrounImageTwo})`, backgroundSize: "cover", backgroundColor: theme.palette.text.light ,padding: 10 }}>
        <Typography variant="h2" color="secondary.light" mb={5}>
          #Usuarios
        </Typography>

        {/* Tarjetas de estadísticas */}
        <Grid container spacing={3} justifyContent="center" mb={5}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.common.white,
                borderRadius: "100px 5px",
                padding: 3,
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                # Descargas
              </Typography>
              <Typography mt={2}>
                Más de mil personas han descargado la aplicación.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.common.white,
                borderRadius: "5px 100px",
                padding: 3,
                boxShadow: 3,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                # Capacitados
              </Typography>
              <Typography mt={2}>
                Esta es la cantidad de gente que ha aprendido con nosotros.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Mapa con etiquetas */}
        <Box position="relative" display="inline-block" width="80%">
          <img src={mapausuario} alt="Mapa de usuarios" style={{ width: "100%", borderRadius: 8 }} />
          {/* Etiquetas */}
          {[
            { name: "Magdalena", top: "10%", left: "40%" },
            { name: "Sucre", top: "20%", left: "30%" },
            { name: "Meta", top: "55%", left: "50%" },
            { name: "Santander", top: "35%", left: "45%" },
            { name: "Córdoba", top: "30%", left: "25%" },
            { name: "Bolívar", top: "15%", left: "32%" },
            { name: "Norte de Santander", top: "25%", left: "65%" },
          ].map((label, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: label.top,
                left: label.left,
                backgroundColor: theme.palette.background.main,
                color: theme.palette.text.dark,
                padding: "5px 10px",
                borderRadius: 2,
                fontSize: "0.8rem",
                fontWeight: "bold",
                transform: "translate(-50%, -50%)",
                ":hover": {
                  backgroundColor: theme.palette.background.light,
                  transform: "scale(2)",
                  cursor: "pointer",
                },
              }}
            >
              {label.name}
            </Box>
          ))}
        </Box>
      </Box>

      {/*<Footer />*/}
    </Container>
  );
};

export default Home;