"use strict";
// Union de tipos
/*
let idUser: number | string; // ya idUser puede recibir los dos tipos de datos
idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUserNamebyId(id: number | string){
    //logica de negocio, recibe id como ambos tipos
    return 'felipe';
}

getUserNamebyId(20);
getUserNamebyId('20');
*/
let idUser;
idUser = '10';
// Buscar username dado un ID
function getUserNamebyId(id) {
    //logica de negocio
    return 'felipe';
}
getUserNamebyId(20);
getUserNamebyId('20');
//let smallPicture: SquareSize = '200x200'; //da error porque no corresponde
let smallPicture = '100x100'; //deja asignarlo
let mediumPicture = '500x500';
