const form = document.querySelector('#mainForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  function checkNumber(numberA, numberB) {
    return numberB > numberA;    
  }

  const numberA = document.querySelector('#letterA').value;
  const numberB = document.querySelector('#letterB').value;  
  const successMessage = `The value of B: <b>${numberB}</b> is greater than the value of A: <b>${numberA}</b>`;
  const errorMessage = `Try again`;
  
  formValidation = checkNumber(numberA, numberB);

  if(formValidation) {
    let containerSuccessMessage = document.querySelector('#message');
    containerSuccessMessage.innerHTML = successMessage;
    containerSuccessMessage.style.display = 'block';

  } else {
    let containerErrorMessage = document.querySelector('#message');
    containerErrorMessage.innerHTML = errorMessage;
    containerErrorMessage.style.display = 'block';  

  } 
  
});
