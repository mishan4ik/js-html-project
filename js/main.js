// обработка формы логин

function login(el){

	var name = el.name.value;
	var pass = el.password.value;

	var error = "";

	if (name == "" || pass == "") {

		error = "Заполните все поля";

	}
	else if (name.length <= 2 || name.length >= 10) {

		error = "Неверное Имя пользователя";
	}
	else if (pass.length <= 3 || pass.length >= 15) {

		error = "Неверный пароль";		
	}
	else if (pass.split("@").length > 1 || pass.split("%").length > 1  || pass.split("&").length > 1) {

		error = "Неверный пароль";
	}	
	if (error != "") {

		document.getElementById("error").innerHTML = error;

		return false
	}
	else{
		return true;

	}

}
//обработка формы регистрации


function register(el){

	var name = el.name.value;
	var mail = el.mail.value;
	var pass = el.pass.value;
	var repass = el.repass.value;
	
	var error = "";


if (name == " " || mail == "" || pass == "" || repass == "" ) {

	error = "Заполните пустые поля";
}
else if (name.length <= 2 || name.length >= 10) {

		error = "Логин пользователя больше 2 меньше 11";
}
else if (name.split("@").length > 1 || name.split("%").length > 1  || name.split("&").length > 1) {

	error = "Логин не может содержать @, % , &";
}
else if (mail.length <= 5 || mail.length >= 30) {
		
		error = "Меил пользователя неверный";	
}
else if (mail.indexOf("@") <  1 || mail.indexOf(".") < 1 ) {

		error = "Меил пользователя неверный";

}
else if (pass != repass) {

		error = "пароли должны совпадать";

}
	if (error != "") {

		document.getElementById("errorReg").innerHTML = error;

		return false
	}
	else{

		return true;


	}
	
}
// description detailed

var description = document.getElementById("icon__description__detailed1");


description.onclick = function(){
var CarText = document.getElementById("description_Of_Car1");
var specificate = document.getElementById("specification__detailed1");

	if (CarText.style.display == "") {
		CarText.style.display = "block";

	}
	else{
		CarText.style.display = "";
	}

}
// specification detailed
var specificate_icon = document.getElementById("icon__specification");

specificate_icon.onclick = function(){
var list = document.getElementById("specification__list");

	if (list.style.display=="") {
		list.style.display="block";
	 	list.style.display="flex";
	  	list.style.alingItems="center";
	}
	else{
		list.style.display="";
	}
}
