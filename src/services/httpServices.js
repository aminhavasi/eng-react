import axios from 'axios';
import { notify } from './../utils/toast/toast';
axios.interceptors.response.use(null, (error) => {
    const exceptedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!exceptedError) {
        notify('error', 'Internet Error');
    }
    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
};
