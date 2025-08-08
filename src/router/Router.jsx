import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header.jsx"
import Home from "../components/Home.jsx"
import Registro from "../components/Registro.jsx"
import Login from "../components/Login.jsx"
import Dashboard from "../components/Dashboard.jsx"
import EditarProducto from "../components/EditarProducto.jsx"
import Producto from "../components/Producto.jsx"
function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Registro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editar-producto/:id" element={<EditarProducto />} />
        <Route path="/producto/:id" element={<Producto />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
