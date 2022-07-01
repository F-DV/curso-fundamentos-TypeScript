//TIPO :NUMBER

//Explicito
let phone : number;
phone = 1;

// phone = 'hola'; //error

//Inferido
let phoneNumber = 37397821;

// phoneNumber = true; //error por tipo

let hex : number = 0x54bb; //ejemplo hexadecimal
let binary: number = 0b1110001010;//ejemplo binario
let octal: number = 0o744; //Ejemplo tipo octal

// TIPO : BOOLEAN

// tipado explicito
let isPro: boolean;
isPro = true;

//tipado inferido
let isUserPro = false;

//TIPO : STRING

let username: string = 'felipe';
let userlastname = "quiceno";

//Template String
// Uso de Back-tick `

let userInfo : string;
userInfo = `
    user Info: 
    username: ${username}
    userlastname: ${userlastname}
    phone: ${phone}
    isPro: ${isPro}
`;






