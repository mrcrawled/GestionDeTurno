import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Formulario/Input'

class ObraSocialForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
        };
    }

    agregarObraSocial = async event => {
        try {
            event.preventDefault();
            const { history } = this.props;
            const res = await axios.post(`/obras_sociales`, {
                nombre: this.state.nombre,
                descripcion: this.state.descripcion
            });
            console.log (res);
            const result = await res.data;
            console.log(result);
            history.push('/obras_sociales');
        } catch (error) {
            console.log(error);
        }
    }
    
    handleCancel = () => {
        window.history.back();
    }
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.agregarObraSocial} className="formulario">
                <div className="form-header">
                    Nueva Obra Social
                </div>
                <div className="form-body">
                    <input
                        autoComplete="off"
                        name="nombre"
                        onChange={this.handleChange}
                        placeholder="Nombre *"
                        required
                        type="text"
                    />
                    <input
                        autoComplete="off"
                        name="descripcion"
                        onChange={this.handleChange}
                        placeholder="Descripción *"
                        required
                        type="text"
                    />
                    <button type="submit" className="btn">Agregar</button>
                    <button type="submit" onClick={this.handleCancel} className="btn">Cancelar</button>
                </div>
            </form>
        )
    }
}

export default ObraSocialForm
