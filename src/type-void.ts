// Type : Void
/*
//Tipo explicito
function showInfo(user: any): any{
    console.log('user info', user.id ,user.username);
};

showInfo({id: 1, username: 'felipe'});

//type : inferido

function showFormattedInfo(user:any){
    console.log('user Info', `
        id: ${user.id}
        username: ${user.username}
    `);
}
*/
//showFormattedInfo({id: 1, username: 'felipe'});

//Tipo void como tipo de dato en variable
let unusable: void;
//unusable = null;        //Crea error cuando el modo strict esta activado
unusable = undefined;

//TIPO : NEVER
function handleError(code: number, message: string): never{
    
    // process your code here
    // Generate a message
    throw new Error(`${message}. Code. ${code}`)
}
try{
    handleError(404,"not Found");

}catch(error){

}

function sumNumbers(limit: number): never{
    let sum=0;
    while(true){
        sum++;
    }
}
sumNumbers(10); //ciclo infiito, el programa nunca termina