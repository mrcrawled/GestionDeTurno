import React, { Component } from 'react';
import "../Formulario/Formulario.scss";
import Input from '../Formulario/Input'

class RecuperarContrasenia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    render() {
        return (
            <div className="formulario">
                <div className="form-header">Recuperar Contraseña</div>
                <div className="form-body">
                    <Input
                        id="email"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Email "
                        value={this.state.email}
                    />
                </div>
            </div>
        )
    }
}


export default RecuperarContrasenia;