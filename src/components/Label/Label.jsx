import React, {Component} from "react";
import "./style.css";

class Label extends Component{
    render() {
        return (
            <label htmlFor={this.props.name}>{this.props.label}</label>
        );
    }
}

export default Label;