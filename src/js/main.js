document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('formDrawer').addEventListener('submit', function(event) {
    event.preventDefault();
    let maximumNumber = document.getElementById('maximumNumber').value;
    maximumNumber = parseInt(maximumNumber);

    let randomNumber = Math.random() * maximumNumber;
    randomNumber = Math.floor(randomNumber + 1);

    document.getElementById('resultValue').innerText = randomNumber;
    document.querySelector('.result').style.display = 'block';
  })
})