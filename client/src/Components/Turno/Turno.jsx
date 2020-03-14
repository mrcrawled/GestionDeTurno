import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginacion from '../Paginacion';

class Turno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnos: [],
            pacientes: [],
            id: ''
        };
    }

    //Lista Turnos
    getTurnos = async () => {
        try {
            const res = await axios.get("/turnos");
            const turnos = await res.data;
            this.setState({ turnos });
        } catch (error) {
            console.log(error);
        }
    }

    //Lista pacientes
    getPacientes = async () => {
        try {
            const res = await axios.get("/pacientes");
            const pacientes = await res.data;
            this.setState({ pacientes });
        } catch (error) {
            console.log(error);
        }
    }
    
    componentDidMount() {
        this.getTurnos();
        this.getPacientes();
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    render() {
        console.log("Render Turno");
        return (
            <div>
                <h2>Turnos</h2>
                <Link to="/turnos/new" title="Nuevos Turnos">
                    <button type="button" className="btn">Nuevo Turno</button>
                </Link>
                <Paginacion
                    rhead={["Paciente","Fecha y Hora", "Practica"]}
                    rbody={this.state.turnos.map( (turno,index) => {
                        return [
                            turno.id_paciente,
                            turno.fecha_hora,
                            turno.practica
                        ]
                    })}
                />
            </div>
        )
    }
}

export default Turno