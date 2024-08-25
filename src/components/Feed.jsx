import foto from '../assets/foto.jpeg'
import '../css/components/Feed.css'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

const Feed = () => {
  return (
    <div className="feed-box">
      <img src={foto} alt="" />
      <h2>Carlos Andres Alzate Mejia</h2>
      <h3>backend developer</h3>
      <span>
        Soy Andrés, un desarrollador backend especializado en Python, con
        experiencia en frameworks como FastAPI y Flask. Me apasiona crear
        soluciones eficientes, ya sea trabajando con arquitecturas monolíticas o
        microservicios. Además, tengo habilidades en automatización de procesos,
        y manejo lenguajes como Java, C#, php y SQL. Complemento mi experiencia
        técnica con conocimientos en React para desarrollo frontend, y
        herramientas de análisis de datos como Excel avanzado y Power BI. Mi
        enfoque está en construir soluciones robustas y escalables que impulsen
        el crecimiento tecnológico.
      </span>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/carlos-andres-álzate-mejía-a476092b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/CarlosAlzate2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/cm___andres/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/carlitos.alzatemejia/?locale=es_LA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  )
}

export default Feed
