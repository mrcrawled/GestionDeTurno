import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>SISTEMA DE GESTION DE TURNOS</h1>
            </header>
        )
    }
}

const headerStyle = {
    background: 'deepskyblue',
    color: 'white',
    textAlign: 'center',
    padding: '8px'
}

export default Header