import React from 'react';
import { Link } from 'react-router-dom';



class Project extends React.Component {
  render() {
    return (
      <div className="Project">
          <div>
            <h1>Bienvenido a la zona de proyectos</h1>
            <p>
                Estos son los proyectos correspondientes a la empresa tal, ingresa a ello y ve la historias que puedes actualizar.
            </p>
          </div>
          <div>
            <h1>Nombre de lproyecto</h1>
            <Link to="/storie">Ir a la Historia</Link>
          </div>
      </div>
    );
  }
}

export default Project;