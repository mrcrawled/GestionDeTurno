import React, { Component } from 'react';
import axios from 'axios';
import Paginacion from '../Paginacion';

class Paciente extends Component {
constructor(props){
    super(props);
    this.state = {
        pacientes: [],
        id: 0  
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    //Lista Pacientes
    getPacientes = async () => {
        try {
            const res = await axios.get("/pacientes");
            const pacientes = await res.data;
            for(let i = 0; i < pacientes.legth; i++){
                pacientes[i].direccion = JSON.parse(pacientes[i].direccion);
            }
            this.setState({ pacientes });
        } catch (error) {
            console.log(error);
        }
    }

    getFormattedAddress = (direccion) => {
        let formattedAddress = "",
            calle = direccion.calle !== "" ? `Calle: ${direccion.calle}` : "",
            numero = direccion.numero !== "" ? `Número: ${direccion.numero}` : false,
            piso = direccion.piso !== "" ? `Piso: ${direccion.piso}` : false,
            departamento = direccion.departamento !== "" ? `Departamento: ${direccion.departamento}` : false;
        formattedAddress += calle ? calle + (numero || piso || departamento ? ", " : "") : "";
        formattedAddress += numero ? numero + (piso || departamento ? ", " : "") : "";
        formattedAddress += piso ? piso + (departamento ? ", " : "") : "";
        formattedAddress += departamento ? departamento : "";
        return formattedAddress;
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = this.state.id;
        axios.delete(`/pacientes/${id}`).then(res => {
            console.log(res);
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
            <div className="container">
                <h2>Pacientes</h2>
                <button type="button" className="btn">Agregar Paciente</button>
                <Paginacion
                    rhead={["Nombre y Apellido", "Direccion"]}
                    rbody={this.state.pacientes.map( (paciente) => {
                        return [
                            `${paciente.nombre} ${paciente.apellido}`,
                            `${this.getFormattedAddress(paciente.direccion)}`
                        ]
                    })}
                />
            </div>
        )
    }
}

export default Paciente