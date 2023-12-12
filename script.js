//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = prompt("Insert first number"); 
let num2 = prompt("Insert second number"); 

if(num1 == num2){
  console.log("Try again with two different numbers.")
}
else if(num1 > num2){
  console.log(num1 + " is greater")
}
else{
  console.log(num2 + " is greater")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num3 = prompt("Insert a number"); 
if(num3 < 5){
  console.log(num3 + " is tiny")
}
else if (num3 < 10){
  console.log(num3 + " is small")
}
else if (num3 < 15){
  console.log(num3 + " is medium")
}
else if (num3 < 20){
  console.log(num3 + " is large")
}
else {
  console.log(num3 + " is huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for(let i = 0; i <= 10; i++){
  if(i!=3 && i!=8){
    console.log(i);
  } 
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for(let i = 0; i <= 15; i++){
  if(i%2 == 0){
    console.log(i + " is even");
  }
  else
  {
    console.log(i + " is odd");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let first8 = prompt("Insert first integer "); 
let second8 = prompt("Insert second integer");
first8 = Math.round(first8)
second8 = Math.round(second8)

if (first8 == 8){
  console.log("The first number is 8");
}
if (second8 == 8){
  console.log("The second number is 8");
}
if (first8 + second8 == 8){
  console.log("Their sum is 8!");
}
if (Math.abs(first8 - second8) == 8){
  console.log("Their difference is 8!");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

// let totalShoppingCart = prompt("Insert total here");
// totalShoppingCart = Number(totalShoppingCart);
// if(totalShoppingCart > 50){
//   console.log("Congratulations you get a promotion! \nNo shipping fee for this order\n");
// }
// else{
//   console.log("Shipping fee for this order is 10$\n");
//   totalShoppingCart += 10;
// }

// console.log("Your bill is: " + totalShoppingCart + "$");


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart = prompt("Insert total here");
totalShoppingCart = Number(totalShoppingCart *= 0.8);// here the promotion of 20%
if(totalShoppingCart > 50){
  console.log("Congratulations you get a promotion! \nNo shipping fee for this order\n");
}
else{
  console.log("Shipping fee for this order is 10$\n");
  totalShoppingCart += 10;
}

console.log("Your bill is: " + totalShoppingCart + "$");

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = isMale? "Male" : "Female";
console.log("My supercomputer analysis says you are probabily " + gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for(let i = 0; i <= 100; i++){
  if(i%3 == 0 && i%5 == 0){
    console.log("FizzBuzz");
  }
  else if(i%3 == 0){
    console.log("Fizz");
  }
  else if(i%5 == 0){
    console.log("Buzz");
  }
  else
  {
    console.log(i);
  }
}