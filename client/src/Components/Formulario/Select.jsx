import React, { Component } from 'react';

class Select extends Component {
    constructor(props){
        super(props);
        this.state = {
            shift: 0
        };
    }
    handleItemClicked = (sitem, siold = null, shead = null, sbody = null) => {
        if( !sitem.classList.contains("selected") ){
            if(sbody == null) sbody = sitem.parentNode;
            if(shead == null) shead = sbody.previousSibling.previousSibling;
            if(siold == null) siold = sbody.querySelector(".selected");
            if(siold != null) siold.classList.remove("selected");
            sitem.classList.add("selected");
            shead.setAttribute("key", sitem.getAttribute("value"));
            shead.value = sitem.innerHTML;
            const eventChange = {
                target: {
                    name: shead.name,
                    value: shead.getAttribute("key")
                }
            }
            this.props.onChange(eventChange);
        }
    }
    onItemClick = (event) => {
        let sitem = event.target;
        this.handleItemClicked(sitem);
    }
    replace = (str, ref) => {
        for( let i=0; i<str.length; i++){
            Array.prototype.forEach.call( ref, (value,key) => { 
                if(str[i] === key) str[i] = value;
            });
        }
        return str;
    }
    onChange = event => {
        let shead = event.target,
            items = shead.parentNode.querySelectorAll(".select-item"),
            toReplace = {"á": "a","é": "e","í": "i","ó": "o","ú": "u"},
            toMatch = this.replace(shead.value.toLowerCase(),toReplace),
            str = "";
        for(let i=0; i<items.length; i++){ 
            str = this.replace(items[i].innerHTML.toLowerCase(), toReplace);
            if( str.includes(toMatch) ){
                items[i].classList.remove("hide");
            } else {
                items[i].classList.add("hide");
            }
        }
    }
    handleSelected = event => {
        if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)){
            let shead = event.target,
                items = shead.parentNode.querySelectorAll(".select-item:not(.hide)"),
                shift = this.state.shift,
                indx, jndx;
            for(indx=0; indx<items.length && !items[indx].classList.contains("selected"); indx++);
            if(indx !== items.length){
                let sbody = shead.nextSibling.nextSibling;
                jndx = indx;
                switch(event.key){
                    case "ArrowUp":
                    case "ArrowLeft":
                        if(indx > 0) {indx--; shift -= 40;}
                        break;
                    case "ArrowDown":
                    case "ArrowRight":
                        if(indx < items.length-1) {indx++; shift += 40;}
                        break;
                    default:break;
                }
                if( shift <= 0 ){ shift = 0; }
                else if( shift >= 120 ){ shift = 120; }
                this.setState({shift});
                if( indx !== jndx ) {
                    this.handleItemClicked( items[indx], items[jndx], shead, sbody);
                    sbody.scrollTo(0,items[indx].offsetTop - shift);
                    console.log(sbody.scrollTop);
                }
            } else { indx = 0; jndx = 0; this.handleItemClicked( items[indx] ); }
        }
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
                        onKeyDown={this.handleSelected}
                        required
                        type="text"
                    />
                    <label htmlFor={this.props.id}>{this.props.placeholder}</label>
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