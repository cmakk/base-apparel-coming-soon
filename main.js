const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const iconError = document.getElementById("icon-error");
const borderError = document.getElementById("email");
const successText = document.getElementById("submit-success");

/*-- 
email.addEventListener('input', function() {
	if (email.validity.valid) {
		emailError.textContent = "";
		iconError.style.display = "none";
		borderError.style.border = "1px solid hsl(0, 6%, 24%)";
		successText.textContent = "Looks good! Click the arrow to stay in touch!";
	} else {
		successText.textContent = "";
		emailError.textContent = "Please provide a valid email";
	}
})
--*/

function validateForm() {
	if (email.validity.valid) {
		emailError.textContent = "";
		iconError.style.display = "none";
		borderError.style.border = "1px solid hsl(0, 6%, 24%)";
		alert("Thank you! We'll keep in touch!");
		return true;
	} else {
		emailError.textContent = "Please provide a valid email";
		iconError.style.display = "inline";
		borderError.style.border = "2px solid red";
		return false;
	}
}