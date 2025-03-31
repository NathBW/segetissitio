import { Container, Typography, Button, Box, Grid, List, ListItem, Divider } from "@mui/material";
import { styled } from "@mui/system";
import GooglePlayIcon from "../assets/imagenes/PlayStore.png"; // Agrega la imagen correcta
import AppStoreIcon from "../assets/imagenes/AppStore.png"; // Agrega la imagen correcta
import Footer from "../components/Footer";
import theme from "../theme";
import backgroundVideo from "../assets/videos/PARTE1.mp4"; // Agrega la imagen correcta
import backgrounImage from "../assets/imagenes/fondoAzul.png"; // Agrega la imagen correcta
import backgrounImageBlanco from "../assets/imagenes/fondoblanco.png"; // Agrega la imagen correcta
import aliado from "../assets/imagenes/aliado.png"; // Agrega la imagen correcta
import loginImage from "../assets/imagenes/celular.png"; // Agrega la imagen correcta

// Componentes estilizados
const HeroBanner = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '50vh',
  minHeight: '600px',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const VideoBackground = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
});

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxWidth: '800px',
  padding: theme.spacing(4),
  backgroundColor: 'hsla(234, 61.40%, 40.60%, 0.21)',
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  textAlign: 'center',
  margin: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    width: '90%',
  },
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(1.5, 3),
  backgroundColor: theme.palette.background.main,
  color: theme.palette.common.black,
  '&:hover': {
    backgroundColor: theme.palette.background.light,
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: theme.spacing(1, 0),
  },
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.darkest,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column-reverse',
    textAlign: 'center',
    '&:nth-of-type(even)': {
      flexDirection: 'column',
    }
  },
}));

