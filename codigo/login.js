function entrar(){
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    let listaUser = []
    let userValid = {
        login: '',
        senha: ''
      }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

        
    listaUser.forEach((item) => {
        if(login.value == item.userCad && senha.value == item.senhaCad){
       
        userValid = {
            login: item.emailCad,
            senha: item.senhaCad
        }
      
    }
  })

    if(login.value == userValid.login && senha.value == userValid.senha){
        window.location.href = 'index.html'
    }
    else{
        alert('Senha ou Usuário incorretos')
    }
}