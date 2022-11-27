let labelEmail = document.querySelector('#labelEmail');
let email = document.querySelector("#email");
let validEmail = false;

let labelsenha = document.querySelector('#labelsenha');
let psw = document.querySelector("#psw");
let validSenha = false;

let labelrepeat = document.querySelector('#labelrepeat');
let pswrepeat = document.querySelector("#psw-repeat");
let validRepeat = false;

const form = document.getElementById('form');
const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

email.addEventListener("keyup", ()=>{
    if(emailRegex.test(email.value)){
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = '<strong> Email </strong>'
        validEmail=true
    }
    else{
        labelEmail.setAttribute ('style', 'color:red');
        labelEmail.innerHTML = '<strong>Inserir um e-mail válido</strong>'
        validEmail=false
    }
})

psw.addEventListener('keyup', ()=>{
    if( psw.value.length < 4){
        labelsenha.setAttribute ('style', 'color:red');
        labelsenha.innerHTML = 'Insira no minino 5 caracteres'
        validSenha=false
    }
    else{
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = ' <strong> Senha </strong>'
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
    if (validEmail   &&   validRepeat  && validSenha  ){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        
        listaUser.push(
            {
                emailCad: email.value,
                senhaCad: psw.value,
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))
            window.location.href = 'cadastro2.html'
    }
    

    else{
        alert("Preencha todos os campos")
       

    }
}



