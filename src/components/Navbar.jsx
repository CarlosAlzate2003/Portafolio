import { Link } from 'react-router-dom'
import '../css/components/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="Navbar-ul">
        <li className="Navbar-li">
          <Link to="/">Experiencia</Link>
        </li>
        <li className="Navbar-li">
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li className="Navbar-li">
          <Link to="/herramientas">Herramientas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
