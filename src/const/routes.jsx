const rinfo = () => {
  return (
    <>
      <p>Para utilizar R-Info con Windows debe tener instalada la última versión de Java en su máquina.</p>
      <p>
        Link de descarga de java: {' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.java.com/es/download/ie_manual.jsp'
        >
          Java Para Windows
        </a>
      </p>
      <br />
      <p>
        Una vez instalado, descargar el programa r-Info_2.9.jar: {' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://drive.google.com/drive/folders/1F7tjjBJsENwUO-hblcxUHnyd4T3FRrR2?usp=sharing'
        >
          Descargar
        </a>
      </p>
      <br />
      <p>A continuación, presionar <kbd>Windows</kbd> + <kbd>R</kbd>. Una ventana emergerá. Esribir "cmd" y presionar <kbd>Enter</kbd></p>
      <br />
      <p>Una vez allí, nos vamos a dirigir a la carpeta donde se encuentra archivo recién descargado. Si este se encuentra en la carpeta de descargas, en la terminal de comandos, ejecutar: <b>cd Downloads</b>. Este comando nos posicionará en la carpeta de descargas. Para comprobarlo, puede ejecutar <b>pwd</b></p>
      <br />
      <p>A continuación ejecutaremos el programa con java utilizando el comando: <b>java -jar r-Info_2.9.jar</b></p>
      <br />
      <p>Y ya podemos usar R-Info!</p>
      <br />
      <p>Descargar código base: <a target='_blank' href='https://drive.google.com/file/d/1xqiprhcgOLgMrzRMl06w6n1OO_hTXpQ0/view?usp=sharing' download rel='noreferrer'>Descargar</a></p>
    </>
  )
}

export default [
  {
    path: '/como-ejecutar-rinfo',
    title: 'Cómo ejecutar R-Info',
    description: 'Instalación de Java y pasos para abir el programa',
    tags: ['Programación desde Cero', 'Instalación'],
    content: rinfo
  },
  {
    path: '/instalar-vscode',
    title: 'Cómo instalar VS Code',
    description: 'Instalación de Visual Studio Code y extensiones de utilidad',
    tags: ['Frontend development', 'Instalación'],
    content: () => <p>No hay nada acá hmm 🤔</p>
  },
  {
    path: '/devtools',
    title: 'Herramientas de desarrollo',
    description: 'Introducción a las herramientas de desarrollo del navegador',
    tags: ['Frontend development', 'Introducción'],
    content: () => <p>No hay nada acá hmm 🤔</p>
  }
]
