/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button'; // Importa el componente Button de Material UI

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant="contained" color="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

/*import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { CssBaseline, Container, Typography, Button } from '@mui/material';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <CssBaseline />
      <Header />

      <Container sx={{ textAlign: 'center', mt: 4 }}>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" className="logo react" alt="React logo" />
          </a>
        </div>

        <Typography variant="h3" gutterBottom>
          Vite + React
        </Typography>

        <div className="card">
          <Button 
            variant="contained" 
            color="background" 
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            Count is {count}
          </Button>
          <Typography variant="h3" sx={{ mt: 2 }}>
            Edit <code>src/App.jsx</code> and save to test HMR
          </Typography>
        </div>

        <Typography variant="text" className="read-the-docs" sx={{ mt: 3 }}>
          Click on the Vite and React logos to learn more
        </Typography>
      </Container>
    </>
  );
}

export default App;*/


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Home from "./pages/Home"; // Página de inicio
import Tematicas from "./pages/Tematicas";
import AulaVirtual from "./pages/AulaVirtual";
import Testimonios from "./pages/Testimonios";
import Soporte from "./pages/Soporte";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tematicas" element={<Tematicas />} />
       <Route path="/aula-virtual" element={<AulaVirtual />} />
        <Route path="/testimonios" element={<Testimonios />} />
        <Route path="/soporte" element={<Soporte />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;

