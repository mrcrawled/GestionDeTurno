import React, { useState, useEffect } from 'react';
import axios from 'axios';


let ObraSocial = () => {
    const [obra_social, setObrasSociales] = useState([]);


    //Lista Obra Sociales
    const getObraSocial = async () => {
        const res = await axios.get("/obras_sociales");
        setObrasSociales(res.data);
    }

    useEffect(() => {
        getObraSocial();

    }, []);



    return (
        <div className="container">
            <h2>Obras Sociales</h2>
            <table className="table table-striped " >
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {obra_social.map(item => (
                        <tr key={item.id}><td>{item.nombre}</td><td>{item.descripcion}</td></tr>))}
                </tbody>
            </table>
        </div>
    );

}
export default ObraSocial;