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
            const res = await axios.post(`/obras_sociales`, {
                nombre: this.state.nombre,
                descripcion: this.state.descripcion
            });
            const result = await res.data;
            this.setState({ result });
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    
    
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
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
                    <Input
                        autoComplete="off"
                        id="nombre"
                        name="nombre"
                        onChange={this.handleChange}
                        placeholder="Nombre *"
                        required
                        type="text"
                    />
                    <Input
                        autoComplete="off"
                        id="descripcion"
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
