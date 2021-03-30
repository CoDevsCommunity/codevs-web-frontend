/**
 * @function {line 8} used to validate input fields
 * @
 */
     let joinButton = document.querySelector('#join');
    
joinButton.setAttribute('disabled','');
confirmation = [];
document.querySelectorAll('input').forEach((input,index) =>  input.addEventListener('input', () => {
    Password1 = document.getElementById('password-user').value;
    Password2 = document.getElementById('password-user-repeat').value;

    if(input.validity.valid === true && Password1 != "" && Password2 != ""){
        confirmation[index] = input.validity.valid;
    }

    if(confirmation.lenght = 6 && confirmation[index] === true && Password1 === Password2){
        if(Password1!= Password2){
            document.getElementById('error').classList.add('displayed') 
        }
        else{
            document.getElementById('error').classList.remove('displayed');
        }
        joinButton.classList.add('button');  
        joinButton.removeAttribute('disabled');
    }
    else{
        joinButton.classList.remove('button');
        joinButton.setAttribute('disabled','');
    }
}))

