import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/pacientes">Pacientes</Link>
          <Link to="/obras_sociales">Obras Sociales</Link>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)