import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginacion from '../Paginacion';

class Turno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnos: [],
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

    
    
    componentDidMount() {
        this.getTurnos();
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
                    rhead={["Nombre", "Apellido","Fecha y Hora", "Practica"]}
                    rbody={this.state.turnos.map( (turno,index) => {
                        return [
                            turno.nombre,
                            turno.apellido,
                            turno.fecha_hora,
                        ]
                    })}
                />
            </div>
        )
    }
}

export default Turno