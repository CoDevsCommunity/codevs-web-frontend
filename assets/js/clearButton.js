/**
 * this function clean the inputs fields if the user press "clean" button
 * @param {foo var} e - Used to prevent the default action
 */
    let ButtonClear = document.querySelector('#clear'); 

    let form = document.getElementsByName('userForm')[0];

function clear(e) {	
	 e.preventDefault();
     form.reset();
	 document.querySelector('#email-user').focus({preventScroll:true});
}
    ButtonClear.addEventListener('click',clear);
