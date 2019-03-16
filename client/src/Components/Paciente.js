import React, { Component } from 'react';
import axios from 'axios';

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
            this.setState({ pacientes });
        } catch (error) {
            console.log(error);
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = this.state.id;
        axios.delete(`/pacientes/${id}`)
                  .then(res => {
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
            <button type="button" className="btn btn-info">Agregar Paciente</button>

                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Paciente</th>
                            <th>Direccion</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.pacientes.map((paciente,item) => 
                    <tr key={item}><td>{paciente.nombre};{paciente.apellido}</td><td>{JSON.stringify(paciente.direccion)}</td>
                    <td><button className="glyphicon glyphicon-trash" onClick={this.handleSubmit}></button></td>
                    </tr>)}      
                    </tbody>

                </table>
            </div>
        )
    }
}

export default Paciente