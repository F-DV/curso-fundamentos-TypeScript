"use strict";
// Type: OBJECT
let user;
user = {};
user = {
    id: 1,
    firstName: 'felipe',
    isPro: true,
};
console.log('user', user);
// Object vs object (Clase JS vs tipo TS)
const myObj = {
    id: 1,
    firstName: 'felipe',
    isPro: true,
};
const isInstance = myObj instanceof Object; //clase object JavaScript
console.log(isInstance);
