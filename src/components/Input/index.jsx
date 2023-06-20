import React, {Component} from "react";
import Label from "../Label/Label";
import "./style.css";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
    }

    render() {
        return (
            <div className="form-element">
                {this.props.label && <Label name={this.props.name} label={this.props.label}/>}
                <input placeholder={this.props.placeholder}
                       name={this.props.name}
                       type={this.props.type}
                       defaultValue=''
                       onChange={this.props.onChange}
                       required={this.props.required}
                       checked={this.props.value}
                />
                <p className="error">{this.props.validator}</p>
            </div>
        );
    }
}

export default Input;