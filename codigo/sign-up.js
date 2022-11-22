let btmCadastro = document.querySelector("#btmCadastro")

let labelEmail = document.querySelector('#labelEmail');
let email = document.querySelector("#email");
let validEmail = false;

let labelsenha = document.querySelector('#labelsenha');
let psw = document.querySelector("#psw");
let validSenha = false;

let labelrepeat = document.querySelector('#labelrepeat');
let pswrepeat = document.querySelector("#psw-repeat");
let validRepeat = false;

email.addEventListener("keyup", ()=>{
    if( email.value.lenght  <= 2){
        labelEmail.setAttribute ("Style, color red");
        labelEmail.innerHTML = '<strong> Insira no minino 3 caracteres</strong>'
        validEmail=false
    }
    else{
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        validEmail=true
    }
})

psw.addEventListener("keyup", ()=>{
    if( email.value.lenght  <= 4){
        labelsenha.setAttribute ("Style, color red");
        labelsenha.innerHTML = '<strong> Insira no minino 5 caracteres</strong>'
        validSenha=false
    }
    else{
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = 'senha'
        validSenha=true
    }
})

pswrepeat.addEventListener('keyup', ()=>{
    if( pswrepeat.value != psw.value){
        labelrepeat.setAttribute('style', 'color:red')
        labelrepeat.innerHTML = 'As senhas precisam ser iguais.'
        validRepeat=false
    }
    else{
        labelrepeat.setAttribute('style', 'color:green')
        labelrepeat.innerHTML = 'Confirmar Senha.'
        pswrepeat.setAttribute('style', 'border-color: green')
        validRepeat=true
    }
    
})

function cadastrar(){
    if (validEmail && validRepeat && validSenha ==true){

    }
    else{
        alert("Preencha todos os campos")
       

    }
}



