export {};
// Crear una Fotografia
/*function createPicture(title, date, size){
    //Funcion en JS
}
*/
type SquareSize = '100x100' | '500x500' | '1000x1000';
// Usamos TS,  definimos tipos para parametros
/*
function createPicture(title:string, date:string,  size: SquareSize){
    //se crea fotografia por ejemplo
    console.log('create Picture using', title, date, size);
}
*/
createPicture('My Birthday', '2022-03-10','100x100');

//Genera error ya que esta esperando el tercer parametro
//Esto se soluciona con parametros opcionales
//createPicture('colombia trip', '2022-03-10');

// Parametros Opcionales
function createPicture(title?:string, date?:string,  size?: SquareSize){
    //se crea fotografia por ejemplo
    console.log('create Picture using', title, date, size);
};
createPicture('colombia trip', '2022-03-10');
createPicture();

// Flat Array Function
let createPic = (title:string, date:string, size: SquareSize): object =>{
    /*return {
        title: title,
        date: date,
        size: size,
    };*/

    //tambien se puede
    return {title, date, size};
};

const picture = createPic('Platzi session', '2020-03-10','100x100');
console.log('picture: ', picture);

//Tipo de retorno con Typescript
function handleError(code:number, message: string): never | string {
    //Procesamiento de ejemplo del codigo o el mensaje
    if(message === 'error'){
        throw new Error(`${message}. Code error: ${code}`);
    }else{
        return 'An error has ocurred';
    }
}

try{
    let result = handleError(200,'OK');
    console.log('result: ', result);
    result = handleError(404,'error');
    console.log('result: ', result);
}catch (error)