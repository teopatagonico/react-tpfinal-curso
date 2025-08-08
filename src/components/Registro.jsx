import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  const navigate = useNavigate()
  const { register } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)

    if (!email || !password) {
      setError("Debes completar los campos...")
      return
    }

    // intentar guardar o registrar un usuario.
    try {
      await register(email, password)
      setMessage("Usuario registrado con éxito...")
      setEmail("")
      setPassword("")
      setTimeout(() => {
        setMessage("Redirigiendo al home...")
      }, 2000)
      setTimeout(() => {
        navigate("/")
      }, 3000)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
    <section id="register-section">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Nombre:</label>
        <input
          type="name"
          name="name"
          id="name"
          onChange={(e) =>
            setName(e.target.value)}
        />

        <label htmlFor="surname">Apellido:</label>
        <input
          type="surname"
          name="surname"
          id="surname"
          onChange={(e) =>
            setSurname(e.target.value)}
        />
        
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) =>
            setEmail(e.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Registrarme</button>
      </form>
      <h5 className="error-message">{error}</h5>
      <h5 className="success-message">{message}</h5>
    </section>
    <br></br>
    <Link to="/login"><span>Iniciá sesión</span></Link>
    </>
  )
}

export default Register