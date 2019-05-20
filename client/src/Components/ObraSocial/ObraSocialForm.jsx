import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Formulario/Input'

class ObraSocialForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nombre: "",
            descripcion: "",
            isEditable: false
        };
    }
    getObraSocialById = async (id) => {
        try {
            const res = await axios.get(`/obras_sociales/${id}`)
            const obraSocialData = res.data;
            this.setState({
                id: obraSocialData.id,
                nombre: obraSocialData.nombre,
                descripcion: obraSocialData.descripcion,
                isEditable: true
            });
        } catch (error) {
            console.log(error);
        }
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
    actualizarObraSocial = async (event) => {
        try {
            event.preventDefault();
            const { match: { params: { id } } } = this.props;
            const res = await axios.put(`/obras_sociales/edit/${id}`,{
                nombre: this.state.nombre,
                descripcion: this.state.descripcion
            });
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
    handleCancel = () => { window.history.back(); }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidMount(){
        const { match: { params: {id} } } = this.props;
        if( id ){
            this.getObraSocialById(id);
        }
    }
    render() {
        return (
            <form onSubmit={this.state.isEditable ? this.actualizarObraSocial : this.agregarObraSocial} className="formulario">
                <div className="form-header">
                    Nueva Obra Social
                </div>
                <div className="form-body">
                    <Input
                        id="nombre"
                        name="nombre"
                        onChange={this.handleChange}
                        placeholder="Nombre *"
                        value = {this.state.nombre}
                    />
                    <Input
                        id="descripcion"
                        name="descripcion"
                        onChange={this.handleChange}
                        placeholder="Descripción *"
                        value = {this.state.descripcion}
                    />
                    <button type="submit" className="btn">{this.state.isEditable ? "Actualizar" : "Agregar"}</button>
                    <button type="submit" onClick={this.handleCancel} className="btn">Cancelar</button>
                </div>
            </form>
        )
    }
}

export default ObraSocialForm
