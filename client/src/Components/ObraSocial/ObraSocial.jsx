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
        this.deleteObraSocial = this.deleteObraSocial.bind(this);

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

    deleteObraSocial () {
        const { match: { params } } = this.props;
        axios.delete(`/obras_sociales/${params.id}`)
        .then(() => {
            console.log('Se ha borrado la obra social');
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
                    rhead={["Nombre", "Descripción"]}
                    rbody={this.state.obras_sociales.map( (obra_social) => {
                        return [ obra_social.nombre, obra_social.descripcion,
                        <Link to={`/obras_sociales/${obra_social.id}`}><button onClick={this.deleteObraSocial} type="button">
                        <i className="fas fa-trash-alt"></i>
                        </button> </Link>]
                       
                    })}
                    
                />
            </div>
        )
    }
}

export default ObraSocial