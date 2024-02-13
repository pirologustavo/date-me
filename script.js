function moverBotao(){
    var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.position = 'absolute'
    document.getElementById('noButton').style.transition = '0.5s'
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}

function aceitar(){
    let paragrafo = document.getElementById('pedido');
    paragrafo.style.fontSize = "24px"
    paragrafo.style.color = "#70c9df"
    paragrafo.innerHTML = "Eu te amo!"

    var img = document.getElementById('alianca');
    img.setAttribute('src', 'img/casamento.gif')

    var botoes = document.getElementById('botoes');
    botoes.innerHTML = ''

    let body = document.body
    body.style.background = "white"
}