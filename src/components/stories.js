import React from 'react';
import { Link } from 'react-router-dom';



class Storie extends React.Component {
  render() {
    return (
      <div className="Storie">
          <div>
            <h1>Bienvenido a la zona de Historia</h1>
            <p>
                Estas son las historias que puedes encontrar en tu proyecto.
            </p>
          </div>
          <div>
            <h1>la Historia</h1>
            <Link to="/ticket">Ir al ticket</Link>
          </div>
      </div>
    );
  }
}

export default Storie;