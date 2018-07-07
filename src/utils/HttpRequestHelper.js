import * as firebase from 'firebase';
// eslint-disable-next-line
import { DB_ADDRESS } from 'react-native-dotenv';
const buildEndpoint = path => DB_ADDRESS + path;

function request(path, method, params) {
  const endpoint = buildEndpoint(path);

  return firebase.auth().currentUser.getIdToken(true)
    .then(idToken => fetch(endpoint, {
      method,
      headers: {
        Accept: 'html',
        Authorization: `Bearer ${idToken}`,
      },
      ...params,
    }))
    .catch(() => Promise.reject());
}


function get(path) {
  return request(path, 'GET');
}

function post(path, payload) {
  return request(path, 'POST', { body: JSON.stringify(payload) });
}

export { get, post };
