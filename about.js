console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited successfully');
}
function compliment(evt) {
	alert('Meow thanks for petting me so kindly meow!')
}

let form = document.querySelector('#contact');
let cat = document.querySelector('#kitty')

form.addEventListener('submit', handleSubmit);
cat.addEventListener('mouseover', compliment)