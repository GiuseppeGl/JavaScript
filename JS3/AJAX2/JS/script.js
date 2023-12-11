

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://striveschool-api.herokuapp.com/books');
xhr.send();


xhr.onreadystatechange = function() {

if( xhr.readyState == 4 && xhr.status == 200){
    console.log('completato');
    let json = JSON.parse(xhr.response);
    console.log(json)
    json.for



    createCard();
}

}



console.log(arrayLibri);

function createCard (json) {
    let booksSpace = document.querySelector('.row');
    for(let ele of json){
        booksSpace.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`

    }

}