function mensagemNaTela() {
    window.confirm("Deseja ativiar a localização atual?");
}

function alterarCorDeFundo(corDoFundo) {
    document.bgColor = corDoFundo;
}
function alterarCorDaFonte(corDaFonte) {
    document.fgColor = corDaFonte;
}
function aumentarTamanho () {
    
    var largura = document.querySelector("#principal");

    if(largura.style.width = '30px'){
        largura.style.width = "1024px";
        document.getElementById("principal").style.backgroundColor='red';
    }
}

function diminuirTamanho () {

    var largura = document.querySelector("#principal");

    if(largura.style.width = '1024px'){
        largura.style.width = "30px";
        document.getElementById("principal").style.backgroundColor='blue';
    }
}