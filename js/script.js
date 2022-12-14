const buttonWord = document.getElementById('parolaButton');
let boxPalindroma = document.querySelector('.boxPalindroma');
const wordArray = [];

buttonWord.addEventListener("click", function () {
  //? Chiedere all’utente di inserire una parola
  const userWord = document.getElementById('parola').value;
  wordArray.push(userWord);
  console.log(userWord);
  isPalindrome(userWord);
  
})


// //!
// //! FUNZIONI 
// //!
// //? Creare una funzione per capire se la parola inserita è palindroma


function isPalindrome(word) {
  //! trovare la lunghezza della parola
  const length = word.length;
  
  //! scorrere metà della parola
  for (let i = 0; i < length / 2; i++) {
      
    //! controllare se la prima metà e la seconda sono uguali
    if (word[i] !== word[length - 1 - i]) {
      boxPalindroma.append('Non è palindroma');
      return;
              
    }
  }
  boxPalindroma.append("E' palindroma!");
  return;

}


//? Pari e Dispari
//* L'utente sceglie pari o dispari e inserisce un numero da 1 a 5
//* Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione
//* Sommiamo i due numeri 
//* Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
//* Dichiariamo chi ha vinto.


const buttonNumber = document.getElementById('numeroButton');
const boxResult = document.querySelector('.boxResult');
let sum = 0;


buttonNumber.addEventListener("click", function () {
  const userChoice = document.getElementById('evenOdd').value;
  const userNumber = document.getElementById('numero').value;
  const pcNumber = getRandomNumber(1, 5);
  sum = parseInt(userNumber, 10) + parseInt(pcNumber, 10);
  let even = isEven(sum);

  // if (userChoice !== "pari" && userChoice !== "dispari"); {
  // alert('inserisci "pari" o "dispari"');
  // }

  if (userChoice == "pari") {
    if (even) {
      console.log(sum);
      boxResult.append('Hai vinto!');
    } else {
      console.log(sum);
      boxResult.append('Hai perso!');
    } 
  } else if (userChoice == "dispari") {
    if (!even) {
      console.log(sum);
      boxResult.append('Hai vinto!');
    } else {
      console.log(sum);
      boxResult.append('Hai perso!');
    }
  }

})

//!
//! FUNZIONI 
//!

function getRandomNumber(min, max) {
  const numeroRandomico = Math.floor(Math.random() * (max - min + 1) + min);

  return numeroRandomico;
}


function isEven(number) {
  return number % 2 == 0;
}


//!
//! 
//!