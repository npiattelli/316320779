let users = [{'email': 'netanel@gmail.com', 'phone': '0586310463', 'user_name': 'nati', 'first_name': 'netanel', 'last_name': 'piattelli', 'password': '123456Np'}];

/// check that the password and email are valid  sign in function////
function check_sign_in() {
    let id = 'signinemail';
    let emailNote = 'email-error';
    let pass_id = 'signinpassword';
    let passNote = 'pass-error';
    let check_email = checkValidMail(id,emailNote);
    let check_pass = checkValidPass(pass_id,passNote);
    if (check_email & check_pass) {
        checkExistUser();
    }

}


function checkValidMail(mail,note){
    const inpObj = document.getElementById(mail);
    if (!inpObj.checkValidity()) {
        document.getElementById(note).innerHTML = inpObj.validationMessage;
        return false;
    }
    return true;
}

function checkValidPass(pass,note){
    const inpObj = document.getElementById(pass);
    if (!inpObj.checkValidity()) {
        document.getElementById(note).innerHTML = inpObj.validationMessage;
        return false;
    }
    return true;
}
// not clear if you want us to use this section .. but this should check if there is already a user in DB
function checkExistUser() {
    let res = false;
    let email = document.getElementById('signinemail').value;
    let pass = document.getElementById('signinpassword').value;
    for (let i=0; i<users.length; i++) {
        let user_dict = users[i];
        if (user_dict.email == email & user_dict.password == pass) {
            res = true;
        }
        else if (user_dict.email == email & user_dict.password != pass) {
            document.getElementById("pass-error").innerHTML = 'Wrong password, try again';
        }
        else {
            document.getElementById("email-error").innerHTML = 'User doesnt exist, try again';
        }
    }
    return res;
}
