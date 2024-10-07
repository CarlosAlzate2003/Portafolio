import '../css/pages/Home.css'

const Home = () => {
  return (
    <div className="container-home">
      <ul className="Home-ul">
        <li>
          <h2>Experiencias laborales</h2>
          <p>
            Cuento con experiencia como practicante en Zenú-Nutresa, donde
            participé en la optimización de procesos mediante el uso de
            herramientas analíticas y automatización de tareas con Python.
            Además, trabajé como desarrollador de software en Cesde-Comfama,
            donde diseñamos y construimos arquitecturas basadas en
            microservicios utilizando Python. Implementamos soluciones de
            automatización y desarrollamos sistemas con arquitecturas de capas
            en Python, mejorando la escalabilidad y mantenibilidad de los
            proyectos.
          </p>
        </li>
        <ul>
          <h2>Formación académica</h2>
          <li>
            <p>Tecnólogo en Desarrollo de Software en el Pascual Bravo</p>
            <a
              href="https://drive.google.com/file/d/1SxR_zttwsJiL31uZz4guAgUOeOMW3WI2/view"
              target="_blank"
            >
              Ver certificado
            </a>
          </li>
          <li>
            <p>Técnico de Desarrollo Fullstack lvl 2</p>
            <a
              href="https://drive.google.com/file/d/1PAux7kYlE9NQBAaFoVUpCoEH9hPQ11TW/view"
              target="_blank"
            >
              Ver certificado
            </a>
          </li>
          <li>
            <p>Diplomas en cursos de base de datos, React, Python y Java</p>
            <a
              href="https://drive.google.com/drive/folders/1-gSauMKmtQm4KqV2xRX1SopOZHmbEE_3"
              target="_blank"
            >
              Ver certificado
            </a>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Home
