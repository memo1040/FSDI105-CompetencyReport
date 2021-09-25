function displayUsers(users){
    for(var i=0;i<users.length;i++){
        //get each user
        let user = users[i];
        //display the user
        let syntax = `
        <tr>
            <td>${user.email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.address}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.payment}</td>
            <td style="background-color:${user.color};width:50px;"></td>s
        </tr>
        `;
        //append the user to the DOM
        $("#tableUsers").append(syntax);
    }
}

function init(){
    console.log("Listing users");
    var users = readUsers();//this fn is on the storeManager
    displayUsers(users);
    $("#btnClear").click(function(){
        clearUsers();
        location.reload();
    });
}
window.onload = init;