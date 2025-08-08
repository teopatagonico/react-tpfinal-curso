import "../styles/Header.css"
import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Header() {
    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <header className="HeaderPagina">
            <Link to="/"><h1>LaUnica</h1></Link>
            <section id="Links">
                {
                    user && <>
                    <Link to="/dashboard" className="Link">Panel de administrador</Link>
                    <Link to="/" onClick={handleLogout} className="Link">Cerrar sesión</Link>
                    </>
                }
                {
                    <Link to="/register" className="Link">Registrate</Link>
                }
            </section>
        </header>
    )
}

export default Header