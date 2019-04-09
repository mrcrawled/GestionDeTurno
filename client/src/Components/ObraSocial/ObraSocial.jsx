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

    deleteObraSocial =  event => {
        let element = event.target,
            id = element.dataset.key;
        console.log(element, id);
        axios.delete(`/obras_sociales/${id}`)
        .then((res) => {
            console.log(res);
            let rows = document.getElementsByClassName("pagination-body"),
                kindex = Array.prototype.indexOf.call(document.querySelectorAll("i.fas.fa-trash-alt"), element);
            rows[kindex].remove();
        })
        .catch((e) => {
            console.log(e);
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
                <Link to="/obras_sociales/new">
                    <button type="button" className="btn">Nueva Obra Social</button>
                </Link>
                <Paginacion
                    rhead={["Nombre", "Descripción", ""]}
                    rbody={this.state.obras_sociales.map( (obra_social) => {
                        return [
                            obra_social.nombre,
                            obra_social.descripcion,
                            <i onClick={this.deleteObraSocial} className="far fa-trash-alt" data-key={obra_social.id}></i>
                        ]
                    })}
                    
                />
            </div>
        )
    }
}

export default ObraSocial