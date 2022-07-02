// Corchetes []

//tipo explicito
let users: string[]; //indicando el tipo explicitamente
users = ['felipe','programador junior','java'];
//users = [1, true, 'test']; //Genera error porque ya indicamos tipo

//Tipo inferido
let otherusers = ['java','javascript','typescript'];
//otherusers = [1, true, 'test']; //Genera error porque infirio el tipo

let pictureTitles: Array<string>;
pictureTitles = ['Favorite Sunset', 'Vacations Time', 'Landscape'];

//Accediendo valores en un Array
console.log('first user:',users[0]);

// Propiedades en Array
console.log('users.length : ',users.length);
users.push('Platziuser');
users.sort();
console.log('users:', users);

//TUPLAS
let userTuple: [number,string];
userTuple = [1, 'felipe'];

console.log('userTuple:', userTuple);
console.log('id:', userTuple[0]);
console.log('userName:', userTuple[1]);

//Tuplas con varios valores
let userInfo1: [number,string,boolean];
userInfo1=[2,'felipe',true];
console.log(userInfo1);

//Arreglo de Tuplas
let array:[number,string][] = [];
array.push([1,'felipe']); //posicion  0
array.push([2,'Andres']); //posicion 1
array.push([3,'Carlos']); //posicion 2
console.log('Array: ',array);

//Uso de funciones Array : cambiando nombre
array[2][1] = array[2][1].concat(' Quintero');
console.log('Concatenado',array);