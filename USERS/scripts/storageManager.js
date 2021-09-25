const KEY_USERS="users";
function saveUser(user){
    //load the old data
    let data=readUsers();
    //merge
    data.push(user);
    //save the user in the localStorage
    let val=JSON.stringify(data);
    localStorage.setItem(KEY_USERS,val);
}
function readUsers(){
    let previousUsers=localStorage.getItem(KEY_USERS);
    if(!previousUsers){ // NOT data??
        return[];
    }else{
        let list=JSON.parse(previousUsers);//parse the string back into object
        return list; //this is an object
    }
}
function clearUsers(){
    localStorage.removeItem(KEY_USERS);
}
