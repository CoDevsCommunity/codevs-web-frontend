/**
 *@function {VerifyPass} display message error if the pass doesn't coincide
 */
let PassRept = document.getElementById('password-user-repeat')
    
function VerifyPass(){
let Password1 = document.getElementById('password-user'),
    Password2 = PassRept;
 
   if(Password1.value != Password2.value){document.getElementById('error').classList.add('displayed')} 
   else{document.getElementById('error').classList.remove('displayed')}
    return false
}

document.getElementById('Join').addEventListener('click',VerifyPass)
