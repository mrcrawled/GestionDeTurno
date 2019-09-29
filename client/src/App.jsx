import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './Custom/AppliedRoute';

import Home from './Components/Home';

import Header from './Components/Header';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import Login from './Components/Login/Login';
import RecuperarContrasenia from './Components/Login/RecuperarContrasenia'

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
            rol: 'Invitado'
        };
    }

    updateLogin = (login, rol) => {
        this.setState({
            loggedin: login,
            rol: rol
        });
    }

    render() {
        console.log("Render APP",this.state.loggedin);
        let listOfRoutes;
        if( !this.state.loggedin){
            listOfRoutes = [
                <Route exact key="0" path="/" component={Login} props={{handleLogin: this.updateLogin}}/>,
                <Route exact key="0" path="/login/recuperarContrasenia" component={RecuperarContrasenia}/>

            ];
        } else {
            listOfRoutes = [
                <Route exact key="0" path="/" component={Home}/>,
                <Route exact key="1" path="/pacientes" component={Paciente} />,
                <Route exact key="2" path="/pacientes/new" component={PacienteForm} />,
                <Route exact key="3" path="/pacientes/edit/:id" component={PacienteForm} />,
                <Route exact key="4" path="/pacientes/:id" component={PacienteInfo} />,
                <Route exact key="5" path="/obras-sociales" component={ObraSocial} />,
                <Route exact key="6" path="/obras-sociales/new" component={ObraSocialForm} />,
                <Route exact key="7" path="/obras-sociales/edit/:id" component={ObraSocialForm} />,
                <Route exact key="8" path="/obras-sociales/:id" component={ObraSocialInfo} />
            ];
        }
        return (
            <Router>
                <div>
                    <Header />
                    {/* falta terminar esta parte al momento de logearse. */}
                    <NavBar loggedin={this.state.loggedin} rol={this.state.rol} />
                    <div className="container" id="Main">
                        <Switch>
                            { listOfRoutes }
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
