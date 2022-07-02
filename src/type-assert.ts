export{};
// <Tipo>
let username: any;
username = 'Fel';

//Tenemos una cadena, Ts condia en mi!
let message: string = (<string>username).length > 5 ? 
    `Welcome ${username}`:
    'username is too short';

console.log('message', message);

let usernameWithId: any = 'Felipe 1';

//Como obtener solo el username
username = (<string>usernameWithId).substring(0,6);
console.log('Usernmae only', username);

// Sintaxis "as"
message: (username as string).length > 5 ? 
    `Welcome ${username}`:
    'username is too short';

console.log('message with as', message);

let helloUser: any; //any es un tipo mas general
helloUser = 'hello paparazzi';
username = (helloUser as string).substring(6);
console.log('username: ', username);