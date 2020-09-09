function acessarIMC(){
    location.href = "MultCalculadora.html";
}
function acessarReta(){
     location.href = "Retângulo.html";
}
function acessarCirc(){
    location.href = "Círculo.html";
}
function calcularIMC(){
    var peso = document.getElementById("peso").value;
    var alturaIMC = document.getElementById("alturaIMC").value;
    var res = parseFloat(peso) * parseFloat(alturaIMC);
    alert("O resultado é: " + res);
}
function calcularReta(){
    var base = document.getElementById("base").value;
    var alturaReta = document.getElementById("alturaReta").value;
    var res = parseFloat(base) * parseFloat(alturaReta);
    alert("O resultado é: " + res);
}
function calcularCirc(){
    var raio = document.getElementById("raio").value;
    var res = parseFloat(6.28) * parseInt(raio);
    alert("O resultado é: " + res);
}   