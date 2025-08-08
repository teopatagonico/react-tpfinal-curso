import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../config/firebase"
import { useParams } from "react-router-dom"
import "../styles/Producto.css"

function Producto() {
    const id = useParams()["id"]
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})

    async function fetchYDeterminar() {
        await fetchingProductos()
        await determinarProducto()
    }

    const fetchingProductos = async () => {
        const respuesta = collection(db, "productos")
        const snapshot = await getDocs(respuesta)
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setProductos(docs)
    }

    const determinarProducto = async() => {
        var miproducto = null
        productos.forEach((producto) => {
            if (producto.id == id) {
                miproducto = producto
            }
        });

        setProducto(miproducto)
    }

    useEffect(() => {
        fetchYDeterminar()
    }, [])
    
    return (
        <section id="Producto">
            <div className="ImagenProducto">
                <h3>Acá iría la imagen del producto</h3>
            </div>
            <div className="DetalleProducto">
                <h2>Acá iría el nombre del producto</h2>
                <p>USD (Acá iría el precio del producto)</p>
                <p>Acá iría la descripción del producto</p>
                <p>Posible espacio para reseñas</p>
                <button>Comprar</button>
            </div>
        </section>
    )
}
export default Producto