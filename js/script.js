const buttonWord = document.getElementById('parolaButton');
const wordArray = [];

buttonWord.addEventListener("click", function () {
  //? Chiedere all’utente di inserire una parola
  const userWord = document.getElementById('parola').value;
  wordArray.push(userWord);
  console.log(userWord);
  isPalindrome(userWord);

})


//? Creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word) {

  //! splitto la parola in lettere
  const arrayValues = word.split('');

  //! inverto l'ordine delle lettere
  const reverseArrayValues = arrayValues.reverse();

  //! riunisco le lettere in parola (stringa)
  const reverseWord = reverseArrayValues.join('');

  //! se la parola rimane uguale:
  if (word == reverseWord) {
    console.log('It is a palindrome');
  }
  //! altrimenti
  else {
    console.log('It is not a palindrome');
  }
}


//? Pari e Dispari
//* L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//* Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
//* Sommiamo i due numeri 
//* Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//* Dichiariamo chi ha vinto.


const buttonNumber = document.getElementById('numeroButton');
let sum = 0;


buttonNumber.addEventListener("click", function () {
  const userChoice = document.getElementById('evenOdd').value;
  const userNumber = document.getElementById('numero').value;
  const pcNumber = getRandomNumber(1, 5);
  sum = parseInt(userNumber, 10) + parseInt(pcNumber, 10);

  if (userChoice == "pari") {
    if (isEven(sum)) {
      console.log('hai vinto');
    } else if (isOdd(sum)) {
      console.log('hai perso');
    }
  }

  if (userChoice == "dispari") {
    if (isOdd(sum)) {
      console.log('hai vinto');
    } else if (isEven(sum)) {
      console.log('hai perso');
    }
  }

})


function getRandomNumber(min, max) {
  const numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);

  return numeroRandomico;
}


function isEven(number) {
  return number % 2 == 0;
}

function isOdd(number) {
  return number % 2 == 1;
}

