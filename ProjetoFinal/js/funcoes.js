function ativarLocalizacao(){
    window.confirm('Você deseja ativar a localização em tempo real ?');
}
function confirmarFormulario() {
    var resultado = window.confirm('Você deseja ir para o formulário ?');
    
    if(resultado == true){
        window.open("formulario.html");
    }else if(resultado == false){
        window.open("index.html");
    }
}
function mudarDeTela() {
    window.confirm('Você deseja ir para outra página ?');
}
/* ------------MODAL----------- */
function abrirModal(){
    document.getElementById('cortina').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    document.getElementById('modal').style.marginTop = '100px';
    document.getElementById('cortina').style.position = 'fixed';
    document.getElementById('cortina').style.zIndex = '3';
    document.getElementById('fechar').style.float = 'right';
    document.getElementById('fechar').style.margin = '20px';
    document.getElementById('cortina').style.width = '100%';
    document.getElementById('cortina').style.height = '100%';
}
function fecharModal(){
    document.getElementById('cortina').style.backgroundColor = '';
    document.getElementById('modal').style.marginTop = '-500px';
    document.getElementById('cortina').style.float = 'left';
    document.getElementById('cortina').style.height = '0%';
}
/* VALIDAÇÃO FORMULÁRIO */

function validarFormulario() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;

    if(usuario == '' && senha =='' && email ==''){
        document.getElementById('usuario').style.border = 'solid 0.5px red';
        document.getElementById('senha').style.border = 'solid 0.5px red';
        document.getElementById('email').style.border = 'solid 0.5px red';
        document.getElementById('validacao').innerHTML = 'Preencha o campo usuário, senha e email';
    }else if(usuario != '' && senha =='' && email ==''){
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('senha').style.border = 'solid 0.5px red';
        document.getElementById('email').style.border = 'solid 0.5px red';
        document.getElementById('validacao').innerHTML = 'Preencha o campo senha e email';
    }else if(usuario != '' && senha !='' && email ==''){
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('senha').style.border = 'solid 0.5px black';
        document.getElementById('email').style.border = 'solid 0.5px red';
        document.getElementById('validacao').innerHTML = 'Preencha o campo email';
    }else{
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('senha').style.border = 'solid 0.5px black';
        document.getElementById('email').style.border = 'solid 0.5px black';
        document.getElementById('validacao').innerHTML = 'Cadastro Completo!';
    }


}