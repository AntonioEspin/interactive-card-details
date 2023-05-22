const cvcNumber = document.querySelector('#cvc-number');
const numberOfCard = document.querySelector('#number-of-card');
const personName = document.querySelector('#person-name');
const numberExpDate = document.querySelector('#number-exp-date');
const formSend = document.querySelector('.form-send')

// Inputs del formulario
const holderName = document.querySelector('#holder-name');
const cardNumber = document.querySelector('#card-number');
const expMonth = document.querySelector('#exp-month');
const expYear = document.querySelector('#exp-year');
const cvcInputCode = document.querySelector('#cvc-input-code');
const formSubmit = document.querySelector('#my-form');

formSubmit.addEventListener('submit', (e)=>{
  e.preventDefault()
  const holderNameValue = holderName.value;
  const cardNumberValue = cardNumber.value;
  const expMonthValue = parseInt(expMonth.value);
  const expYearValue = parseInt(expYear.value);
  const cvcInputCodeValue = cvcInputCode.value;

  // Validar los campos

  if (holderNameValue === '' || cardNumberValue === '' || isNaN(expMonthValue) || isNaN(expYearValue) || cvcInputCodeValue === '') {
    // Cancelar el envío del formulario
    // Mostrar mensaje de advertencia
    alert('Por favor, llene la información requerida');
    return;
  }

  if (cardNumberValue.length !== 16 || isNaN(cardNumberValue)) {
    alert('El número de tarjeta debe ser un número de 16 dígitos.');
    return; // Detener el envío del formulario
  }

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Los meses en JavaScript van de 0 a 11

  if (expYearValue < currentYear || (expYearValue === currentYear && expMonthValue < currentMonth)) {
    alert('La fecha de expiración no es válida.');
    return; // Detener el envío del formulario
  }

  // Cambia el formato del numero de la tarjeta a 4 digitos por espacio
  const cardNumberFormatted = cardNumberValue.replace(/(.{4})/g, '$1 ');

  personName.textContent = holderNameValue
  cvcNumber.textContent = cvcInputCodeValue
  numberOfCard.textContent = cardNumberFormatted
  numberExpDate.textContent = `${expMonthValue.toString().padStart(2, '0')}/${expYearValue.toString().slice(-2)}`

  formSubmit.style.display = 'none';
  formSend.style.display = 'flex';
})