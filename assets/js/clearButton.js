/**
 * this function clean the inputs fields if the user press "clean" button
 * @param {var} e - Used to prevent the default action
 */
    buttonClear = document.querySelector('#clear'); 

    form = document.getElementsByName('userForm')[0];

function clear(e) {	
	 e.preventDefault();
     form.reset();
	 document.querySelector('#email-user').focus({preventScroll:true});
}
    buttonClear.addEventListener('click',clear);
