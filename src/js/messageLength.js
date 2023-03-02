//contact form
const formInputs = document.querySelectorAll(".contact__form-input");
const formName = document.querySelector(".contact__form-name");
const formEmail = document.querySelector(".contact__form-email");
const formMessage = document.querySelector(".contact__form-message");

const errorName = document.querySelector(".contact__form-error-name");
const errorEmail = document.querySelector(".contact__form-error-email");
const errorMessage = document.querySelectorAll(".contact__form-error-message");

const currentMessageLength = document.querySelector(
	".contact__form-current-length"
);
const maxLength = 255;

//regular
const validateEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Functions
const handleMessageLength = () => {
	currentMessageLength.textContent = formMessage.value.length;
};
const handleMessage = () => {
	if (formName.value.length < 6) {
		errorName.textContent = "Wprowadź imię i nazwisko";
	} else {
		errorName.textContent = "";
	}

	if (!formEmail.value.match(validateEmail)) {
		errorEmail.textContent = "Wprowadź prawidłowy adres e-mail";
	} else {
		errorEmail.textContent = "";
	}
};


//Listener
formMessage.addEventListener("keyup", handleMessageLength);
formInputs.forEach(input => {
	input.addEventListener('keyup', handleMessage);
})