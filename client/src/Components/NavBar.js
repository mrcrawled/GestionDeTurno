import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
      <ul style={navBarStyle}>

          <Link to="/pacientes" className="nav-link">Pacientes</Link>

    <Link to="/obras_sociales" className="nav-link">           Obras Sociales</Link>

</ul>
</nav>
      </div>
    )
  }
}



const navBarStyle = {
  background: 'black',
  color: 'white',
  textAlign: 'left',
  padding: '10px'
}

export default withRouter(NavBar)