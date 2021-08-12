import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID iTDYd2k8f7dJIrb6YidrHyFHAizFTbgotzDkmK4G1x0'
    }
});