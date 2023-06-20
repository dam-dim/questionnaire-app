import React from "react";
import Label from "../Label/Label";
import "./style.css";

class Textarea extends React.Component {
    render() {
        return(
            <div className="form-element">
                <Label name={this.props.name} label={this.props.label}/>
                <textarea
                    required={this.props.required}
                    onChange={this.props.onChange}
                    defaultValue=''
                    rows={this.props.rows}
                    cols={this.props.cols}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                >
            </textarea>
            </div>

        );
    }
}

export default Textarea;