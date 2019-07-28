import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Formulario/Input'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    signIn = async event => {
        try {
            event.preventDefault();
            const res = await axios.post(`/signup`, {
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
            <form onSubmit={this.signIn} className="formulario">
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
                    <button type="submit" className="btn">Ingresar</button>
                </div>
            </form>
        )
    }
}

export default Login;