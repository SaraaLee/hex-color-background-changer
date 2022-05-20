// Implementar solución aquí 

let colorRandom = document.querySelector("#btn");
colorRandom.onclick = ponerColorRandom;


function ponerColorRandom(){
    let valorColor = generarColor();
    document.body.style.backgroundColor = "#" + valorColor;
    let etiquetaSpan = document.querySelector("#hex-value");
    etiquetaSpan.innerHTML = "#" + valorColor;
    

}


function generarColor() {
    return Math.floor(Math.random()*16777215).toString(16);
    
}



