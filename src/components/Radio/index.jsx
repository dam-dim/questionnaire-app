import React from "react";
import Label from "../Label/Label";

class Radio extends React.Component {
    render() {
        return (
            <div className="form-element">
                <Label label="Gender"/>
                <div className="radio">
                    <div className="radio-element">
                        <Label name="gender" label="Male"/>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.props.value === "Male"}
                            onChange={this.props.onChange}
                        />
                    </div>
                    <div className="radio-element">
                        <Label name="gender" label="Female"/>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.props.value === "Female"}
                            onChange={this.props.onChange}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

export default Radio;