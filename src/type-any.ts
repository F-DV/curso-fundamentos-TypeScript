//Any explicito

let iduser: any;
iduser = 1;
iduser = '1';

console.log("idUser:",iduser);

//Tipo any inferido
let otherId;
otherId = 1;
otherId = '1';

console.log('otherId',otherId);

let surprise: any = 'hello typescript';

const res = surprise.substring(6);
console.log('res:' , res);

