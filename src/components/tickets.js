import React from 'react';
import { Link } from 'react-router-dom';



function Ticket(){
  return(
    <div className="Ticket col-md-10 offset-md-1 pt-4">
      <div className="row">
        <div className="col">
          <h3>Estos son los tickets para esta Historia</h3>
        </div>
      </div>
      <div class="card my-4" >
        <div class="card-body">
          <h5 class="card-title">Ticket</h5>
          <h6 class="card-subtitle mb-2 text-muted">Usuario</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <h6 class="card-subtitle mb-2 text-muted">Estado: En proceso</h6>
          <button className="btn btn-primary"> Editar </button>
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <h3>Aqui podras crear un nueva solicitud</h3>
        </div>
        <div className="col">
        <button className="btn btn-primary"> Crear </button>
        </div>
      </div>

      <form>
        <div class="form-group">
          <label for="formGroupExampleInput2">New ticket</label>
          <input type="text" class="form-control" id="" placeholder="Add Comment" />
          <div className="row mt-4">
            <div className="col"><button className="btn btn-primary">Activo</button></div>
            <div className="col"><button className="btn btn-primary">En Proceso</button></div>
            <div className="col"><button className="btn btn-primary">Finalizado</button></div>
          </div>
        </div>
      </form>

    </div>
  );
}


export default Ticket;