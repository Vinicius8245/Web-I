function validar(){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var tipo = document.getElementById('tipo').value;


    if(usuario == '' && senha == '' && tipo ==''){
        window.alert('Preencha o campo usuário e senha e escolha o tipo de usuário');
        document.getElementById('usuario').style.border = 'solid 0.5px red';
        document.getElementById('senha').style.border = 'solid 0.5px red';
        document.getElementById('tipo').style.border = 'solid 0.5px red';
    }else if(usuario == '' && senha == '' && tipo !=''){
        window.alert('Preencha o campo usuário e senha');
        document.getElementById('usuario').style.border = 'solid 0.5px red';
        document.getElementById('senha').style.border = 'solid 0.5px red';
        document.getElementById('tipo').style.border = 'solid 0.5px black';
    }else if(usuario =='' && senha != '' && tipo ==''){
        window.alert('Preencha o campo usuário e escolha o tipo de usuário');
        document.getElementById('usuario').style.border = 'solid 0.5px red';
        document.getElementById('tipo').style.border = 'solid 0.5px red';
        document.getElementById('senha').style.border = 'solid 0.5px black';
    }else if(usuario != '' && senha =='' && tipo ==""){
        window.alert('Preencha o campo senha e escolha o tipo de usuário');
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('senha').style.border = 'solid 0.5px red';
        document.getElementById('tipo').style.border = 'solid 0.5px red';
    }else if(usuario == ''){
        window.alert('Preencha o campo Usuário');
        document.getElementById('usuario').style.border = 'solid 0.5px red';
        document.getElementById('senha').style.border = 'solid 0.5px black';
        document.getElementById('tipo').style.border = 'solid 0.5px black';
    }else if(senha == ''){
        window.alert('Preencha o campo Senha');
        document.getElementById('senha').style.border = 'solid 0.5px red';
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('tipo').style.border = 'solid 0.5px black';
    }else if(tipo == ''){
        window.alert('Escolha o tipo de usuário');
        document.getElementById('tipo').style.border = 'solid 0.5px red';
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('senha').style.border = 'solid 0.5px black';
    }else{
        window.alert('Bem Vindo !!!');
        document.getElementById('usuario').style.border = 'solid 0.5px black';
        document.getElementById('senha').style.border = 'solid 0.5px black';
        document.getElementById('tipo').style.border = 'solid 0.5px black';
    }
    
    
    
}