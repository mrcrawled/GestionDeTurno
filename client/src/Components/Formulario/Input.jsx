import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            onChange: props.onChange,
            extra: props.extra ? props.extra : "",
            placeholder: props.placeholder ? props.placeholder : "",
            type: props.type ? props.type : 'text',
            value: props.value ? props.value : ''
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.id !== state.prevId) {
            return{
            id: props.id,
            name: props.name,
            type: props.type,
            value: props.value
        }
    };
    return null;
    }
    render(){
        return (
            <div className="input-container">
                <input
                    autoComplete="off"
                    id={this.state.id}
                    name={this.state.name}
                    onChange={this.state.onChange}
                    placeholder={this.state.extra}
                    required
                    type={this.state.type}
                    value={this.state.value}
                />
                <label htmlFor={this.state.id}>{this.state.placeholder}</label>
            </div>
        )
    }
};

export default Input;