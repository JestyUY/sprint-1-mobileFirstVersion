function verificarInput(cardholdername) {
    var input = document.getElementById(cardholdername);
    if (input.value === '') {
      input.classList.add('border-[1px]');
    } else {
      input.classList.remove('border-indigo-700');
    }
  }