import '../css/pages/Tools.css'

const Tools = () => {
  return (
    <div className="container-tools">
      <h1 className="title-tools">Herramientas</h1>
      <div className="flex-tools">
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\python.svg" alt="python_icon" />
          </a>
          <p>Python</p>
        </div>
        <div className="flex-item">
          <a href="https://react.dev/" target="_blank">
            <img src="src\assets\svg\react.svg" alt="react_icon" />
          </a>
          <p>React</p>
        </div>
        <div className="flex-item">
          <a href="https://www.postman.com/downloads/" target="_blank">
            <img src="src\assets\svg\postman.svg" alt="python_icon" />
          </a>
          <p>Postman</p>
        </div>
        <div className="flex-item">
          <a href="https://www.java.com/es/" target="_blank">
            <img src="src\assets\svg\java.svg" alt="python_icon" />
          </a>
          <p>Java</p>
        </div>
        <div className="flex-item">
          <a
            href="https://www.php.net/manual/es/intro-whatis.php"
            target="_blank"
          >
            <img src="src\assets\svg\php.svg" alt="python_icon" />
          </a>
          <p>php</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\postgres.svg" alt="python_icon" />
          </a>
          <p>PostgreSQL</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\sqlserver.svg" alt="python_icon" />
          </a>
          <p>SQL Server</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\mysql.svg" alt="python_icon" />
          </a>
          <p>MySQL</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\git.svg" alt="python_icon" />
          </a>
          <p>Git</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\cshare.svg" alt="python_icon" />
          </a>
          <p>C#</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\android.svg" alt="python_icon" />
          </a>
          <p>Android Studio</p>
        </div>
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="src\assets\svg\microsoft.svg" alt="python_icon" />
          </a>
          <p>Herramientas Microsoft Office</p>
        </div>
      </div>
    </div>
  )
}

export default Tools
