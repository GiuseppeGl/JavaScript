function creaTabellone () {

    let tabellone = document.querySelector('#tabellone');
     for (let i = 1; i<= 76; i++) {

    const cella = document.createElement('div')
    cella.innerText = [i]
    tabellone.appendChild(cella)
    cella.className = "cella tabellone"
   } 

  }

creaTabellone();

/* function estraiNumero () {
let button = document.querySelector('#button')
button.addEventListener('click', () => {
    let numeroEstratto = (Math.ceil(Math.random() *76))
    console.log(numeroEstratto)
    let numeriSelezionati = document.querySelectorAll ('#tabellone div')
    numeriSelezionati.forEach(cella => {
    

        numeriSelezionati[numeroEstratto -1].style.backgroundColor = '#ffcc00'
    })
        
    
} )
}

estraiNumero();
 */

/* let numeriEstratti = [];
 
function estraiNumero () {
    let button = document.querySelector('#button');
    button.addEventListener('click', () => {
      let numeroEstratto ;
    
    do {
        numeroEstratto = Math.ceil(Math.random () * 76)
    } while (numeriEstratti.includes(numeroEstratto));

    console.log(numeroEstratto);
    numeriEstratti.push(numeroEstratto);

    let numeriSelezionati = document.querySelectorAll ('#tabellone div')
    numeriSelezionati.forEach(cella => {
    

        numeriSelezionati[numeroEstratto -1].style.backgroundColor = '#ffcc00'
    }
   */
    


let numeriEstratti = [];

function estraiNumero() {
  let button = document.querySelector('#button');
  button.addEventListener('click', () => {
    let numeroEstratto;

    
    do {
      numeroEstratto = Math.ceil(Math.random() * 76);
    } while (numeriEstratti.includes(numeroEstratto));

    console.log(numeroEstratto);
    numeriEstratti.push(numeroEstratto); 

    let numeriSelezionati = document.querySelectorAll('#tabellone div');

    numeriSelezionati.forEach((cella, indice) => {
      
      if (indice === numeroEstratto - 1) {
        cella.style.backgroundColor = '#ffcc00';
      }
    });
  });
}
    
estraiNumero()