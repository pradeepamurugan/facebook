let form = document.querySelector("form");
let name = document.getElementById("name");
let post = document.getElementById("post");
form.addEventListener("submit",function(e){
	e.preventDefault();
	readpost();
});
let data = {};
function readpost(){
	data['text']=name.value;
	createpost();
}
function createpost(){
	let date=new Date();
	post.innerHTML =`<div class="rightin">
	<div class="col-lg-3">
	<img src="image/birdart.png"></div>
	<p class="col-lg-6">${data.text}</p>
	<span class="6">
		<iconify-icon onclick="like(this)" class="like" icon="subway:like"></iconify-icon>
		<iconify-icon onclick="edit(this)" icon="material-symbols:edit-square-outline-rounded"></iconify-icon>
		<iconify-icon onclick="dlt(this)" icon="mdi:delete"></iconify-icon>
	</span>
	<span>${date.toLocaleDateString()}</span>
	<span>${date.toLocaleTimeString()}</span>
	</div>`
	name.value = " ";
}
function edit(e){
	name.value=e.parentElement.previousElementSibling.innerHTML;
	e.parentElement.parentElement.remove();
	e.parentElement.parentElement.previousElementSibling.remove();
}
function dlt(e){
	e.parentElement.parentElement.remove();
}
function like(e){
	let like =document.querySelector(".like");
	like.style.color="#3e6dd0s";
}