import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-81eee.cloudfunctions.net/api'
});

export default instance;

// http://localhost:5001/clone-81eee/us-central1/api