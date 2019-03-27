import React, { Component } from 'react';
import axios from 'axios';

class PacienteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
        };
    }

    agregarPaciente = async event => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.agregarPaciente} className="formulario">
                <div className="form-header">
                    Nuevo Paciente
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
                        name="apellido"
                        placeholder="Apellido *"
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" className="btn">Agregar</button>
                </div>
            </form>
        )
    }
}

export default PacienteForm