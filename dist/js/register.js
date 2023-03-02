const registerForm = document.querySelector('.register__form');
const correctBox = document.querySelector('.register__correct-box'); //komunikat o poprawności danych po ich zatwierdzeniu
//inputy
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");

const inputs = document.querySelectorAll('input'); //wszystkie inputy potrzebne do listenera

const button = document.querySelector('.register__form-btn');
//komunikaty
const messageName = document.querySelector(".register__form-message-name");
const messageSurname = document.querySelector('.register__form-message-surname');
const messageEmail = document.querySelector('.register__form-message-email');
const messagePassword = document.querySelector('.register__form-message-item-password');
const messageRepeatPassword = document.querySelector('.register__form-message-repeat-password');
const messagePasswordUppercase = document.querySelector('.register__form-message-password-uppercase');
const messagePasswordLowercase = document.querySelector('.register__form-message-password-lowercase');
const messagePasswordOneDigit = document.querySelector('.register__form-message-password-one-digit');
const messagePasswordSpecialSymbol = document.querySelector('.register__form-message-password-special-symbol');
const messagePasswordLength = document.querySelector('.register__form-message-password-length');
const messagePasswordWhiteSpace = document.querySelector('.register__form-message-password-white-space');
const lastMessage = document.querySelector('.register__form-last-message');

//wyrażenia regularne
const whiteSpace = /^(?=.*\s)/;
const upperCase = /^(?=.*[A-Z]).*$/;
const lowerCase = /^(?=.*[a-z])/;
const oneDigit = /^(?=.*[0-9])/;
const specialSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
const passLength = /^.{10,16}$/;
const validateEmail =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Funkcja, która sprawdza poprawność wszystkich danych. Jeśli sa prawidlowe zostanie wyświetlony komunikat o poprawności dnaych.
const registerAccount = () => {
    if(name.value.length > 3 && surname.value.length > 4 && email.value.match(validateEmail) && password.value.match(passLength) && password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && !password.value.match(whiteSpace) && repeatPassword.value == password.value && password.value.match(passLength) && password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && !password.value.match(whiteSpace)){
        registerForm.classList.add('register__hide');
        correctBox.classList.add('register__show');
    }else{
        lastMessage.style.display = 'inline';
    }
}
//Funkcja wyświetlająca komunikaty podczas rejestracji
const registerAccountMessage = () => {
	messageName.classList.toggle('register__show-message', name.value.length < 3);
    messageSurname.classList.toggle('register__show-message', surname.value.length < 4);
    messageEmail.classList.toggle('register__show-message', !email.value.match(validateEmail));
    messagePasswordUppercase.classList.toggle('register__show-message', !password.value.match(upperCase));
    messagePasswordLowercase.classList.toggle('register__show-message', !password.value.match(lowerCase));
    messagePasswordOneDigit.classList.toggle('register__show-message', !password.value.match(oneDigit));
    messagePasswordSpecialSymbol.classList.toggle('register__show-message', !password.value.match(specialSymbol));
    messagePasswordLength.classList.toggle('register__show-message', !password.value.match(passLength));
    messagePasswordWhiteSpace.classList.toggle('register__show-message', password.value.match(whiteSpace));
    messageRepeatPassword.classList.toggle('register__show-message', password.value != repeatPassword.value);
};

//Funcja nadająca kolor i cień na inputy w zależności od poprawności danych (zielony bądź czerwony)
const registerAccountShadowInputs = () => {
    if( name.value.length < 3){
        name.classList.add('register__wrong-shadow');
        name.classList.remove('register__correct-shadow');
    }else{
        name.classList.add('register__correct-shadow');
        name.classList.remove('register__wrong-shadow');
    }

    if(surname.value.length < 4){
        surname.classList.add('register__wrong-shadow');
        surname.classList.remove('register__correct-shadow');
    }else{
        surname.classList.add('register__correct-shadow');
        surname.classList.remove('register__wrong-shadow');
    }
    
    if(!email.value.match(validateEmail)){
        email.classList.add('register__wrong-shadow');
        email.classList.remove('register__correct-shadow');
    }else{
        email.classList.add('register__correct-shadow');
        email.classList.remove('register__wrong-shadow');
    }

    if(password.value.match(passLength) && password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && !password.value.match(whiteSpace)){
        password.classList.add('register__correct-shadow');
        password.classList.remove('register__wrong-shadow');
    }else{
        password.classList.add('register__wrong-shadow'); 
        password.classList.remove('register__correct-shadow')
    }

    if(repeatPassword.value == password.value && password.value.match(passLength) && password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && !password.value.match(whiteSpace)){
        repeatPassword.classList.add('register__correct-shadow');
        repeatPassword.classList.remove('register__wrong-shadow');
    }else{
        repeatPassword.classList.add('register__wrong-shadow');
        repeatPassword.classList.remove('register__correct-shadow');
    }

   // repeatPassword.classList.toggle('register__correct-shadow', password.value === repeatPassword.value && password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && password.value.match(passLength) && !password.value.match(whiteSpace));
}

// const registerAccountShadow = () => {
//     name.classList.toggle('register__correct-shadow', name.value.length >= 3);
//     surname.classList.toggle('register__correct-shadow', surname.value.length >= 4);
//     email.classList.toggle('register__correct-shadow', email.value.match(validateEmail));
//     password.classList.toggle('register__correct-shadow', password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && password.value.match(passLength) && !password.value.match(whiteSpace));
//     repeatPassword.classList.toggle('register__correct-shadow', password.value === repeatPassword.value && password.value.match(upperCase) && password.value.match(lowerCase) && password.value.match(oneDigit) && password.value.match(specialSymbol) && password.value.match(passLength) && !password.value.match(whiteSpace));
// }

//Nasłuchiwanie na wszystkie inputy formularza
inputs.forEach(input => {
    input.addEventListener('keyup', registerAccountMessage);
})

inputs.forEach(input => {
    input.addEventListener('keyup', registerAccountShadowInputs);
})

button.addEventListener('click', registerAccount);