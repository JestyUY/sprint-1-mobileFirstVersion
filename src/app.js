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

let cvcInp = document.getElementById('cvc-input') 
let cvc = document.getElementById('cvc')

cvcInp.addEventListener('input', ()=>  {
  const cvcTemp = cvcInp.value;
  cvc.innerText = cvcTemp
})

let expDate = document.getElementById('expDate')
let monthInp = document.getElementById('month-input')
let yearInp = document.getElementById('year-input')

monthInp.addEventListener('input',()=>{
const expDateFinal = monthInp.value + "/" + yearInp.value
expDate.innerText = expDateFinal
})
yearInp.addEventListener('input',()=>{
const expDateFinal = monthInp.value + "/" + yearInp.value
expDate.innerText = expDateFinal
})


