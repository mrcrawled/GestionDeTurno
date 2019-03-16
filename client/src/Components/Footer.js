import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <p style={footerStyle}>
            El ema
            </p>
        )
    }
}

const footerStyle = {
    margin: '0',
    padding: '0',
    background: 'white',
    color: 'black',
    textAlign: 'right',
    font: '3px',
    height: '4em'

}

export default Footer