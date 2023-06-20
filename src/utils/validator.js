export const errors = {
    firstName: '',
    lastName: '',
    age: '',
    phone: '',
    email: '',
    file: '',
    birthDate: ''
}

const nameValidator = (fieldName, fieldValue) => {
    if (typeof fieldValue !== "string") {
        return errors.firstName = 'Please enter a valid name!';
    }
    if(fieldValue.trim() === '') {
        return errors.firstName = `${fieldName} is required.`;
    }
    if (fieldValue.length < 2) {
        return errors.firstName = 'Name must be at least 2 chars'
    }
    return errors.firstName = '';
}

const ageValidator = (age) => {
    if (age.trim() === '') {
        return errors.age = 'Age is required';
    }
    if (age < 18) {
        return errors.age = 'Minimum age: 18';
    }
    return errors.age = '';
}

const phoneValidator = (phone) => {
    const regex = /[+]359-[1-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}/;
    if (phone.trim() === '') {
        return errors.phone = 'Phone is required.'
    }
    if (!regex.test(phone)) {
        return errors.phone = `Please enter a valid format phone number`;
    }
    return errors.phone = '';
}

const emailValidator = (emial) => {
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emial.trim() === '') {
        return errors.email = 'Email is required';
    }
    if (!regex.test(emial)) {
        return errors.email = 'Please enter a valid email.';
    }
    if (typeof emial !== "string") {
        return errors.email = 'Please enter a valid email.';
    }

    return errors.email = '';
}

const fileValidator = (file) => {
    const fileString = file.split('.')[file.split('.').length-1];
    if (fileString !== 'pdf') {
        return errors.file = 'Please upload a pdf.'
    }
    return errors.file = '';
}

const birthDateValidator = (birthDate) => {
    if (birthDate.trim() === '') {
        return errors.birthDate = 'Birth date is required.'
    }
    return errors.birthDate = '';
}

export const validator = {
    firstName: (name) => nameValidator('First Name', name),
    lastName: (name) => nameValidator('Last Name', name),
    age: ageValidator,
    phone: phoneValidator,
    email: emailValidator,
    file: fileValidator,
    birthDate: birthDateValidator
}