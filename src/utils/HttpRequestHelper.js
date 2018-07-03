import { dbAddress } from '../config.js';
import * as firebase from 'firebase';

const buildEndpoint = (path) => dbAddress + path;

function request(path, method, params){
    const endpoint = buildEndpoint(path);

    return firebase.auth().currentUser.getIdToken(true)
        .then(async idToken => {
            const res = await fetch(endpoint, {
                method: method,
                headers: {
                    'Accept': 'html',
                    'Authorization': `Bearer ${idToken}`
                },
                ...params
            });

            console.log('Result: ' + res.status);
            return res;
        })
        .catch(error => {
            return new Promise((resolve, reject) => {
                console.log(error);
                reject();
            })
        });
}



function get(path){
    return request(path, 'GET');
}

function post(path, payload){
    return request(path, 'POST', { body: JSON.stringify(payload) });
}

export { get, post };
