import { Link } from 'react-router-dom'
import '../css/components/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Sobre mí</Link>
        </li>
        <li>
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link to="/contacto">Contactame</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
