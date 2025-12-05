import { Link } from 'react-router-dom'

export default function CollaboratorLogin() {
  const logo = '/src/assets/img/pizzeria-logo.svg';
  return (
    <section className="collaboratorLogin">
      <div className="collaboratorLogin_card">
        <img src={logo} alt="Pizza Panucci's" className="collaboratorLogin_logo" />
        <h2 className='collaboratorLogin_tittle'>Pizza Panucci's </h2>
        <form className="collaboratorLogin_form">
          <label htmlFor="userId">ID de usuario</label>
          <input
            id="userId"
            type="text"
            name="userId"
            placeholder="Ingresa tu ID de colaborador"
            autoComplete="username"
          />

          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            autoComplete="current-password"
          />

          <button type="submit" className="collaboratorLogin_submit">
            Ingresar
          </button>
        </form>
        <p className="collaboratorLogin_register">
          ¿No tienes cuenta?{' '}
          <Link to="/collaborator/create-user">Regístrate ahora</Link>
        </p>
      </div>
    </section>
  )
}
