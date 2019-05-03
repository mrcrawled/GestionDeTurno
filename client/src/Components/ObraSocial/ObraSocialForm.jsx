import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Formulario/Input'

class ObraSocialForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            isEditable: false
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
            if(res.data.status === "OK"){
                history.push(res.data.id_obra_social);
            }
        } catch (error) {
            console.log(error);
        }
    }

    actualizarObraSocial = async () => {
        try {
            const { match: { params: { id } } } = this.props;
            const res = await axios.put(`/obras_sociales/edit/${id}`)
            const actualizarObraSocial = res.data;
            console.log(actualizarObraSocial);
            this.setState({
                id: actualizarObraSocial.id,
                nombre: actualizarObraSocial.nombre,
                descripcion: actualizarObraSocial.descripcion
            });
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
            <form onSubmit={this.actualizarObraSocial} className="formulario">
                <div className="form-header">
                    Nueva Obra Social
                </div>
                <div className="form-body">
                    <Input
                        id="nombre"
                        name="nombre"
                        onChange={this.handleChange}
                        placeholder="Nombre *"
                    />
                    <Input
                        id="descripcion"
                        name="descripcion"
                        onChange={this.handleChange}
                        placeholder="Descripción *"
                    />
                    <button type="submit" className="btn">Agregar</button>
                    <button type="submit" onClick={this.handleCancel} className="btn">Cancelar</button>
                </div>
            </form>
        )
    }
}

export default ObraSocialForm
