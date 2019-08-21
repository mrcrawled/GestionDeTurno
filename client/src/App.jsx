import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import Login from './Components/Login/Login';

import Paciente from './Components/Paciente/Paciente';
import PacienteForm from './Components/Paciente/PacienteForm';
import PacienteInfo from './Components/Paciente/PacienteInfo';

import ObraSocial from './Components/ObraSocial/ObraSocial';
import ObraSocialForm from './Components/ObraSocial/ObraSocialForm';
import ObraSocialInfo from './Components/ObraSocial/ObraSocialInfo';


const NotFound = ({ location }) => (
  <h1>Ha ocurido un problema. No se encuentra la página solicitada: {location.pathname} </h1>
)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedin: false,
      rol: 'Invitado',
      routesAvailables: null
    };
  }

  /* Esta función debe actualizar el estado de las rutas activas segun el tipo de rol del usuario logeado */
  updateRoutes = (newRoutesAvailables) => {
    this.setState({
      routesAvailables : newRoutesAvailables
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* falta terminar esta parte al momento de logearse. */}
          <NavBar loggedin={this.state.loggedin} rol={this.state.rol} handleRoutes={this.updateRoutes}/>
          <div className="container" id="Main">
            <Switch>
              <Route exact path="/" component={Login} />

              <Route exact path="/pacientes" component={Paciente} />
              <Route exact path="/pacientes/new" component={PacienteForm} />
              <Route exact path="/pacientes/edit/:id" component={PacienteForm} />
              <Route exact path="/pacientes/:id" component={PacienteInfo} />

              <Route exact path="/obras-sociales" component={ObraSocial} />
              <Route exact path="/obras-sociales/new" component={ObraSocialForm} />
              <Route exact path="/obras-sociales/edit/:id" component={ObraSocialForm} />
              <Route exact path="/obras-sociales/:id" component={ObraSocialInfo} />

              <Route component={NotFound} />
            </Switch>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
