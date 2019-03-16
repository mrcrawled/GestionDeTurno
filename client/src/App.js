import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Paciente from './Components/Paciente';
import ObraSocial from './Components/ObraSocial';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter >
          <div className="Style">
            <NavBar />
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route exact path="/pacientes" component={Paciente} />
              <Route exact path="/obras_sociales" component={ObraSocial} />

            </div>
          </div>
        </BrowserRouter >
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}


export default App;
