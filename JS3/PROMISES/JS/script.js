
/* loadImmaggini('gatto', '2') */



function loadImmagini(query, numeroPagina) {



let campoRicerca = query;
let pagNumber = 1

if ( numeroPagina === undefined) {
     pagNumber = 1
} else {
     pagNumber = +numeroPagina
}

let urlPexel = `https://api.pexels.com/v1/search?query=${campoRicerca}&per_page=9&page=${pagNumber}`
/* console.log(urlPexel) */

 fetch( urlPexel, {
        method: 'GET', 
        headers: {
            Authorization: 'BNSQ0lVg3YMIg7jZhUpKVuevkWsGfv0VaJQyuR0bMU3RcfHLz8K7PL7K'
        }
    })
    .then(response => response.json())
    .then(json => {
        let divPadre = document.querySelector('#padreCard');
        /* console.log(json) */
        divPadre.innerHTML = ''; //pulisco dalle foto precedenti

        json.photos.forEach(element => {
            let divCol = document.createElement('div');
            divCol.className = 'cardsingola col-md-4 d-flex alig-items-stretch img-fluid';
            divCol.innerHTML = `<div class="card mb-4 shadow-sm">
              <img src="${element.src.large}" alt="${element.alt}">
              <div class="card-body">
                
                <p class="card-text">
                  ${element.alt}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-success text-white btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-danger text-white btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>
            </div>`
divPadre.appendChild(divCol)
        })

    })

    .catch(error => console.log(error + "errore presente"))

/*    /*  .then(json => {
        let ul = document.querySelector('#photo');
        json.photos.forEach(photo => {
             //photo.src.small
            let li = document.createElement('li');
            li.className = 'list-group-item';
            let img = document.createElement('img');
            img.src = photo.src.small;
            img.alt = photo.alt;
            li.appendChild(img);
            ul.appendChild(li);
        })
    }) */

    localStorage.setItem("key", query);
}







document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem("key") !== null){
        let ultimaRicerca = localStorage.getItem("key")
        loadImmagini(ultimaRicerca)
    }
    
    
    
    document.querySelector('#divBottoni').addEventListener('click', (e) => {
        e.preventDefault();
        console.log("test");
        if(e.target.className == 'btn btn-primary my-2') {
            console.log("hai cliccato su primary");
            loadImmagini("cat");
    
        }
         if(e.target.className == 'btn btn-secondary my-2') {
            console.log("hai cliccato su primary");
            loadImmagini("dog");
    
        } 

    
    
    })

    document.querySelector('#padreCard').addEventListener('click', (e) => {
        e.preventDefault();
        console.log("test");
        if(e.target.className == 'btn btn-sm btn-danger text-white btn-outline-secondary') {
            let parent = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
             let figlio = e.target.parentNode.parentNode.parentNode.parentNode.parentNode
             parent.removeChild(figlio)
        } if (e.target.className == 'btn btn-sm btn-success text-white btn-outline-secondary') {
            let figlio = e.target.parentNode.parentNode.parentNode.child
              
        }
        

    
    
    })

    document.querySelector('#bottoneRicerca').addEventListener('click', (e) => {
        e.preventDefault();
        /* console.log("ciao"); */
       let input = document.querySelector('#barraRicerca').value;
       loadImmagini(input)

    })


    
})



