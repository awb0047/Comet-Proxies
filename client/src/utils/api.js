import axios from 'axios';

export function getUserDetails() {
    return axios.get('http://45.33.101.29/api/auth', {
        withCredentials: true } );
}

export function getUserData(proxyUser) {
    return axios.get(`http://45.33.101.29/api/users/data/${proxyUser}`, {
        withCredentials: true } );
}

export function getUserPlans(proxyUser) {
    return axios.get(`http://45.33.101.29/api/users/plans/${proxyUser}`, {
        withCredentials: true } );
}

export function genProxies(proxyUser, proxyPass, sid, bandwidth) {
    var proxyList = [];
    axios.post('http://45.33.101.29/api/gen/proxies', {
        proxyUser: proxyUser,
        proxyPass: proxyPass,
        sid: sid,
        bandwidth: bandwidth
    }).then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            proxyList.push(response.data[i]);
        }
    })
    return proxyList;
}

export async function stripeCheckout(id, discordId, discordTag, username, password, email) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( { 
            id: id,
            discordId: discordId,
            discordTag: discordTag,
            username: username,
            password: password,
            email: email,
        } )
    }

    const response = await fetch('http://45.33.101.29/stripe/checkout', options)
    const result = await response.json();
    console.log(result.url);
    window.location = result.url;

    // fetch('http://localhost:3001/api/stripe/checkout', options)
    // .then(res => {
    //     if (res.ok) return res.json()
    //     return res.json().then(json = Promise.reject(json))
    // }).then(({ url }) => {
    //     console.log(url);
    // }).catch(e => {
    //     console.error(e.error)
    // })
}