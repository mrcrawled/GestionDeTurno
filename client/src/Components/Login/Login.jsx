import React, { Component } from 'react';
import axios from 'axios';
import "../Formulario/Formulario.scss";
import Input from '../Formulario/Input'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    login = async event => {
        try {
            const res = await axios.post(`/login`, {
                username: this.state.username,
                password: this.state.password
            });
            console.log(res);
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="formulario">
                <div className="form-header">
                    Iniciar sesión
                </div>
                <div className="form-body">
                    <Input
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                        value = {this.state.username}
                        placeholder="Usuario *"
                    />
                    <Input
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                        value = {this.state.password}
                        placeholder="Contraseña *"
                        type="password"
                    />
                    <button className="btn" onClick={this.login}>Ingresar</button>
                </div>
            </div>
        )
    }
}

export default Login;