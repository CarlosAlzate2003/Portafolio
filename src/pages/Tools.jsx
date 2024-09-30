import '../css/pages/Tools.css'

const Tools = () => {
  return (
    <div className="container-tools">
      <h1 className="title-tools">Herramientas</h1>
      <div className="flex-tools">
        <div className="flex-item">
          <a href="https://www.python.org" target="_blank">
            <img src="public\assets\svg\python.svg" alt="python_icon" />
          </a>
          <p>Python</p>
        </div>
        <div className="flex-item">
          <a href="https://react.dev/" target="_blank">
            <img src="public\assets\svg\react.svg" alt="react_icon" />
          </a>
          <p>React</p>
        </div>
        <div className="flex-item">
          <a href="https://www.postman.com/downloads/" target="_blank">
            <img src="public\assets\svg\postman.svg" alt="postman_icon" />
          </a>
          <p>Postman</p>
        </div>
        <div className="flex-item">
          <a href="https://www.java.com/es/" target="_blank">
            <img src="public\assets\svg\java.svg" alt="java_icon" />
          </a>
          <p>Java</p>
        </div>
        <div className="flex-item">
          <a
            href="https://www.php.net/manual/es/intro-whatis.php"
            target="_blank"
          >
            <img src="public\assets\svg\php.svg" alt="php_icon" />
          </a>
          <p>php</p>
        </div>
        <div className="flex-item">
          <a href="https://www.postgresql.org/" target="_blank">
            <img src="public\assets\svg\postgres.svg" alt="postgres_icon" />
          </a>
          <p>PostgreSQL</p>
        </div>
        <div className="flex-item">
          <a
            href="https://www.microsoft.com/es-co/sql-server/sql-server-2022"
            target="_blank"
          >
            <img src="public\assets\svg\sqlserver.svg" alt="sqlserver_icon" />
          </a>
          <p>SQL Server</p>
        </div>
        <div className="flex-item">
          <a href="https://www.mysql.com/" target="_blank">
            <img src="public\assets\svg\mysql.svg" alt="mysql_icon" />
          </a>
          <p>MySQL</p>
        </div>
        <div className="flex-item">
          <a href="https://git-scm.com/" target="_blank">
            <img src="public\assets\svg\git.svg" alt="git_icon" />
          </a>
          <p>Git</p>
        </div>
        <div className="flex-item">
          <a
            href="https://dotnet.microsoft.com/es-es/languages/csharp"
            target="_blank"
          >
            <img src="public\assets\svg\csharp.svg" alt="cshare_icon" />
          </a>
          <p>C#</p>
        </div>
        <div className="flex-item">
          <a
            href="https://developer.android.com/studio?gad_source=1&gclid=CjwKCAjw59q2BhBOEiwAKc0ijZRyt3e7w0LR9ETG44Q_IpsuUsWeB5RT2WMn5NXZ6_lAHkWUbkMItBoCRRAQAvD_BwE&gclsrc=aw.ds&hl=es-419"
            target="_blank"
          >
            <img src="public\assets\svg\android.svg" alt="android_icon" />
          </a>
          <p>Android Studio</p>
        </div>
        <div className="flex-item">
          <a
            href="https://www.microsoft.com/es-co/microsoft-365/microsoft-office"
            target="_blank"
          >
            <img src="public\assets\svg\microsoft.svg" alt="microsoft_icon" />
          </a>
          <p>Herramientas Microsoft Office</p>
        </div>
      </div>
    </div>
  )
}

export default Tools
