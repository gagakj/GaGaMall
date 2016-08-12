'use strict';

let HOST= 'http://10.18.3.32:8080/';

export function requestData(url,method,body){
  return new Promise((resolve, reject) => {
    fetch(HOST + url, {
        headers: {
             'apikey': '8a9283a0567d5bea01567d5beaf90000',
             'Accept': 'application/json',
             'Content-Type': 'application/x-www-form-urlencoded',
          },
        method: method,
        body: body,
      })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
          resolve(responseData);
      })
      .catch((error) => {
          reject(error);
      });
  })
}

export function request(url, method, body) {
  var isOk;
  return new Promise((resolve, reject) => {
    fetch(HOST + url, {
        method: method,
        body: body,
      })
      .then((response) => {
        if (!response.error) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((responseData) => {
        if (isOk) {
          resolve(responseData);
        } else {
          reject(responseData);
        }
      })
      .catch((error) => {
        reject(error);
      });
  })
}
