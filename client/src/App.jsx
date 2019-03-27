import React, { Component } from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import Paciente from './Components/Paciente/Paciente';
import PacienteForm from './Components/Paciente/PacienteForm';
import ObraSocial from './Components/ObraSocial/ObraSocial';
import ObraSocialForm from './Components/ObraSocial/ObraSocialForm';

const NotFound = ({location})=>(
  <h1>Ha ocurido un Problema un problema. No se encuentra la página solicitada: {location.pathname} </h1>
)
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter >
          <NavBar />
          <div className="container" id="Main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pacientes" component={Paciente} />
              <Route exact path="/pacientes/new" component={PacienteForm} />
              <Route exact path="/obras_sociales" component={ObraSocial} />
              <Route exact path="/obras_sociales/new" component={ObraSocialForm} />
              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter >
        <Footer />
      </div>
    );
  }
}


export default App;
