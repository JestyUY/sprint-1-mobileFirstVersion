let nombreTarjeta = document.getElementById('cardholdername');
let nombreDisplay = document.getElementById('nombreDisplay');


nombreTarjeta.addEventListener("input", () =>{
  const inputValue = nombreTarjeta.value;
  nombreDisplay.innerText = inputValue
})




let cardNumberInp = document.getElementById('cardnumber')
let cardNumberDisp = document.getElementById('cardNumberDisp')

cardNumberInp.addEventListener("input", () => {
  const inpValue = cardNumberInp.value;
  cardNumberDisp.innerText = inpValue;
})