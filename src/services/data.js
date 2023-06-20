import * as api from './api';

api.settings.host = 'https://jsonplaceholder.typicode.com';

export async function sendFormData(formData) {
    return await api.post(api.settings.host + '/posts', formData);
}