
// --- Nombre --
let nombreTarjeta = document.getElementById('cardholdername');
let nombreDisplay = document.getElementById('nombreDisplay');
const warningName = document.getElementById('warningName')

nombreTarjeta.addEventListener("input", () =>{
  const inputValue = nombreTarjeta.value;
  nombreDisplay.innerText = inputValue
})

nombreTarjeta.addEventListener('blur', ()=> {
  if (/[0-9]/.test(nombreTarjeta.value) ) {
    warningName.innerText = "please enter text only"
    nombreTarjeta.style.border = "2px red solid"
  } else {warningName.innerText = ""}})
//--- Numero card --

let cardNumberInp = document.getElementById('cardnumber')
let cardNumberDisp = document.getElementById('cardNumberDisp')
let warningNumber = document.getElementById('warningNumber')

cardNumberInp.addEventListener("input", () => {
  const inpValue = cardNumberInp.value;
  cardNumberDisp.innerText = inpValue;
})
cardNumberInp.addEventListener('blur', ()=> {
  if (/[A-Za-z]/.test(cardNumberInp.value) ) {
   warningNumber.innerText = "please enter numbers only"
   cardNumberInp.style.border = "2px red solid"
  }
   else if (cardNumberInp.value.length !== 16) {
    warningNumber.innerText = "enter 16 characters"
    cardNumberInp.style.border = "2px red solid"
  }
  else {warningNumber.innerText = '';
        
        }
})



//--- CVC --
let cvcInp = document.getElementById('cvc-input') 
let cvc = document.getElementById('cvc')
const warningCVC = document.getElementById('warningCVC')
cvcInp.addEventListener('input', ()=>  {
  const cvcTemp = cvcInp.value;
  cvc.innerText = cvcTemp
})


cvcInp.addEventListener("blur", () => {

  if (/[A-Za-z]/.test(cvcInp.value) ) {
    warningCVC.innerText = "please enter numbers only"
    cvcInp.style.border = "2px red solid"
   }
    else if (cvcInp.value.length !== 3) {
     warningCVC.innerText = "enter 3 characters"
     cvcInp.style.border = "2px red solid"
   }
   else {warningCVC.innerText = ''}
})


//--- Fechas --
let expDate = document.getElementById('expDate')
let monthInp = document.getElementById('month-input')
let yearInp = document.getElementById('year-input')
const warningMonth = document.getElementById('warningMonth')
const warningYear = document.getElementById('warningYear')


monthInp.addEventListener('input',()=>{
const expDateFinal = monthInp.value + "/" + yearInp.value
expDate.innerText = expDateFinal
})
yearInp.addEventListener('input',()=>{
const expDateFinal = monthInp.value + "/" + yearInp.value
expDate.innerText = expDateFinal
})


monthInp.addEventListener("blur", () => {

  if (/[A-Za-z]/.test(monthInp.value) ) {
    warningMonth.innerText = "please enter numbers only"
    monthInp.style.border = "2px red solid"
   }
    else if (monthInp.value.length !== 2) {
     warningMonth.innerText = "enter 2 characters"
     monthInp.style.border = "2px red solid"
   }
   else {warningMonth.innerText = ''}
})

yearInp.addEventListener("blur", () => {

  if (/[A-Za-z]/.test(yearInp.value) ) {
    warningYear.innerText = "please enter numbers only"
    yearInp.style.border = "2px red solid"
   }
    else if (monthInp.value.length !== 2) {
     warningYear.innerText = "enter 2 characters"
     yearInp.style.border = "2px red solid"
   }
   else {warningYear.innerText = ''}
})


const submitButton = document.getElementById('submitButton')
const thanks = document.getElementById('seccionThanks')
const form = document.getElementById('seccionForm')
submitButton.addEventListener('click', () => {
   thanks.style.display = "flex"
   form.style.display = "none"})
// submitButton.addEventListener('blur', ()=>{
//   const patron
//   if (cardNumberInp.value.lenght !== 16)
//   cardNumberInp.style.border = '1px solid red';
// }  )


//need to fix problems with margins turning red and not turning back to normal 
//after user fix problem
