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

// Alias de tipos
type IdUser = number | string;
type username = string;
let idUser: number | string; 
idUser = '10';

// Buscar username dado un ID
function getUserNamebyId(id: IdUser): username{
    //logica de negocio

    return 'felipe';
}

getUserNamebyId(20);
getUserNamebyId('20');

//Tipos Literales
// Reglas para una foto por ejemplo
// 100x100 500x500 1000x1000
type SquareSize = '100x100' |'500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200'; //da error porque no corresponde
let smallPicture: SquareSize = '100x100'; //deja asignarlo
let mediumPicture: SquareSize = '500x500';
