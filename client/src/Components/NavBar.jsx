import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pacientes">Pacientes</Link>
        <Link to="/obras_sociales">Obras Sociales</Link>
      </nav>
    )
  }
}

export default withRouter(NavBar)