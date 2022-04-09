const {users}= require('./database.json')


function verifLogin (username,password) {
    for(var i = 0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            return true;
        }
    }
    return false;
}
module.exports = {
    verifLogin
};