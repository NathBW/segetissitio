/*import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default theme;*/
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2A3A7E", // Azul Claro
      light: "#172045", // Azul Oscuro
      dark: "#0A0E1E", // Azul Muy Oscuro
    },
    secondary: {
      main: "#4A9D4B", // Verde Claro
      light: "#01814E", // Verde Oscuro
      dark: "#265026", // Verde Muy Oscuro
      darkest: "#193419", // Verde Muy Muy Oscuro
    },
    background: {
      main: "#DBE64C", // Botón Verde Claro
      light: "#BCD84C", // Botón Verde Oscuro
      dark: "#A5CD4C", // Botón Verde Muy Oscuro
      darkest: "#D9DBD1", // Botón Verde Muy Muy Oscuro
    },
    text: {
      main: "#F6F8ED", // Texto Principal
      light: "#FFFFFF", // Texto Secundario
      dark: "#282A29", // Texto Terciario
    },
  },
  typography: {
    fontFamily: "CoreMellow, Heebo, sans-serif",
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      textTransform: "capitalize",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      textTransform: "capitalize",

    },
    h3: {
      fontSize: "20px",
      fontWeight: 500,
      textTransform: "capitalize",

    },
    buttontext: {
      fontSize: "16px",
      fontWeight: 400,
      textTransform: "capitalize",

    },
    text: {
      fontFamily: "Heebo, sans-serif",
      fontSize: "16px",
      fontWeight: 400,
      textTransform: "none",

    },
    variabletext: {
      fontFamily: "Heebo, sans-serif",
      fontSize: "16px",
      fontWeight: 700, 
      textTransform: "none",
    },
    a: {
      fontFamily: "Heebo, sans-serif",
      fontSize: "16px",
      fontWeight: 800,
      textDecoration: "underline",
      color: "#DBE64C",
      "&:hover": {
        color: "#BCD84C",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          padding: "10px 14px",
          fontSize: "16px",
          fontWeight: 700,
          textTransform: "uppercase",
          transition: "border-color 0.25s",
          "&:hover": {
            borderColor: "#646cff",
          },
        },
      },
      variants: [
        {
          props: { variant: "secondary" }, // Botón secundario
          style: {
            backgroundColor: "#f3f3f3",
            color: "#333",
            border: "1px solid #ccc",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          },
        },
      ],
    },
  },
});

export default theme;
