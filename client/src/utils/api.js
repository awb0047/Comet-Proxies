import axios from 'axios';

export function getUserDetails() {
    return axios.get('http://localhost:3001/api/auth', {
        withCredentials: true } );
}

export function getUserData(proxyUser) {
    return axios.get(`http://localhost:3001/api/users/data/${proxyUser}`, {
        withCredentials: true } );
}

export function getUserPlans(proxyUser) {
    return axios.get(`http://localhost:3001/api/users/plans/${proxyUser}`, {
        withCredentials: true } );
}