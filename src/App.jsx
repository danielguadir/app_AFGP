// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Importa las vistas principales
import HomeIntro from "./components/HomeIntro";
import ProductorList from "./pages/users/ProductorList";
import ProductorDetail from "./pages/users/ProductorDetail";
import ProductorByName from "./pages/users/ProductorByName"; 
import ProductorByCity from "./pages/users/ProductorByCity"; 
import ProductoresPage from "./pages/users/ProductoresPage";

function App() {
  return (
    <Routes>
      {/* Ruta principal (intro o página de inicio) */}
      <Route path="/" element={<HomeIntro />} />

      {/* Ruta para ver todos los usuarios */}
      <Route path="/productores" element={<ProductorList />} />

      {/* Ruta para ver detalles de un productor específico */}
      <Route path="/productores/:id" element={<ProductorDetail />} />

      {/* Ruta para buscar un usuario por nombre */}
      <Route path="/productorbyname/:name" element={<ProductorByName />} />

      {/* Ruta para buscar un usuario por ciudad */}
      <Route path="/productorbycity/:city" element={<ProductorByCity />} />

      <Route path="/productores" element={<ProductoresPage />} />
      {/* Ruta para ver todos los productores */}

    </Routes>
  );
}

export default App;
