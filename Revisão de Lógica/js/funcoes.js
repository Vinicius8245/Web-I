var valor1;
var valor2;
var calculo;

function somar(){
    valor1 = +window.prompt('Informe um número:');
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));


    calculo = valor1 + valor2;
    window.alert(calculo);
}

function subtrair (){
    valor1 = parseFloat(window.prompt('Informe um número qualquer:'));
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));

    calculo = valor1 - valor2;

    window.alert(calculo);
}
function multiplicar (){
    valor1 = parseFloat(window.prompt('Informe um número qualquer:'));
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));

    calculo = valor1 * valor2;

    window.alert(calculo);
}
function divisao (){
    valor1 = parseFloat(window.prompt('Informe um número qualquer:'));
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));

    calculo = valor1 / valor2;

    window.alert(calculo);
}
function calcularRestoDaDivisao (){
    valor1 = parseFloat(window.prompt('Informe um número qualquer:'));
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));

    calculo = valor1 % valor2;

    window.alert(calculo);
}
function calcularPotencia (){
    valor1 = parseFloat(window.prompt('Informe um número qualquer:'));
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));

    calculo = valor1 ** valor2;

    window.alert(calculo);
}
function calcularDaRaiz (){
    valor1 = parseFloat(window.prompt('Informe um número qualquer:'));
    valor2 = parseInt(window.prompt('Informe um número inteiro:'));

    calculo = valor1 **(1/valor2);

    window.alert(calculo);
}

function calcularSalarioDoFuncionario() {

    var nomeFuncionario = window.prompt('Informe o nome do funcionário:'); 
    var valorHora = parseFloat(window.prompt('Informe o valor hora:'));
    var cargaHorariaMes = parseFloat(window.prompt('Informe a carga horário do funcionário no mês:'));
    var salarioBruto = valorHora * cargaHorariaMes; 

    window.alert( 'Nome do funcionário:'+nomeFuncionario +
     '\nValor da hora do funcionário:'+valorHora +
     '\nSalário bruto:'+salarioBruto + 
     '\nCarga horária do mês:'+cargaHorariaMes
     );
    







    
}