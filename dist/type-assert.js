"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <Tipo>
let username;
username = 'Fel';
//Tenemos una cadena, Ts condia en mi!
let message = username.length > 5 ?
    `Welcome ${username}` :
    'username is too short';
console.log('message', message);
let usernameWithId = 'Felipe 1';
//Como obtener solo el username
username = usernameWithId.substring(0, 6);
console.log('Usernmae only', username);
// Sintaxis "as"
message: username.length > 5 ?
    `Welcome ${username}` :
    'username is too short';
console.log('message with as', message);
let helloUser; //any es un tipo mas general
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log('username: ', username);
