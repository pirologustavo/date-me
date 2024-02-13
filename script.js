var imgAnterior = "img/casamento.png"
var imgAtual = "img/casamento.gif"

function moverBotao(){
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function aceitar(){
    let n = document.getElementById("alianca").value;
    alert (n)
}