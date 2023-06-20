import React, {Component} from "react";
import Input from "../Input";
import Radio from "../Radio";
import Textarea from "../Textarea";
import "./style.css";
import {validator, errors} from "../../utils/validator";
import {sendFormData} from "../../services/data";

class FormParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            phone: "",
            email: "",
            birthDate: "",
            gender: "",
            comments: "",
            file: "",
            isSubscribed: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
    }

    validate() {
        for (const stateKey in validator) {
            this.setState({stateKey: validator[stateKey](this.state[stateKey])})
        }
    }

    isSubmitDisabled() {
        for (const error in errors) {
            if (errors[error] !== '') return true;
        }
        return false;
    }

    async handleSubmit(e) {
        e.preventDefault();

        await sendFormData(this.state);

        this.updateState();

        alert('Thank you for Your submission!');
    }

    updateState() {
        this.setState({
            firstName: "",
            lastName: "",
            age: "",
            phone: "",
            email: "",
            birthDate: "",
            gender: "",
            comments: "",
            file: "",
            isSubscribed: false
        });
    }

    handleChange(e) {
        const target = e.target;
        const type = target.type;
        this.setState({[target.name]: type === "checkbox" ? target.checked : target.value});
        this.validate();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete= "off">
                <h1>Student Registration Form</h1>
                <Input
                    required
                    type = "text"
                    label = "First Name *"
                    name = "firstName"
                    id="first-name"
                    placeholder = "e.g. John"
                    value = {this.state.firstName}
                    onChange = {this.handleChange}
                    validator = {validator.firstName(this.state.firstName)}
                />

                <Input
                    required
                    type = "text"
                    label = "Last Name *"
                    name = "lastName"
                    id="last-name"
                    placeholder = "e.g. Jones"
                    value = {this.state.lastName}
                    onChange = {this.handleChange}
                    validator = {validator.lastName(this.state.lastName)}
                />

                <Input
                    required
                    type = "number"
                    label = "Age *"
                    name = "age"
                    id="age"
                    placeholder = "Minimum age: 18"
                    value = {this.state.age}
                    onChange = {this.handleChange}
                    validator = {validator.age(this.state.age)}
                />

                <Input
                    required
                    type = "tel"
                    label = "Phone *"
                    name = "phone"
                    id="phone"
                    placeholder = "+359-xxx-xx-xx-xx"
                    value = {this.state.phone}
                    onChange = {this.handleChange}
                    pattern="+359-[1-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
                    validator = {validator.phone(this.state.phone)}
                />

                <Input
                    required
                    type="email"
                    label="Email *"
                    name="email"
                    id="email"
                    placeholder="email@gmail.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                    validator = {validator.email(this.state.email)}
                />

                <Input
                    required
                    type = "date"
                    label = "Date of birth *"
                    name = "birthDate"
                    id="birth-date"
                    placeholder = "Date"
                    value = {this.state.birthDate}
                    onChange = {this.handleChange}
                    validator = {validator.birthDate(this.state.birthDate)}
                />

                <Radio
                    label="Gender"
                    value={this.state.gender}
                    onChange = {this.handleChange}
                />

                <Textarea
                    label="Comments"
                    name = "comments"
                    id="comments"
                    placeholder = "Comments"
                    rows={5}
                    cols={30}
                    value = {this.state.comments}
                    onChange = {this.handleChange}
                />

                <Input
                    required
                    type = "file"
                    label="Please, upload your CV *"
                    name = "file"
                    id="file"
                    placeholder = "File"
                    value = {this.state.file}
                    onChange = {this.handleChange}
                    validator = {validator.file(this.state.file)}
                />

                <Input
                    type="checkbox"
                    label="Subscribe me for emails"
                    name="isSubscribed"
                    id="subscribe"
                    value={this.state.isSubscribed}
                    onChange={this.handleChange}
                />

                {this.isSubmitDisabled() && <p className="error">Please make sure all the required fields are filled correctly.</p>}

                <div className="buttons">
                    <input type="submit" id="submit" value="Submit" disabled={this.isSubmitDisabled()}/>
                    <input type="reset" value="Reset"/>
                </div>
            </form>
        );
    }
}

export default FormParent;