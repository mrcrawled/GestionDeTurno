import React, { Component } from 'react';
import axios from 'axios';

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
            console.log(this.state);
            const obrasSociales = await {
                nombre: this.state.nombre,
                descripcion: this.state.descripcion
            }
            const res = await axios.post(`/obras_sociales`, obrasSociales);
            const result = await res.data;
            this.setState({ result });
            console.log(result);
            console.log(res.data);
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
    
    render() {
        return (
            <form onSubmit={this.agregarObraSocial} className="formulario">
                <div className="form-header">
                    Nueva Obra Social
                </div>
                <div className="form-body">
                    <input
                        type="text"
                        name="nombre"
                        onChange={this.handleChange}
                        placeholder="Nombre *"
                        required
                    />
                    <input
                        type="text"
                        name="descripcion"
                        placeholder="Descripcion"
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="btn">Agregar</button>
                    <button type="submit" onClick={this.handleCancel} className="btn">Cancelar</button>

                </div>
            </form>
        )
    }
}

export default ObraSocialForm
