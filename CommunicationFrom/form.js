function doFirst(){
	const button=document.getElementById("button")
	button.addEventListener("click",saveInfo,false)

}
function saveInfo(){
	let username=document.getElementsByName("username").value;
	let age=document.getElementsByName("age").value;
	let information=document.getElementsByName("information").value;
	let contact=document.getElementsByName("contact").value;
	sessionStorage.setItem(username,age,information,contact);

	print(username);

}


window.addEventListener("load",doFirst,false);
