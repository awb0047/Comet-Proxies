import axios from 'axios';

export function getUserDetails() {
    return axios.get('http://localhost:3001/api/auth', {
        withCredentials: true } );
}

export function getUserData() {
    return axios.get('http://localhost:3001/api/users/data/splooti', {
        withCredentials: true } );
}