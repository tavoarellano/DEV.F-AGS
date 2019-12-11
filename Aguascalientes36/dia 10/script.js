
const titulo = document.getElementById("titulo");
const cajaDeTexto = document.getElementById ("cajaDeTexto")
// titulo.innerHTML = "Titulo desde Javascript";
// titulo.style.color = "red"

function changeColor(color) {
    titulo.style.color = color;
}


function addClass(clase) {
    titulo.className = clase;
} 

function changeText() {
titulo.innerHTML = cajaDeTexto.value;
}