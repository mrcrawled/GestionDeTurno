import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Paginacion from '../Paginacion';

class ObraSocial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obras_sociales: [],
            id: ''
        };
    }

    //Lista Obras Sociales
    getObrasSociales = async () => {
        try {
            const res = await axios.get("/obras_sociales");
            const obras_sociales = await res.data;
            this.setState({ obras_sociales });
        } catch (error) {
            console.log(error);
        }
    }

    deleteObraSocial = (event, id, index) => {
        console.log(this.props);
        axios.delete(`/obras_sociales/${id}`)
        .then((res) => {
            let rows = document.getElementsByClassName("pagination-body");
            rows[index].remove();
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    componentDidMount() {
        this.getObrasSociales();
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    render() {
        return (
            <div>
                <h2>Obras Sociales</h2>
                <Link to="/obras_sociales/new" title="Nueva obra social">
                    <button type="button" className="btn">Nueva Obra Social</button>
                </Link>
                <Paginacion
                    rhead={["Nombre", "Descripción", ""]}
                    rbody={this.state.obras_sociales.map( (obra_social,index) => {
                        return [
                            obra_social.nombre,
                            obra_social.descripcion,
                            <i onClick={(event) => this.deleteObraSocial(event, obra_social.id, index)} className="far fa-trash-alt"></i>,
                            <Link to={`/obras_sociales/${obra_social.id}`}><button type="button">
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

export default ObraSocial