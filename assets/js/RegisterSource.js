/**
 * @function {line 9} used to validate input fields
 */
     let joinButton = document.querySelector('#join');
    
joinButton.setAttribute('disabled','');

confirmation = [false,false,false,false,false,false];

document.querySelectorAll('input').forEach((input,index) =>  input.addEventListener('input', () => {
    Password1 = document.getElementById('password-user').value;
    Password2 = document.getElementById('password-user-repeat').value;

    if(input.validity.valid === true && Password1 != "" && Password2 != ""){
        confirmation[index] = input.validity.valid;
    }

    if(confirmation.lenght = 6 && confirmation[index] === true && Password1 === Password2){
        joinButton.classList.add('button');  
        joinButton.removeAttribute('disabled');
    }
    else{
        joinButton.classList.remove('button');
        joinButton.setAttribute('disabled','');
    }

    if(Password1!= Password2){
            document.getElementById('error').classList.add('displayed') 
    }
    else{
            document.getElementById('error').classList.remove('displayed');
    }
}))

//let urlAction = document.getElementsByName('userForm')[0].method.toString();
//
//class tokenData {
//constructor(token){
//     this.token = token
//    }
//
//    display(){
//        console.log(this.token)
//    }
//}
//
//fetch(urlAction)
//    .then(response => response.json())
//    .then(data => {
//        let userToken = new tokenData(data.token); 
//        let userTokenParse = userToken.token.toString();
//        localStorage.setItem('token', userTokenParse);
//    })
//    .catch(err => console.log(err))

