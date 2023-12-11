class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;


    }


    confronto (persona){

        if (this.age > persona.age){
            return this.firstName + 'è più vecchio di ' + persona.firstName;
        } else if (this.age < persona.age){
            return persona.firstName + 'è più vecchio di' + this.firstName;
        }else {
            return persona.firstName + ' ha la stessa età di' + this.firstName;
        }
    }


}



let m = new User ('Mario', 'Rossi', 29, 'Roma');
let g = new User ('Giuseppe', 'Verdi', 31, 'Milano');
let f = new User ('Francesca', 'Neri', 29, 'Napoli');