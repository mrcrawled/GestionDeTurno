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
                    rhead={["Nombre y Apellido", "Documento"]}
                    rbody={this.state.pacientes.map((paciente) => {
                        return [
                            `${paciente.nombre} ${paciente.apellido}`,
                            `${this.getFormattedDocument(paciente.documento)}`,
                            <Link to={`/pacientes/${paciente.id}`} className="fas fa-folder"/>,
                            <Link to={`/pacientes/edit/${paciente.id}`} className="fas fa-edit"/>
                        ]
                    })}
                    info="2"
                    edit="3"
                />
            </div>
        )
    }
}

export default Paciente
