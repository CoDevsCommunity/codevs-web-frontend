/**
 * @function {line 9} validate the input fields when triggers 
 */
let joinButton = document.querySelector('#join');
    confirmation = [];

joinButton.setAttribute('disabled','');

document.querySelectorAll('input').forEach((input,index) =>   
   
    input.addEventListener('input', () => {

    if(input.validity.valid === true){
        confirmation[index] = true;
    }
    else{
        confirmation[index] = false;
    }

    if(confirmation.lenght = 6 && confirmation[index] === true){
        joinButton.classList.add('button');  
        joinButton.removeAttribute('disabled');
    }
    else{
        joinButton.classList.remove('button');
        joinButton.setAttribute('disabled','');
    }
}));

document.querySelectorAll('input[type=password]').forEach((input,index) => input.addEventListener('input', () => {
    Password1 = document.getElementById('password-user').value;
    Password2 = document.getElementById('password-user-repeat').value;

    if(Password1!= Password2){
        document.getElementById('error').classList.add('displayed');
    }
    else{
        document.getElementById('error').classList.remove('displayed');
    }
}))
