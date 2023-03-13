let form = document.querySelector("#form");
form.addEventListener('submit',storedata);

function storedata(e){
	e.preventDefault();
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	
	localStorage.setItem('Name',name);
	localStorage.setItem('Surname',surname);
	localStorage.setItem('Email',email);
	localStorage.setItem('Password',password);
}