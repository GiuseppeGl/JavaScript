
let btn = document.querySelector('#invia')


btn.addEventListener('click', () => { 
/* => console.log('click btn')) controllo che funzioni */

let input = document.querySelector('form input');
//console.dir(input.value);
let task = input.value.trim();
if (task.length > 2 ) {
    console.log(task);
let li = document.createElement('li');
li.innerHTML = '<span>' + task + '</span>';
li.addEventListener('click', function (e) {
    e.target.className = e.target.className === 'completato' ? '' : 'completato'  } )
//console.log(li)
let ul = document.querySelector('#lista ul')
ul.appendChild(li)
input.value = '' // pulisci il campo input


}
taskCompletato() // attivo la funzione ad ogni fine funzione

})

/* 
function taskCompletato () {

    let li = document.querySelectorAll('#lista ul li'); // selezioni tutti i li dentro lista.ul
    //console.log(li)
    for(let i=0; i<li.length; i++){
       // li[i].addEventListener('click', function (e) {  //ciclo for per ogni lunghezza di i(li)
    //console.log() controllo se funziona
    // this.classList.toggle('completato'); // il toggle clicco mi mette la classe riclicco me la toglie
     //  e.target.classList = 'completato';

     // console.log(e.target) controllo cosa clicco

    // e.target.className = e.target.className === 'completato' ? '' : 'completato' ;

        })
    }
  
} */
