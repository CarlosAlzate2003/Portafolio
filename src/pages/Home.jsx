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
            <p>Tecnologó en Desarrollo de Software en el Pascual Bravo</p>
          </li>
          <li>
            <p>Tecnicó de Desarrollo Fullstack lvl 2</p>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Home
