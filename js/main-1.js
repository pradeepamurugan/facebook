let forml = document.querySelector("#forml");
forml.addEventListener('submit',resdata);

function resdata(e){
	e.preventDefault();
	let emaill = document.getElementById("emaill").value;
	let passwordl = document.getElementById("passwordl").value;
	
	let email_1 = localStorage.getItem('Email');
	let password_1 = localStorage.getItem('Password');
	
	if(emaill == email_1 && passwordl == password_1){
		alert("success");
	}
	else{
		alert("incorrect");
	}
}