if (localStorage.getItem("token")==null){
    alert("É necessário estar logado para continuar")
    window.location.href = "login.html"
 }

 fetch('https://api.rawg.io/api/games?key=6755f0d58e914b038cbf17ec78d014b2&platforms=18,1,7')
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
                     <a href="https://rawg.io/games/${jogo.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                 </div>
                 </div>`
     }
     document.getElementById('tela').innerHTML = str
 })
// RETURN SEARCH

const apiKey = '6755f0d58e914b038cbf17ec78d014b2'
let txtSearch = document.getElementById('txtSearch')
let btnSearch = document.getElementById('btnSearch')
let gamesPlace = document.getElementById('tela')

function doSearch() {
    let textoPesquisa = txtSearch.value
    let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${textoPesquisa}`
    
    fetch(url)
        .then(res => res.json())
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
                            <a href="https://rawg.io/games/${jogo.id}" target="_blank" class="btn btn-primary">Mais detalhes</a>
                        </div>
                        </div>`
            }
            document.getElementById('tela').innerHTML = str
        })
}

document.body.onload = () => {
    btnSearch.addEventListener ('click',doSearch)
}

