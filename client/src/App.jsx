import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import Paciente from './Components/Paciente/Paciente';
import PacienteForm from './Components/Paciente/PacienteForm';
import ObraSocial from './Components/ObraSocial/ObraSocial';
import ObraSocialForm from './Components/ObraSocial/ObraSocialForm';


const NotFound = ({ location }) => (
  <h1>Ha ocurido un problema. No se encuentra la página solicitada: {location.pathname} </h1>
)

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="Style">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pacientes" component={Paciente} />
              <Route exact path="/pacientes/new" component={PacienteForm} />
              <Route exact path="/obras_sociales" component={ObraSocial} />
              <Route exact path="/obras_sociales/:id" component={ObraSocial} />
              <Route exact path="/obras_sociales/new" component={ObraSocialForm} />
              <Route exact path="/obras_sociales/:id" component={ObraSocial} />
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
