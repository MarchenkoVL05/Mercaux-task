const body = document.querySelector('body');
const headerWrapper = document.querySelector('.header__wrapper');

const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const close = document.querySelector('.popup__close');
const careerRequest = document.querySelector('.career__request');

const popupBtn = document.querySelector('.popup__btn');
const popupInputs = document.querySelectorAll('.popup__input');

const popupName = document.querySelector('.popup__name'); 
const popupEmail = document.querySelector('.popup__email');
const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let popupCounter = 0;

let emailValidate = false;
let nameValidate = false;

function checkScrollbar() {
    if (getComputedStyle(body).height > '100vh') {
        headerWrapper.style.marginRight = '10px';
    }
    if (window.screen.width < 400) {
        headerWrapper.style.marginRight = '0px';
    }
}

checkScrollbar();

//validate Email
popupEmail.addEventListener('input', () => {
    if (!validateEmail(popupEmail.value)) {
        popupEmail.style.borderColor = 'red';
        popupBtn.setAttribute('disabled', 'true');
    } else {
        popupEmail.style.borderColor = '';
        emailValidate = true;
    }

    function validateEmail(value) {
        return EMAIL_REGEXP.test(value);
      }

    validateInputs();
});

//validate Name
popupName.addEventListener('input', () => {
    if (popupName.value.length  <= 3) {
        popupName.style.borderColor = 'red';
        popupBtn.setAttribute('disabled', 'true');
    } else {
        nameValidate = true;
        popupName.style.borderColor = '';
    }

    validateInputs();
});

//check Email and Name inputs
function validateInputs() {
    if (emailValidate && nameValidate) {
        popupBtn.removeAttribute('disabled');
    }
}

//close Popup
close.addEventListener('click', () => {
    console.log(popupEmail.value);
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

//open Popup
careerRequest.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    if (popupEmail.value == '') {
        popupBtn.setAttribute('disabled', 'true');
    }

    if (popupCounter > 0) {
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 1500);
    }
});

//Submit
popupBtn.addEventListener('click', () => {

        popupInputs.forEach((popupInput) => {
            popupInput.style.display = 'none';
        });
        popupBtn.style.display = 'none';
    
        popup.innerHTML = 'Success!';
        popup.style.backgroundColor = '#ffff';
        popup.style.textAlign = 'center';
        popup.style.fontSize = '30px';
        popup.style.fontWeight = '400';
    
        setTimeout(() => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }, 1500);

        popupCounter++;
});














