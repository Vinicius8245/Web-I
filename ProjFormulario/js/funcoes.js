function calcularMedia() {

    var nomeAluno = window.prompt('Informe o nome do Aluno:');
    var nota1 = parseFloat(window.prompt('Informe a nota 1 do aluno:'));
    var nota2 = parseFloat(window.prompt('Informe a nota 2 do aluno:'));

    var media = (nota1 +nota2) /2 ;

    var situacao;

    if(media => 6){
        situacao = 'Aluno aprovado';
    }else{
        situacao = 'Aluno reprovado';
    }

    window.alert('Dados do Aluno'+
        '\nNome: ' + nomeAluno +
        '\nNota 1:'+ nota1 +
        '\nNota 2:'+ nota2 + 
        '\nMédia:'+ media +
        '\nSituação:' + situacao 
    );
}

function verificarNumero() {
    var numero = parseFloat(window.prompt('Infome um número qualquer:'));

    if(numero >= 0){
        window.alert('Este número é positivo:' + numero);
    }else{
        window.alert('Este número é negativo:' + numero);
    }
}