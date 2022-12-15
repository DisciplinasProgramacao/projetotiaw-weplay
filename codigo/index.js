 if (localStorage.getItem("token")==null){
    alert("É necessário estar logado para continuar")
    window.location.href = "login.html"
 }

function colocaJogos (data) {
   const cards = document.getElementById("cards")

   data.map((item) => {
     const link = document.createElement("a")
     link.onclick = async function() {
      const result = await fetch(`https://api.rawg.io/api/games/${item.id}?key=93b27c0e226b418382f11409a7c3f2d9`).then(
         (res) => res.json()
       );

       window.location.href = result.website
     }
     cards.appendChild(link)
 
     const card = document.createElement("div")
     card.setAttribute("class", "card")
     link.appendChild(card)
 
     const title = document.createElement("h1")
     title.innerText = item.name;
     card.appendChild(title)
 
     const image = document.createElement("img")
     image.src = item.background_image;
     card.appendChild(image)
 
     link.appendChild(card)
   })
 }

async function consultaAPI() {
  const { results } = await fetch(`https://api.rawg.io/api/games?key=93b27c0e226b418382f11409a7c3f2d9`).then(
    (res) => res.json()
  );

  colocaJogos(results)
  }

  consultaAPI()