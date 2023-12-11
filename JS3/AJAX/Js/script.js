let obj1 = {

    name: 'Mario',
    lastname: 'Rossi',
    city: 'Roma',
    saluta: function(){                      // metodi 
        return this.name + ' ' + this.city;

    }
}




console.log(obj1);
console.log(obj1.name); // dot notation
console.log(obj1 ['name']); // braket se la key è divisa in due parole 'last name' o altrimenti se è un numero obj[1]
console.log(obj1.saluta())



let fiat500 = {

    marca: 'Fiato',
    modello: '500',
    alimentazione: 'Benzina',
    colore: 'Rosso'
};

let fordFiesta = {

    marca: 'Ford',
    modello: 'Fiesta',
    porte: 'tre',
    colore: 'Blu'
};

let mercedesSmart = {

    marca: 'Mercedes',
    modello: 'Smart',
    colore: 'Nero',
    cambio: 'Automatico'
};



// Prototipo JS

function Auto (marca, modello, colore){

    this.marca = marca; //ogni oggetto che creo dal prototipo auto
    this.modello = modello;
    this.colore = colore;

};

let cinquecento = new Auto('Fiat', '500', 'Rosso');  // crea un nuovo oggetto utilizzando il prototipo auto
let fiesta = new Auto('Ford', 'Fiesta', 'Blu');
let smart= new Auto('Mercedes', 'smart', 'Nero');



Auto.prototype.info = function (){  // aggiungi un metodo/proprietà a tutti quanti i modelli di tipo auto

    return this.marca + ' ' + this.modello + ' ' + this.colore;
}



Auto.prototype.ruote = 4;

smart.cambio = 'automatico';



console.log(cinquecento.info());
console.log(fiesta.info());
console.log(smart.info());

console.log(fiesta);

console.log(smart.marca);
console.log(fiesta.marca);

// classi in javascritp. una classe non è nient'altro che un prototipo per uniformare i linguaggi

class AutoClass {   
    constructor(marca, modello, colore){

        this.marca = marca; //ogni oggetto che creo dal prototipo auto
        this.modello = modello;
        this.colore = colore;
    }

}


let c = new AutoClass ('c', '500', 'Rosso');  // crea un nuovo oggetto utilizzando una classe 
let f = new AutoClass ('Ford', 'Fiesta', 'Blu');
let s= new AutoClass ('Mercedes', 'smart', 'Nero');

console.log(c);



// ESTENDERE LE CLASSI = ereditarietà


class Persona {
    constructor(nome, cognome, citta){
        this.nome = nome;
        this.cognome = cognome;
        this.citta = citta;
    }

}




class Uomo extends Persona {
    constructor(nome, cognome, citta, barba){
       super(nome, cognome, citta);
        this.barba = barba;
    }
}

class Donna extends Persona {
    constructor(nome, cognome, citta, smalto){
        super(nome, cognome, citta);
        this.smalto = smalto;
    }
}


