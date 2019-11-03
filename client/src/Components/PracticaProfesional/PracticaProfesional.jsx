import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginacion from '../Paginacion';

class PracticaProfesional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            practicas_profesionales: [],
            id: ''
        };
    }

    //Lista Obras Sociales
    getPracticasProfesionales = async () => {
        try {
            const res = await axios.get("/practicas");
            const practicas_profesionales = await res.data;
            this.setState({ practicas_profesionales });
            console.log(practicas_profesionales);
        } catch (error) {
            console.log(error);
        }
    }

    deletePracticasProfesionales = (event, id, index) => {
        console.log(this.props);
        axios.delete(`/practicas/${id}`)
        .then((res) => {
            let rows = document.getElementsByClassName("pagination-body");
            rows[index].remove();
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    componentDidMount() {
        this.getPracticasProfesionales();
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Prácticas Profesionales</h2>
                <Link to="/practicas/new" title="Nueva practica profesional">
                    <button type="button" className="btn">Nueva Practica Profesional</button>
                </Link>
                <Paginacion
                    rhead={["Descripcion", "Duración"]}
                    rbody={this.state.practicas_profesionales.map( (practica_profesional,index) => {
                        return [
                            practica_profesional.descripcion,
                            practica_profesional.duracion,
                            <i onClick={(event) => this.deletePracticasProfesionales(event, practica_profesional.id, index)} className="far fa-trash-alt"></i>,
                            <Link to={`/practicas/edit/${practica_profesional.id}`} className="fas fa-edit"/>,
                        ]
                    })}
                    delete="2"
                    edit="4"
                />
            </div>
        )
    }
}

export default PracticaProfesional