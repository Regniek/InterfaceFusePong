import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


class Project extends React.Component{
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = () => {
    this.setState({ loading: true, error: null })
    try {
      const data = []
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error:error })
    }
  }

  render(){
    if(this.state.loading === true){
      return 'Loading...'
    }
    return(
      <div className="Project col-md-10 offset-md-1 pt-4">
        <div className="row">
          <div className="col">
            <h3>Estos son los proyectos que hay registrados en el App</h3>
          </div>
        </div>
        <div class="card my-4" >
          <div class="card-body">
            <h5 class="card-title">Proyecto</h5>
            <h6 class="card-subtitle mb-2 text-muted">Empresa</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/storie" href="#" class="card-link">View</Link>
          </div>
        </div>
      </div>
    );
  }
}




export default Project;