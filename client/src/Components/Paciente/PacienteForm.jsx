import React, { Component } from 'react';
import axios from 'axios';
import Select from '../Formulario/Select';
import Input from '../Formulario/Input';

class PacienteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            fecha_nacimiento: '',
            domicilio: '',
            numero: '',
            piso: '',
            departamento: '',
            doc_tipo: '',
            doc_numero: '',
            email: '',
            id_obra_social: '',
            numero_afiliado: '',
            os_nombre: '',
            obras_sociales: []
        };
    }

    getObrasSociales = async () => {
        try {
            const res = await axios.get("/obras_sociales");
            const obras_sociales = await res.data;
            this.setState({ obras_sociales });
        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.getObrasSociales();
    }

    agregarPaciente = async event => {
        event.preventDefault();
        try{
            const res = await axios.post("/pacientes", {
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                fecha_nacimiento: this.state.fecha_nacimiento,
                direccion: JSON.stringify({
                    domicilio: this.state.domicilio,
                    numero: this.state.numero,
                    piso: this.state.piso,
                    departamento: this.state.departamento,
                }),
                documento: JSON.stringify({
                    doc_tipo: this.state.doc_tipo,
                    doc_numero: this.state.doc_numero
                }),
                doc_numero: this.state.doc_numero,
                email: this.state.email,
                id_obra_social: this.state.id_obra_social,
                numero_afiliado: this.state.numero_afiliado,
                os_nombre: this.state.os_nombre
            });
            console.log(res);
        } catch(error) {
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
            <form onSubmit={this.agregarPaciente} className="formulario">
                <div className="form-header">
                    Nuevo Paciente
                </div>
                <div className="form-body">
                    <fieldset>
                        <legend>Información Personal</legend>
                        <Input
                            id="nombre"
                            name="nombre"
                            onChange={this.handleChange}
                            placeholder="Nombre *"
                        />
                        <Input
                            id="apellido"
                            name="apellido"
                            onChange={this.handleChange}
                            placeholder="Apellido *"
                        />
                        <Input
                            extra="ej: 08-10-1990"
                            id="fecha_nacimiento"
                            name="fecha_nacimiento"
                            onChange={this.handleChange}
                            placeholder="Fecha de Nacimiento *"
                        />
                        <Input
                            id="email"
                            name="email"
                            onChange={this.handleChange}
                            placeholder="Correo electrónico *"
                            type="mail"
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Documento</legend>
                        <div className="col-2">
                            <Input
                                id="doc_tipo"
                                name="doc_tipo"
                                onChange={this.handleChange}
                                placeholder="Tipo documento *"
                            />
                            <Input
                                id="doc_numero"
                                name="doc_numero"
                                onChange={this.handleChange}
                                placeholder="Numero de documento *"
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Dirección</legend>
                        <div className="col-2">
                            <Input
                                id="domicilio"
                                name="domicilio"
                                onChange={this.handleChange}
                                placeholder="domicilio"
                            />
                            <Input
                                id="numero"
                                name="numero"
                                onChange={this.handleChange}
                                placeholder="Número"
                            />
                            <Input
                                id="piso"
                                name="piso"
                                onChange={this.handleChange}
                                placeholder="Piso"
                            />
                            <Input
                                id="departamento"
                                name="departamento"
                                onChange={this.handleChange}
                                placeholder="Departamento"
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>Obra Social</legend>
                        <Select
                            id="id_obra_social"
                            name="id_obra_social"
                            onChange={this.handleChange}
                            options={this.state.obras_sociales.map(
                                (os,key) => {
                                    return {
                                        value:os.id,
                                        text:os.nombre
                                    }
                                }
                            )}
                            placeholder="Obra Social"
                        />
                        <Input
                            id="numero_afiliado"
                            name="numero_afiliado"
                            onChange={this.handleChange}
                            placeholder="Número de afiliado"
                        />
                    </fieldset>
                    <button type="submit" className="btn">Agregar</button>
                    <button type="button" onClick={this.handleCancel} className="btn">Cancelar</button>
                </div>
            </form>
        )
    }
}

export default PacienteForm;