import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './components'

export function App() {
    return (
        <>
            <Navbar />
            <section className="app-shell withFixedHeader">
                <Outlet />
            </section>
            <Footer />
        </>
    )
}