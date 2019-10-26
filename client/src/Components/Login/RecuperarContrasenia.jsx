import React, { Component } from 'react';
import "../Formulario/Formulario.scss";
import Input from '../Formulario/Input'
import axios from 'axios';

class RecuperarContrasenia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false,
            message: '',
        };
    }

    recuperarContrasenia = e => {
        e.preventDefault();
        if (this.state.email === 'No se encuentra la dirección de mail') {
            this.setState({
                error: false,
                message: '',
            });
        } else {
            axios.post(`/localhost/recuperarcontrasenia`, {
                email: this.state.email,
            }).then(res => {
                console.log(res.data);
                if (res.data === '') {
                    this.setState({
                        error: true,
                        message: '',
                    });
                } else if (res.data === "Correo de Recuperacion Mandando") {
                    this.setState({
                        error: false,
                        message: 'Correo de Recuperacion Mandando'
                    });
                }
            }).catch(error =>{
                console.log(error.data)
            });
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
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