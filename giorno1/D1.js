/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*   string = frasi/parole definite tra gli apici ' "" (preferibile i doppi)
     numerico =  viene definito senza distinzione tra intero e decimale. Il decimale si esprime con il punto
    booleano = ammette solo due valori, true o false. 
    Null= segnala l'assenza intenzionale di un oggetto
    Undefined=  propietà che indica che una variabile non ha valore assegnato oppure non è definita */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let MioNome = "Giuseppe";
console.log(MioNome);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let n1 = 12;
let n2 = 20;
let somma = n1+ n2;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

MioNome = "Longo";

const Ifoa = "ifoa";
/* Ifoa = "noifoa"  */  /* errore */

console.log(Ifoa);




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let n4 = 4;
let differenza = x - n4;
console.log(differenza)
console.log(n4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

let uguaglianza = ("name1" === "name");
console.log("uguale: " + uguaglianza );

console.log( name1 === name2);
 

console.log(name1 === name2.toLocaleLowerCase());

console.log(name2)