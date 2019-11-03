import React, { Component } from 'react';
import axios from 'axios';
import "../Formulario/Formulario.scss";
import Input from '../Formulario/Input'
import PracticaProfesional from './PracticaProfesional';

class PracticaProfesionalForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            descripcion: '',
            duracion:'',
            isEditable: false
        };
    }

    agregarPracticaProfesional = async event => {
        try {
            event.preventDefault();
            const { history } = this.props;
            const res = await axios.post(`/practicas`, {
                descripcion: this.state.descripcion,
                duracion: this.state.duracion
            });
            console.log(res);
            if(res.data.status === "OK"){
                history.push(res.data.id);
            }
        } catch (error) {
            console.log(error);
        }
    }

    actualizarPracticaProfesional = async (event) => {
        try {
            event.preventDefault();
            const { match: { params: { id } } } = this.props;
            const res = await axios.put(`/practicas/${id}`,{
                descripcion: this.state.descripcion,
                duracion: this.state.duracion
            });
            const actualizarPracticaProfesional = res.data;
            console.log(actualizarPracticaProfesional);
            this.setState({
                id: actualizarPracticaProfesional.id,
                descripcion: actualizarPracticaProfesional.descripcion,
                duracion: actualizarPracticaProfesional.duracion
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
    
    render() {
        return (
            <div className="formulario">
                <div className="form-header">{this.state.isEditable ? "Editar" : "Nueva"} Práctica Profesional</div>
                <div className="form-body">
                    <Input
                        id="descripcion"
                        name="descripcion"
                        onChange={this.handleChange}
                        placeholder="Descripción *"
                        value = {this.state.descripcion}
                    />
                    <Input
                        id="duracion"
                        name="duracion"
                        onChange={this.handleChange}
                        placeholder="Duración *"
                        value = {this.state.duracion}
                    />
                    <button type="button" onClick={this.state.isEditable ? this.actualizarPracticaProfesional : this.agregarPracticaProfesional} className="btn">{this.state.isEditable ? "Actualizar" : "Agregar"}</button>
                    <button type="button" onClick={this.handleCancel} className="btn">Cancelar</button>
                </div>
            </div>
        )
    }
}

export default PracticaProfesionalForm
