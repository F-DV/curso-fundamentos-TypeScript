"use strict";
//TIPO :NUMBER
//Explicito
let phone;
phone = 1;
// phone = 'hola'; //error
//Inferido
let phoneNumber = 37397821;
// phoneNumber = true; //error por tipo
let hex = 0x54bb; //ejemplo hexadecimal
let binary = 0b1110001010; //ejemplo binario
let octal = 0o744; //Ejemplo tipo octal
// TIPO : BOOLEAN
// tipado explicito
let isPro;
isPro = true;
//tipado inferido
let isUserPro = false;
//TIPO : STRING
let username = 'felipe';
let userlastname = "quiceno";
//Template String
// Uso de Back-tick `
let userInfo;
userInfo = `
    user Info: 
    username: ${username}
    userlastname: ${userlastname}
    phone: ${phone}
    isPro: ${isPro}
`;
