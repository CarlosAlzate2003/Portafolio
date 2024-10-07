import '../css/pages/Projects.css'

const Projects = () => {
  return (
    <div className="container-projects">
      <h1 className="title-projects">Proyectos</h1>
      <ul className="projects-ul">
        <li>
          <h2>Space invaders en Python</h2>
          <p>
            Recreé el juego Space Invader en Python utilizando la biblioteca
            Pygame, lo que me permitió mejorar mi dominio de la programación
            orientada a objetos y estructurar el código de manera más eficiente.
          </p>
          <a
            href="https://github.com/CarlosAlzate2003/Space_invaders"
            target="_blank"
          >
            Ver proyecto
          </a>
        </li>
        <li>
          <h2>To do Item List</h2>
          <p>
            Creé una aplicación web para gestionar tareas pendientes con React y
            Vite, permitiendo añadir, editar y eliminar tareas con una interfaz
            rápida y responsiva.
          </p>
          <a
            href="https://github.com/CarlosAlzate2003/TodoItemVite"
            target="_blank"
          >
            Ver proyecto
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Projects
