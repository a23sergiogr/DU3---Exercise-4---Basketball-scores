function calculate(){
    let points = document.getElementsByTagName("input");
    let resultado = document.getElementById("resultado");

    let total = 0

    for(let i = 0; i < points.length; i++){
        total = total + parseInt(points[i].value*(i+1))
    }

    resultado.innerText = total
}

function reset(){
    let points = document.getElementsByTagName("input");
    let resultado = document.getElementById("resultado");

    for(let i = 0; i < points.length; i++){
        points[i].value = 0
    }

    resultado.innerText = 0
}