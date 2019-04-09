import React, { Component } from 'react';

class Select extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.setState({
            onChange: this.props.onChange,
            options: this.props.options,
            placeholder: this.props.placeholder
        });
    }

    onItemClick = (event) => {
        let sitem = event.target;
        if( !sitem.classList.contains("selected") ){
            let sbody = sitem.parentNode,
                shead = sbody.previousSibling.previousSibling,
                siold = sbody.querySelector(".selected");
            if(siold != null) siold.classList.remove("selected");
            sitem.classList.add("selected");
            shead.setAttribute("key", sitem.getAttribute("value"));
            shead.value = sitem.innerHTML;
            console.log("PASA");
            const eventChange = {
                target: {
                    name: shead.name,
                    value: shead.getAttribute("key")
                }
            }
            this.props.onChange(eventChange);
        }
    }
    
    onChange = event => {
        console.log("onChange: input.select-head"); // TODO mostrar solo los que coinciden con lo ingresado
    }

    render(){
        return (
            <div className="select-container">
                <div className="input-container">
                    <input 
                        autoComplete="off"
                        className="select-head"
                        name={this.props.name}
                        id={this.props.id}
                        onChange={this.onChange}
                        required
                        type="text"
                    />
                    <label htmlFor={this.props.id}>{this.state.placeholder}</label>
                    <div className="select-body">
                        {this.props.options.map( (option,key) => 
                            <div
                                className="select-item" 
                                key={key}
                                onClick={this.onItemClick}
                                value={option.value}
                            >{option.text}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
};

export default Select;