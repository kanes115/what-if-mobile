import { address } from '../config.js';
import * as firebase from 'firebase';

function get(path){
    const endpoint = buildEndpoint(address, path);
    return firebase.auth().currentUser.getIdToken(true)
            .then(async idToken => {
                var res = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        Accept: 'html',
                        'Authorization': 'Bearer ${idToken}'
                    }
                });
                console.log("Result: " + res.status);
                return res;
            })
            .catch(error => {
                return new Promise((resolve, reject) => {
                    console.log(error);
                    reject();
                })
            });
}

function buildEndpoint(address, path){ 
    return  address + path;
}

export { get };
