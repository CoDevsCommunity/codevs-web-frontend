    let ButtonClear = document.querySelector('#Clear'),
    ButtonClear.addEventListener('click',clear)

    let Inputs = document.querySelectorAll('input'),
    inputEmail = document.querySelector('#email-user');  

function clear(e) {	
	e.preventDefault();
    for (let i = 0; i < Inputs.length; i++) {
        const count = Inputs[i]; 
        count.value = '';	
    }
	inputEmail.focus({preventScroll:true})
}

