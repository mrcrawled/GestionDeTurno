import React, { Component } from 'react';
import axios from 'axios';

class PacienteInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nombre: "",
            apellido: "",
            fecha_nacimiento: "",
            documento: "",
            id_usuario: "",
            direccion: ""
        }
    }

    getPacienteById = async () => {
        try {
            const { match: { params: { id } } } = this.props;
            const res = await axios.get(`/pacientes/${id}`);
            const pacienteInfo = res.data;
            console.log(this.setState({
                id: pacienteInfo.id,
                nombre: pacienteInfo.nombre,
                apellido: pacienteInfo.apellido,
                fecha_nacimiento: this.getFormattedTimestamp(pacienteInfo.fecha_nacimiento),
                documento: this.getFormattedDocument(pacienteInfo.documento),
                id_usuario: pacienteInfo.id_usuario,
                direccion: this.getFormattedAddress(pacienteInfo.direccion)
            }));
        } catch (error) {
            console.log(error);
        }
    }

    getFormattedAddress = (direccion) => {
        let formattedAddress = "",
            domicilio = direccion.domicilio !== "" && typeof direccion.domicilio !== "undefined" ? `domicilio: ${direccion.domicilio}` : "",
            dire = direccion.direccion !== "" && typeof direccion.direccion !== "undefined" ? `Dirección: ${direccion.direccion}` : "",
            numero = direccion.numero !== "" ? `Número: ${direccion.numero}` : false,
            piso = direccion.piso !== "" ? `Piso: ${direccion.piso}` : false,
            departamento = direccion.departamento !== "" ? `Departamento: ${direccion.departamento}` : false;
        formattedAddress += domicilio ? domicilio + (numero || piso || departamento ? ", " : "") : "";
        formattedAddress += dire ? dire + (numero || piso || departamento ? ", " : "") : "";
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

    componentDidMount() {
        this.getPacienteById();
    }

    handleOK = () => {
        const { history } = this.props;
        history.push('/pacientes/');
    }

    render() {
        return (
            <div className="card-info">
                <div className="card-header">
                    Detalle del Paciente
                                </div>
                <div className="card-body">
                    <div className="card-field">
                        <div className="card-data">{this.state.nombre}</div>
                        <div className="card-label">Nombre</div>
                    </div>
                    <div className="card-field">
                        <div className="card-data">{this.state.apellido}</div>
                        <div className="card-label">Apellido</div>
                    </div>
                    <div className="card-field">
                        <div className="card-data">{this.state.fecha_nacimiento}</div>
                        <div className="card-label">Fecha de Nacimiento</div>
                    </div>
                    <div className="card-field">
                        <div className="card-data">{this.state.documento}</div>
                        <div className="card-label">Documento</div>
                    </div>
                    <div className="card-field">
                        <div className="card-data">{this.state.id_usuario}</div>
                        <div className="card-label">Id Usuario</div>
                    </div>
                    <div className="card-field">
                        <div className="card-data">{this.state.direccion}</div>
                        <div className="card-label">Dirección</div>
                    </div>
                    <button type="submit" onClick={this.handleOK} className="btn">OK</button>
                </div>
            </div>
        )
    }
}

export default PacienteInfo