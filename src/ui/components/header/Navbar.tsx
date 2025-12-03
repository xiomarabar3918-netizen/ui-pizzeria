

export function Navbar() {
  const logo = './src/assets/img/pizzeria-logo.svg';
  return (
    <header className="navbar">
      <img className="navbar_img" src={logo} alt="Pizzería" />
      <div className="navbar_boddy">
        <h2 className="secondTittle">Bienvenido a nuestro restaurante</h2>
        <h1 className="principalTittle">Pizza Panucci's</h1>
      </div>
    </header>
  )
}
