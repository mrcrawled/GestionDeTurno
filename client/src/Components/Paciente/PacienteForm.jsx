import React, { Component } from 'react';
import axios from 'axios';
import "../Formulario/Formulario.scss";
import Select from '../Formulario/Select';
import Input from '../Formulario/Input';

class PacienteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nombre: '',
            apellido: '',
            fecha_nacimiento: '',
            domicilio: '',
            numero: '',
            piso: '',
            departamento: '',
            doc_tipo: '',
            doc_numero: '',
            tel_tipo: '',
            tel_numero: '',
            email: '',
            id_obra_social: '',
            numero_afiliado: '',
            obras_sociales: [],
            isEditable: false
        };
    }
    getPacienteById = async (id) => {
        try {
            const res = await axios.get(`/pacientes/${id}`);
            const pacienteInfo = res.data;
            console.log(pacienteInfo);
            this.setState({
                username: pacienteInfo.username,
                id_paciente: pacienteInfo.id_paciente,
                nombre: pacienteInfo.nombre,
                apellido: pacienteInfo.apellido,
                fecha_nacimiento: this.getFormattedTimestamp(pacienteInfo.fecha_nacimiento),
                documento: this.getFormattedDocument(pacienteInfo.documento),
                id_usuario: pacienteInfo.id_usuario,
                direccion: this.getFormattedAddress(pacienteInfo.direccion),
                email: pacienteInfo.email,
                id_obra_social: pacienteInfo.id_obra_social,
                obra_social: pacienteInfo.obra_social,
                numero_afiliado: pacienteInfo.numero_afiliado,
                isEditable: true
            });
        } catch (error) {
            console.log(error);
        }
    }
    getObrasSociales = async () => {
        try {
            const res = await axios.get("/obras-sociales");
            const obras_sociales = await res.data;
            this.setState({ obras_sociales });
        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        const { match: { params: {id} } } = this.props;
        if( id ){
            this.getPacienteById(id);
        }
    
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
                telefono: JSON.stringify({
                    tel_tipo: this.state.tel_tipo,
                    tel_numero: this.state.tel_numero
                }),
                doc_numero: this.state.doc_numero,
                email: this.state.email,
                id_obra_social: this.state.id_obra_social,
                numero_afiliado: this.state.numero_afiliado
            });
            if(res.data.status === "OK"){
                this.props.history.push(res.data.id_paciente);
            }
        } catch(error) {
            console.log(error);
        }
    }
    actualizarPaciente = async (event) => {
        try {
            event.preventDefault();
            const { match: { params: { id } } } = this.props;
            const res = await axios.put(`/pacientes/${id}`,{
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
                numero_afiliado: this.state.numero_afiliado
            });
            const actualizarPaciente = res.data;
            this.setState({
                id: actualizarPaciente.id,
                nombre: actualizarPaciente.nombre,
                apellido: actualizarPaciente.apellido,
                fecha_nacimiento: this.getFormattedTimestamp(actualizarPaciente.fecha_nacimiento),
                documento: this.getFormattedDocument(actualizarPaciente.documento),
                id_usuario: actualizarPaciente.id_usuario,
                direccion: this.getFormattedAddress(actualizarPaciente.direccion),
                email: actualizarPaciente.email,
                id_obra_social: actualizarPaciente.id_obra_social,
                obra_social: actualizarPaciente.obra_social,
                numero_afiliado: actualizarPaciente.numero_afiliado,
            });
        } catch (error) {
            console.log(error);
        }
    }
    getFormattedAddress = (direccion) => {
        let formattedAddress = "",
            domicilio = direccion.domicilio !== "" && typeof direccion.domicilio !== "undefined" ? `Domicilio: ${direccion.domicilio}` : "",
            numero = direccion.numero !== "" ? `Número: ${direccion.numero}` : false,
            piso = direccion.piso !== "" ? `Piso: ${direccion.piso}` : false,
            departamento = direccion.departamento !== "" ? `Departamento: ${direccion.departamento}` : false;
        formattedAddress += domicilio ? domicilio + (numero || piso || departamento ? ", " : "") : "";
        formattedAddress += numero ? numero + (piso || departamento ? ", " : "") : "";
        formattedAddress += piso ? piso + (departamento ? ", " : "") : "";
        formattedAddress += departamento ? departamento : "";
        return formattedAddress;
    }
    getFormattedTimestamp = (timestamp) => {
        let birthDate = new Date(timestamp),
            date = birthDate.getDate() < 10 ? `0${birthDate.getDate()}` : birthDate.getDate(),
            month = birthDate.getMonth() < 9 ? `0${birthDate.getMonth() + 1}` : birthDate.getMonth() + 1,
            formattedTimestamp = `${date}-${month}-${birthDate.getFullYear()}`;
        return formattedTimestamp;
    }
    getFormattedDocument = (document) => {
        return `${document.doc_tipo}: ${document.doc_numero}`;
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
            <div className="formulario">
                <div className="form-header">{this.state.isEditable ? "Editar" : "Nuevo"} Paciente</div>
                <div className="form-body">
                    <div className="">
                        <fieldset>
                            <legend>Información Personal</legend>
                            <Input
                                id="nombre"
                                name="nombre"
                                onChange={this.handleChange}
                                placeholder="Nombre *"
                                value = {this.state.nombre}
                            />
                            <Input
                                id="apellido"
                                name="apellido"
                                onChange={this.handleChange}
                                placeholder="Apellido *"
                                value = {this.state.apellido}
                            />
                            <Input
                                extra="ej: 08-10-1990"
                                id="fecha_nacimiento"
                                name="fecha_nacimiento"
                                onChange={this.handleChange}
                                placeholder="Fecha de Nacimiento *"
                                value = {this.state.fecha_nacimiento}
                            />
                            <Input
                                id="email"
                                name="email"
                                onChange={this.handleChange}
                                placeholder="Correo electrónico *"
                                type="mail"
                                value = {this.state.email}
                            />
                        </fieldset>
                    </div>
                    <div className="">
                        <fieldset>
                            <legend>Documento</legend>
                            <div className="col-2">
                                <Input
                                    id="doc_tipo"
                                    name="doc_tipo"
                                    onChange={this.handleChange}
                                    placeholder="Tipo documento *"
                                    value = {this.state.doc_tipo}
                                />
                                <Input
                                    id="doc_numero"
                                    name="doc_numero"
                                    onChange={this.handleChange}
                                    placeholder="Número de documento *"
                                    value = {this.state.documento}
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Teléfono</legend>
                            <div className="col-2">
                                <Select
                                    id="tel_tipo"
                                    name="tel_tipo"
                                    onChange={this.handleChange}
                                    options={[
                                        {
                                            value:"1",
                                            text: "Celular"
                                        },{
                                            value:"2",
                                            text: "Fijo"
                                        },
                                    ]}
                                    placeholder="Tipo de Teléfono*"
                                    value = {this.state.tel_tipo}
                                />
                                <Input
                                    id="tel_numero"
                                    name="tel_numero"
                                    onChange={this.handleChange}
                                    placeholder="Número de Teléfono *"
                                    value = {this.state.documento}
                                />
                            </div>
                        </fieldset>
                    </div>
                    <div className="">
                        <fieldset>
                            <legend>Dirección</legend>
                            <div className="col-2">
                                <Input
                                    id="domicilio"
                                    name="domicilio"
                                    onChange={this.handleChange}
                                    placeholder="Domicilio"
                                    value = {this.state.direccion}
                                />
                                <Input
                                    id="numero"
                                    name="numero"
                                    onChange={this.handleChange}
                                    placeholder="Número"
                                    value = {this.state.direccion}
                                />
                                <Input
                                    id="piso"
                                    name="piso"
                                    onChange={this.handleChange}
                                    placeholder="Piso"
                                    value = {this.state.piso}
                                />
                                <Input
                                    id="departamento"
                                    name="departamento"
                                    onChange={this.handleChange}
                                    placeholder="Departamento"
                                    value = {this.state.departamento}
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
                                value = {this.state.obra_social}
                            />
                            <Input
                                id="numero_afiliado"
                                name="numero_afiliado"
                                onChange={this.handleChange}
                                placeholder="Número de afiliado"
                                value = {this.state.numero_afiliado}

                            />
                        </fieldset>
                    </div>
                    <button type="button" className="btn" onClick={this.state.isEditable ? this.actualizarPaciente : this.agregarPaciente}>{this.state.isEditable ? "Actualizar" : "Agregar"}</button>
                    <button type="button" className="btn" onClick={this.handleCancel}>Cancelar</button>
                </div>
            </div>
        )
    }
}

export default PacienteForm;