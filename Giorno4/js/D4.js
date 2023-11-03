/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) 
 e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function area () {
    let l1 = 2;
    let l2 = 4;
return l1*l2;
}

console.log(area())
console.log("fine");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri,
  ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum (l3, l4) {
   

if (l3 === l4  ) {
    return (l3+l4) * 3
 } else {
    return l3+l4
 }
}



console.log(crazySum(5,8));

console.log("fine");


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza 
 assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata
  per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let l5 = 19;
let l6 ;


function crazyDiff ( l5, l6) {

    let diff = l5-l6;

if(l5<l6) {
    console.log("questa è la differenza assoluta moltiplicata per 3: " + diff*3)
} else {
    console.log("questa è la differenza: " + diff)
}
    
}

crazyDiff(l5,18)

console.log("fine")


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



function boundary ( l7 ) {
    
if ( l7>20 && l7<=100 || l7===400)
return "true"
 else {
     return "false"}
    }
    let l7= 600


    console.log(boundary(l7))
    console.log("fine")


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify (str) {}
 
   


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", 
 il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function reverseString(str) {
    return (str.split("").reverse().join(""))
}

let rev = reverseString("EPICODE")
console.log(rev)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom",
  che accetta come parametro un numero n e ritorna un'array contenente n 
  numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(x){
    let numeriacaso=[];
    for (let i = 0; i < x; i++){
    let numeri= Math.floor(Math.random()*10);
    numeriacaso.push(numeri);
}
 return numeriacaso;
}

let random= giveMeRandom(5);
console.log(random);
