/**
 * this function clean the inputs fields if the user press "clean" button
 * @param {foo var} e - Used to prevent the default action
 */
    let ButtonClear = document.querySelector('#Clear'); 
    ButtonClear.addEventListener('click',clear)

    let Inputs = document.querySelectorAll('.LoginFields'),
    inputEmail = document.querySelector('#email-user');  

function clear(e) {	
	e.preventDefault();
    for (let i = 0; i < Inputs.length; i++) {
        const count = Inputs[i]; 
        count.value = '';	
    }
	inputEmail.focus({preventScroll:true})
}

