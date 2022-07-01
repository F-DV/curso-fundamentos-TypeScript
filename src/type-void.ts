// Type : Void

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
    `)
}