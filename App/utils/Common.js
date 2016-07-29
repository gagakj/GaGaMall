'use strict';

//http://gank.io/api/data/Android/10/2
//http://gank.io/api/day/2015/08/07
let HOST = 'http://gank.io/api/';

let HOST_LCODE='http://mta.zttit.com:8080/LCodeServer/';

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

export function request_lcode(url, method, body) {
  var isOk;
  return new Promise((resolve, reject) => {
    fetch(HOST_LCODE + url, {
        method: method,
        head:{
             'Accept': 'application/json',
             'Content-Type': 'application/json',
        },
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