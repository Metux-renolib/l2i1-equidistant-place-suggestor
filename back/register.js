const {users}= require('./database.json')
const fs = require('fs')

function register(username,password){
    const table = {
        userId : users.length+1,
        username : username,
        password : password
    }
    fs.exists('./database.json', function(exists) {
        if(exists){
            console.log('le fichier existe');
            fs.readFile('./database.json','utf-8', function readFileCallback(err, data) {
                if(err){
                    console.log('erreur');
                }else {
                    let obj = JSON.parse(data);
                    obj.users.push(table);
                    console.log(obj);
                    let json = JSON.stringify(obj);
                    console.log(json);
                    fs.writeFile('./database.json', json,function(err, result) {
                        if(err) console.log('error', err);
                    });
                }
            });
        }else{
            console.log("le fichier n'existe pas")
        }
    });

}

module.exports = {
    register
};