const Home = () => {
  return (
    <Container maxWidth="lg" disableGutters>
      {/* Hero Banner con Video */}
      <HeroBanner>
        <VideoBackground autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </VideoBackground>
        
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            ¡Descargo Ya!
          </Typography>
          
          <Typography variant="h6" paragraph>
            TOBIAS BPA es una App donde podrás entender, aprender y fortalecer tus conocimientos de Buenas prácticas agrícolas. 
            TOBIAS, el agricultor te enseñará la forma correcta de usar plaguicidas para aumentar el rendimiento de tus cultivos, 
            proteger al medio ambiente y a ti mismo.
          </Typography>
          
          <Divider sx={{ bgcolor: 'white', my: 3 }} />
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <DownloadButton 
              variant="contained" 
              startIcon={<img src={GooglePlayIcon} alt="Google Play" height="20" />}
            >
              Google Play
            </DownloadButton>
            <DownloadButton 
              variant="contained" 
              startIcon={<img src={AppStoreIcon} alt="App Store" height="20" />}
            >
              App Store
            </DownloadButton>
          </Box>
        </HeroContent>
      </HeroBanner>
      {/* Sección Principal */}


      {/* Sección de Aliados */}
      <Box textAlign="center" mt={0} sx={{ backgroundImage: `url(${backgrounImage})`, backgroundSize: 'cover', padding: 5 }}>
        <Typography variant="h2" color="text.main">
          Aliados y Entidades
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          <Grid item>
            <img src={aliado} alt="Aliado 1" height="100" />
            <Typography sx={{typography: theme.typography.h3 ,color:theme.palette.text.main}} >ANLA</Typography>
          </Grid>
          <Grid item>
            <img src={aliado} alt="Aliado 2" height="100" />
            <Typography sx={{typography: theme.typography.h3 ,color:theme.palette.text.main}} >ANLA</Typography>
          </Grid>
          <Grid item>
            <img src={aliado} alt="Aliado 3" height="100" />
            <Typography sx={{typography: theme.typography.h3 ,color:theme.palette.text.main}} >ANLA</Typography>
          </Grid>
          <Grid item>
            <img src={aliado} alt="Aliado 4" height="100" />
            <Typography sx={{typography: theme.typography.h3 ,color:theme.palette.text.main}} >ANLA</Typography>
          </Grid>          
          <Grid item>
            <img src={aliado} alt="Aliado 5" height="100" />
            <Typography sx={{typography: theme.typography.h3 ,color:theme.palette.text.main}} >ANLA</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Sección "¿Cómo utilizar?" */}
      <Box mt={10}>
        <Typography variant="h2" textAlign="center" color="secondary.main">
          ¿Cómo utilizar?
        </Typography>
        <Box mt={5} mb={5}>
        <Typography  sx={{typography:theme.typography.text}} textAlign="center" fontWeight="regular"   color="text.dark">
        Con nuestra aplicación podrás realizar diferentes cosas
        </Typography>
        </Box>

      <Grid container spacing={8} alignItems="center" justifyContent="center">
        
        {/* Iniciar sesión */}
        <Grid item xs={12} md={10}>
          <Box display="flex" alignItems="center" gap={5} sx={{backgroundColor: theme.palette.background.darkest, padding: 3, borderRadius: 2, boxShadow: 2,}} flexDirection={{ xs: "column-reverse", md: "row" }}>
            <img
              src={loginImage}
              alt="Iniciar sesión"
              style={{ width: "250px", objectFit: "contain" }}
            />
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography p={2} variant="h3" color="primary.light" >
                Iniciar Sesión
              </Typography>
              <Typography p={2} sx={{typography:theme.typography.variabletext}} fontWeight="bold" color="primary.light">
                Podrás Guardar tu información
              </Typography>
              <Typography p={2} sx={{ typography: theme.typography.text, color: theme.palette.primary.light }}>
              La aplicación te permite crear tu sesión para que mantengas tu información necesaria acerca de BPA.
              Lo que tienes que llenar a la hora de crear tu cuenta es tus nombres y apellidos completos, tu rol 
              dentro de el ciclo de proceso agrícola, el departamento y municipio donde vives. También, tienes que 
              específicar con cual producto es con el que trabajas y además, tu número de télefono para que se tenga claro. 
              Autorizas el tratamiento y los términos y condiciones y listo, ya estarás preparado para iniciar con las capacitaciones que ofrece TOBÍAS BPA.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Cambiar Foto de Perfil */}
        <Grid item xs={12} md={10}>
          <Box display="flex" alignItems="center" gap={5} sx={{backgroundColor: theme.palette.background.darkest, padding: 3, borderRadius: 2, boxShadow: 2,}} flexDirection={{ xs: "column-reverse", md: "row" }}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography p={2} variant="h3" color="primary.light" >
                Cambiar Foto de Perfil
              </Typography>
              <Typography p={2} sx={{typography:theme.typography.variabletext}} fontWeight="bold" color="primary.light">
              Personaliza tu perfil
              </Typography>
              <Typography p={2} sx={{ typography: theme.typography.text, color: theme.palette.primary.light }}>
              La aplicación te permite personalizar tu perfil como guardar el tipo de cultivo que manejes o tener 
              una foto de perfil más a tu propio gusto. Lo único que tienes que hacer es irte a perfil y darle tap 
              a la imagen de perfil de Tobías. Ahí, te permite tomar una foto o escogerla desde tu galería.
              </Typography>
            </Box>
            <img
              src={loginImage}
              alt="FotoPerfil"
              style={{ width: "250px", objectFit: "contain" }}
            />
          </Box>
        </Grid>

        {/* Aprende diferentes temáticas */}
        <Grid item xs={12} md={10}>
          <Box display="flex" alignItems="center" gap={5} sx={{backgroundColor: theme.palette.background.darkest, padding: 3, borderRadius: 2, boxShadow: 2,}} flexDirection={{ xs: "column-reverse", md: "row" }}>
            <img
              src={loginImage}
              alt="AprenderTemáticas"
              style={{ width: "250px", objectFit: "contain" }}
            />
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography p={2} variant="h3" color="primary.light" >
                Aprende diferentes temáticas
              </Typography>
              <Typography p={2} sx={{typography:theme.typography.variabletext}} fontWeight="bold" color="primary.light">
              Aprenderás de Buenas Prácticas Agrícolas
              </Typography>
              <Typography p={2} sx={{ typography: theme.typography.text, color: theme.palette.primary.light }}>
              La aplicación te mostrará diferentes temáticas que podrás cursar a tu propio tiempo, solo tienes que irte 
              a temáticas y escoger el tema que más te guste. También podrás mantener pendiente el porcentaje que vas de 
              cada tema y ganar diferentes premios.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Descargar certificado */}
        <Grid item xs={12} md={10}>
          <Box display="flex" alignItems="center" gap={5} sx={{backgroundColor: theme.palette.background.darkest, padding: 3, borderRadius: 2, boxShadow: 2,}} flexDirection={{ xs: "column-reverse", md: "row" }}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography p={2} variant="h3" color="primary.light" >
                Descarga tu certificado
              </Typography>
              <Typography p={2} sx={{typography:theme.typography.variabletext}} fontWeight="bold" color="primary.light">
              Calificaremos tu aprendizaje
              </Typography>
              <Typography p={2} sx={{ typography: theme.typography.text, color: theme.palette.primary.light }}>
              Para verificar que aprendas, te daremos diferentes trivias que tendrás que resolver y con eso, podrás descargar 
              tu certificado que está validado por diferentes entidades gubernamentales como el ANLA.
              </Typography>
            </Box>
            <img
              src={loginImage}
              alt="DescargarCertificado"
              style={{ width: "250px", objectFit: "contain" }}
            />
          </Box>
        </Grid>

      </Grid>
      </Box>

      {/* Sección de Beneficios */}
      <Box mt={10}  sx={{ backgroundImage: `url(${backgrounImage})`, backgroundSize: 'cover', padding: 5 }}>
        <Typography textAlign="center" variant="h2" color="text.main">
          Beneficios
        </Typography>
        {/*<Typography variant="text" color="text." mt={2}>
          Puedes conseguir certificados avalados por entidades gubernamentales.
        </Typography>*/}
        <Grid mt={2} container spacing={5} textAlign="left" alignItems="left" justifyContent="center">
        {/* 📌 Texto a la izquierda */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color="text.main" mb={2}>
            Certificados
          </Typography>
          <Typography sx={{typography:theme.typography.variabletext}} color="secondary.main" mb={1}>
            Descarga tus certificados
          </Typography>
          <Typography sx={{typography:theme.typography.text}} mb={4} color="text.main">
            Podrás conseguir certificados que están avalados por las entidades gubernamentales.
          </Typography>

          <Typography variant="h3" color="text.main" mt={10}>
            Otros Beneficios
          </Typography>
          <List sx={{ typography:theme.typography.text, listStyleType: "disc", paddingLeft: 2, color: theme.palette.text.main, fontWeight:"light"}}>
            <ListItem>• Aprenderás sobre etiquetas.</ListItem>
            <ListItem>• Aprenderás sobre Equipos de protección personal.</ListItem>
            <ListItem>• Aprenderás sobre el Destino Ambiental.</ListItem>
            <ListItem>• Aprenderás sobre las franjas de seguridad.</ListItem>
            <ListItem>• Aprenderás sobre contingencias.</ListItem>
          </List>
        </Grid>

        {/* 📌 Imágenes a la derecha */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
            <img
              src={aliado}
              alt="Certificado"
              style={{ width: "30%", maxWidth: "350px", borderRadius: 8 }}
            />
            <img
              src={aliado}
              alt="Beneficio"
              style={{ width: "30%", maxWidth: "350px", borderRadius: 8 }}
            />
          </Box>
        </Grid>
      </Grid>
      </Box>

      {/* Sección de Usuarios y Mapa */}
      <Box mt={10} textAlign="center">
        <Typography variant="h5" fontWeight="bold">
          #Usuarios
        </Typography>
        <Typography variant="body1" mt={2}>
          Más de mil personas han descargado la aplicación.
        </Typography>
        <img src="../assets/mapa.png" alt="Mapa de usuarios" width="80%" />
      </Box>


      <Footer />
      
    </Container>
  );
};

export default Home;
