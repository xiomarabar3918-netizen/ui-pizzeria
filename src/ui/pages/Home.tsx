import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../components'

export const Home = () => {
    return (
        <>
            <Navbar />
            <section className="homeSelection">
                <h2 className='homeSelection_tittle'>Pizza Panucci's</h2>
                <p className='homeSelection_text'>Selecciona cómo quieres continuar.</p>
                <div className="homeSelection_actions">
                    <Link to="/ordenLista" className="homeSelection_btn">
                        Pedidos Listos
                    </Link>
                    <Link to="/userDone" className="homeSelection_btn">
                        Pedidos del Usuario
                    </Link>
                    <Link to="/collaborator/login" className="homeSelection_btn">
                        Acceso Colaboradores
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    )
}
