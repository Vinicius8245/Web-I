
function alterarCorDeFundoParaLaranja(cor) {
    document.bgColor = cor;
}

function alterarCorDaFonteParaBranco() {
    document.fgColor = 'white';
}

function modificarTituloDaPagina() {
    document.title = 'Aula de JavaScript';
}

function exibirConfirmacao() {
    window.confirm('Continuar?');
}

function mostrarMensagem() {
    window.alert('Alô Mundo!');
}

function solicitarNome() {
    window.prompt('Informe o nome:');
}

function exibirDataHoraDaModificacao() {
    window.alert(document.lastModified);
}

function imprimir() {
    window.print();
}

function executarTodosOsComandos() {
    if (window.confirm('Executar todos os comandos?') == true) {
        alterarCorDeFundoParaLaranja(window.prompt('Informe a cor de fundo:'));
        alterarCorDaFonteParaBranco();
        modificarTituloDaPagina();
        exibirConfirmacao();
        mostrarMensagem();
        solicitarNome();
        exibirDataHoraDaModificacao();
        imprimir();
    }else{
        window.alert('Volte sempre!!');
    }
}
