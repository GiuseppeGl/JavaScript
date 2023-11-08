console.log(window) //oggetto predefinito 

console.log(window.document)
console.dir(window.document)

let h1 = window.document.getElementById("titolo")

console.log(h1)
console.dir(h1)


h1.innerText = 'testo modificato tramite javascript'
h1.style.textDecoration = 'underline'
h1.style.textAlign = 'center'
console.log(h1.innerText)

let p = document.getElementsByClassName('txt')
console.log(p[0])

