if (localStorage.getItem("token")==null){
    alert("É necessário estar logado para continuar")
    window.location.href = "login.html"
 }

 fetch('https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7')
 .then((res) => res.json())
 .then(data => {
     let str = ''
     for (let i = 0; i < data.results.length; i++) {
         let jogo = data.results[i]
         str += `<div class="card">
                 <img src="${jogo.background_image}" class="card-img-top" alt="...">
                 <div class="card-body">
                     <h5 class="card-title"<b>${jogo.name}</b></h5>
                     <p class="card-text">
                     ${jogo.released}
                     </p>
                     <a href="../codigo/search.html?name=${jogo.name}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                 </div>
                 </div>`
     }
     document.getElementById('tela').innerHTML = str
 })


 function redirecionarPagina() {
  const input_search  = document.getElementById('input-search');
  const input_value   = input_search.value;

  location.href = `../../codigo/search.html?name=${input_value}`;
}