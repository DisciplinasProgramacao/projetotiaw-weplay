



function entrar(){
    let login = document.querySelector('#login')
    let labelLogin = document.querySelector('#labelLogin')

    let password = document.querySelector('#password')
    let senhaLabel = document.querySelector('#senhaLabel')
    let listaUser = []
    let userValid = {
        email: '',
        password: ''
    }
    listaUser = JSON.parse(localStorage.getItem(' listaUser'))

    listaUser.foreach((item)=>{
        if(login.value == item.emailCad & password.value == item.senhaCad){
            userValid = {
                email: item.emailCad,
                senha: item.senhaCad
            }
        }
    })
    if(login.value == userValid.email && password.value== userValid.password){
        alert('certo')}
    else{
        alert('erro')}
    
}
