import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Paciente from './Components/Paciente/Paciente';
import ObraSocial from './Components/ObraSocial/ObraSocial';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter >
          <NavBar />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/pacientes" component={Paciente} />
            <Route exact path="/obras_sociales" component={ObraSocial} />
          </div>
        </BrowserRouter >
        <Footer />
      </div>
    );
  }
}


export default App;
