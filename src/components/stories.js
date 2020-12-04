import React from 'react';
import { Link } from 'react-router-dom';



function Storie(){
  return(
    <div className="Storie col-md-10 offset-md-1 pt-4">
      <div className="row">
        <div className="col">
          <h3>Estos son las historias para este proyecto</h3>
        </div>
      </div>
      <div class="card my-4" >
        <div class="card-body">
          <h5 class="card-title">Historia</h5>
          <h6 class="card-subtitle mb-2 text-muted">Proyecto</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="/ticket" href="#" class="card-link">Tickets</Link>
        </div>
      </div>
    </div>
  );
}


export default Storie;