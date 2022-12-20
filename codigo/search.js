fetch(`https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&id=3328`)
    .then(resposta => {
    return resposta.json()
    })
    .then(response => {
    let data = response.results;
    
    data.map(element => { 
        
        const root = document.getElementById('root');
        const urlParams   = new URLSearchParams(window.location.search);
        const name        = urlParams.get('name')
        const div         = document.createElement("div");
        const img         = document.createElement("img");
        const secondDiv   = document.createElement("div");
        const ul          = document.createElement("ul");
        const p           = document.createElement("H4");
        const first_ul    = document.createElement("ul");
        const second_ul   = document.createElement("ul");
        const paragraph_1 = document.createElement("h4");
        const paragraph_2 = document.createElement("h6");
        const paragraph_3 = document.createElement("h4");
        const plat   = []; // plataformas
        const gen    = []; // gêneros
        const stores = []; // lojas

        if(element.name.toUpperCase().includes(name.toUpperCase())) {
            div.setAttribute('class', 'card');
            div.setAttribute('style', '18rem');
            img.setAttribute('src', element.background_image);
            img.setAttribute('class', 'card-img-top');
            secondDiv.setAttribute('class', 'card-body');

            element.platforms.map(elem => {
                plat.push(elem.platform.name);

                p.innerHTML = 'Plataformas: ';
                ul.appendChild(p);
            });

            for (let i = 0; i < plat.length; i++) {
                var li         = document.createElement("li");
                
                li.textContent = plat[i];

                ul.appendChild(li);
            }

            element.genres.map(elem => {
                gen.push(elem.name);

                paragraph_1.innerHTML = 'Gênero: ';
                first_ul.appendChild(paragraph_1);
            });

            for (let i = 0; i < gen.length; i++) {
                var li1         = document.createElement("li");
                
                li1.textContent = `${gen[i]}`;

                first_ul.appendChild(li1);
            }

            element.stores.map(stored => {
                stores.push(stored.store.name);

                paragraph_3.innerHTML = 'Lojas: ';
                second_ul.appendChild(paragraph_3);
            });

            for (let i = 0; i < stores.length; i++) {
                var li2         = document.createElement("li");
                
                li2.textContent = `${stores[i]}`;

                second_ul.appendChild(li2);
            }

            paragraph_2.style.textAlign = 'center';
            paragraph_2.innerHTML = `Data da Atualização: ${element.updated}`;

            root.setAttribute('class', 'row');

            div.appendChild(img);
            div.appendChild(secondDiv);
            secondDiv.appendChild(ul);
            secondDiv.appendChild(first_ul);
            secondDiv.appendChild(second_ul);
            secondDiv.appendChild(paragraph_2);
            root.appendChild(div);
        }
    });
});
