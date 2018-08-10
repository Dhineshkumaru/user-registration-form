var username = document.forms["vform"]["username"];
var email = document.forms["vform"]["email"];
var password = document.forms["vform"]["password"];
var password_confirmation = document.forms["vform"]["password_confirmation"];

var email_error = document.getElementById("email_error");
var name_error = document.getElementById("name_error");
var password_error = document.getElementById("password_error");

username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);


function validate() {
	if (username.value == "" ) {
		username.style.border = "1px solid red ";
		name_error.textContent = "username is required";
		username.focus();
		return false;
	}
	if (email.value == "" ) {
		email.style.border = "1px solid red ";
		email_error.textContent = "email is required";
		email.focus();
		return false;
	}
	if (password.value == "" ) {
		passworde.style.border = "1px solid red ";
		password_error.textContent = "Password is required";
		password.focus();
		return false;
	}
}
function nameVerify() {
	if (username.value != "") {
		username.style.border = "1px solid #5e6e66 ";
		name_error.innerHTML = "";
		return true;
	}
}
function emailVerify() {
	if (email.value != "") {
		email.style.border = "1px solid #5e6e66 ";
		email_error.innerHTML = "";
		return true;
	}
}
function passwordVerify() {
	if (password.value != "") {
		password.style.border = "1px solid #5e6e66 ";
		password_error.innerHTML = "";
		return true;
	}

if (password.value != password_confirmation.value) {
	password.style.border = "1px solid red";
	password_cofirmation.style.border = "1px solid red";
	password_error.innerHTML = "the two password do not match";
	return false;
}
}