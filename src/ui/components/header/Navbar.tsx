import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../../assets/img/pizzeria-logo.svg'

const collaboratorLinks = [
  { to: '/collaborator/tasks', label: 'Gestionar orden', matchPaths: ['/collaborator'] },/*  */
  { to: '/collaborator/create-product', label: 'Crear producto' },
]

export function Navbar() {
  const location = useLocation()
  const isCollaboratorArea =
    location.pathname.startsWith('/collaborator') &&
    !location.pathname.includes('/collaborator/login') &&
    !location.pathname.includes('/collaborator/create-user')

  return (
    <div className="navbar">
      <header className='navbar_header'>
        <div className="navbar_top">
          <img className="navbar_img" src={logo} alt="Pizzería" />
          <div className="navbar_boddy">
            <h2 className="secondTittle">Bienvenido a nuestro restaurante</h2>
            <h1 className="principalTittle">Pizza Panucci's</h1>
          </div>
          {isCollaboratorArea && (
            <Link to="/collaborator/login" className="navbar_exit">
              Salir
            </Link>
          )}
        </div>

      </header>
      {isCollaboratorArea && (
        <nav className="navbar_secondary" aria-label="Secciones de colaborador">
          {collaboratorLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => {
                const customActive = link.matchPaths?.some(path => location.pathname === path)
                const active = isActive || customActive
                return `navbar_secondary-btn${active ? ' navbar_secondary-btn--active' : ''}`
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  )
}
