import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../components/Footer";


const Tematicas = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 5 }}>
      
      {/* Sección de Encabezado */}
      <Box 
        sx={{ 
          backgroundImage: 'url("/assets/header-tematicas.jpg")', 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          color: "white",
          py: 10,
          borderRadius: 2
        }}
      >
        <Typography variant="h3" fontWeight="bold">Temáticas</Typography>
        <Typography variant="h6" mt={1}>Estas son las temáticas que podrás aprender en la aplicación</Typography>
      </Box>

      {/* Subtítulo */}
      <Typography variant="h4" color="green" fontWeight="bold" mt={5}>
        Temáticas
      </Typography>
      <Typography variant="body1" mt={2} mb={3}>
        Podrás aprender diferentes cosas que facilitarán y mejorarán tu trabajo.
      </Typography>

      {/* Sección de Acordeón */}
      {[
        { title: "Aves", image: "/assets/aves.jpg" },
        { title: "Agricultores", image: "/assets/agricultores.jpg" },
        { title: "Abejas", image: "/assets/abejas.jpg" },
        { title: "Organismos Acuáticos", image: "/assets/acuaticos.jpg" },
        { title: "Distribuidores y Transportadores", image: "/assets/transportadores.jpg" },
      ].map((item, index) => (
        <Accordion key={index} sx={{ mb: 2, borderRadius: 2, overflow: "hidden" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ background: "#162447", color: "white" }}>
            <Typography fontWeight="bold">{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#f4f4f4" }}>
            <Box 
              component="img" 
              src={item.image} 
              alt={item.title} 
              sx={{ width: "100%", height: "200px", borderRadius: 2, objectFit: "cover" }} 
            />
            <Typography mt={2}>
              Información sobre {item.title}. Aquí puedes agregar detalles específicos sobre esta temática.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    
    <Footer />
    
    </Container>
  );
};

export default Tematicas;
