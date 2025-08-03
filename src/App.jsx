// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Importa las vistas principales
import HomeIntro from "./components/HomeIntro";
import UsersList from "./pages/users/UsersList";
import UserDetail from "./pages/users/UserDetail";
import UserByName from "./pages/users/UserByName"; 
import UserByCity from "./pages/users/UserByCity"; 

function App() {
  return (
    <Routes>
      {/* Ruta principal (intro o página de inicio) */}
      <Route path="/" element={<HomeIntro />} />

      {/* Ruta para ver todos los usuarios */}
      <Route path="/usuarios" element={<UsersList />} />

      {/* Ruta para ver detalles de un usuario específico */}
      <Route path="/usuarios/:id" element={<UserDetail />} />

      {/* Ruta para buscar un usuario por nombre */}
      <Route path="/userbyname/:name" element={<UserByName />} />

      {/* Ruta para buscar un usuario por ciudad */}
      <Route path="/userbycity/:city" element={<UserByCity />} />
    </Routes>
  );
}

export default App;
