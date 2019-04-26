import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginacion from '../Paginacion';

class Paciente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pacientes: [],
            id: 0
        }
    };

    //Lista Pacientes
    getPacientes = async () => {
        try {
            const res = await axios.get("/pacientes");
            const pacientes = await res.data;
            for (let i = 0; i < pacientes.legth; i++) {
                pacientes[i].direccion = JSON.parse(pacientes[i].direccion);
            }
            this.setState({ pacientes });
        } catch (error) {
            console.log(error);
        }
    }

    getFormattedDocument = (document) => {
        return `${document.doc_tipo}: ${document.doc_numero}`;
    }

/*    /*Comente esto porque ya no listamos por direccion. Recuerdo que me dijiste que podríamos sacarlo porque no era reelevante la info para listar

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
*/

    /*Comente esto porque ya no listamos por fecha de nacimiento. Recuerdo que me dijiste que podríamos sacarlo
getFormattedTimestamp = (timestamp) => {
        let birthDate = new Date(timestamp),
            date = birthDate.getDate() < 10 ? `0${birthDate.getDate()}` : birthDate.getDate(),
            month = birthDate.getMonth() < 9 ? `0${birthDate.getMonth()+1}` : birthDate.getMonth()+1,
            formattedTimestamp = `${date}-${month}-${birthDate.getFullYear()}`;
        return formattedTimestamp;
    }*/

    handleSubmit = event => {
        event.preventDefault();
        const id = this.state.id;
        axios.delete(`/pacientes/${id}`).then(res => {
            console.log(res.data);
        })
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    componentDidMount() {
        this.getPacientes();
    }

    render() {
        return (
            <div>
                <h2>Pacientes</h2>
                <Link to="/pacientes/new">
                    <button type="button" className="btn">Nuevo Paciente</button>
                </Link>
                <Paginacion
                    rhead={["Nombre y Apellido", "Documento",""]}
                    rbody={this.state.pacientes.map((paciente) => {
                        return [
                            `${paciente.nombre} ${paciente.apellido}`,
                            `${this.getFormattedDocument(paciente.documento)}`,
                            <Link to={`/pacientes/${paciente.id}`}><button type="button">
                                INFO
                        </button>
                            </Link>
                        ]
                    })}
                />
            </div>
        )
    }
}

export default Paciente
