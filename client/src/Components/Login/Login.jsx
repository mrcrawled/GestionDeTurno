import React, { Component } from 'react';
// import axios from 'axios';
import Input from '../Formulario/Input'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
        };
    }

    render() {
        return (
            <form onSubmit={this.agregarObraSocial} className="formulario">
                <div className="form-header">
                    Iniciar sesión
                </div>
                <div className="form-body">
                    <Input
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                        placeholder="Usuario *"
                    />
                    <Input
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Contraseña *"
                        type="password"
                    />
                    <button type="submit" className="btn">Ingresar</button>
                </div>
            </form>
        )
    }
}

export default Login;
