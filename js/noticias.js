let containerDeNoticias = document.querySelector('#listaDeNoticias')


 async function pegarNoticias(){
    // let noticias = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=08502394f82f41e0a964646ade0bede3')
    // .then((resposta)=>{
    //    return resposta.json()
    // })
    // .then((dadosEmJson)=>{
    //     dadosEmJson.articles.forEach((noticia)=>{
    //         console.log("------------------------------------------")
    //         console.log("Titulo Noticia: " + noticia.title)
    //         console.log("Descrição Noticia: " + noticia.description)
    //         console.log("O link da Imagem: " + noticia.urlToImage)
    //     })

    // })

    let noticias = await fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=08502394f82f41e0a964646ade0bede3')
    
    let listaDeNoticas = await noticias.json()

    listaDeNoticas.articles.forEach((noticia)=>{

                let coluna = document.createElement('div')
                coluna.setAttribute('class', 'col-3')

                let card = document.createElement('div')
                card.setAttribute('class', 'card')

                let imgCard = document.createElement('img')
                imgCard.setAttribute('class', 'card-img-top')
                imgCard.setAttribute('src', noticia.urlToImage)

                let bodyCard = document.createElement('div')
                bodyCard.setAttribute('class', 'card-body')

                let titleCard = document.createElement('h5')
                titleCard.setAttribute('class', 'card-title')
                titleCard.textContent = noticia.title

                let descriptionCard = document.createElement('p')
                descriptionCard.setAttribute('class', 'card-text')
                descriptionCard.textContent = noticia.description

                let linkCard = document.createElement('a')
                linkCard.setAttribute('class', 'btn btn-primary')
                linkCard.setAttribute('href', noticia.url)
                linkCard.textContent = "Ir para noticia"

                
                card.appendChild(imgCard)
                card.appendChild(bodyCard)
                bodyCard.appendChild(titleCard)
                bodyCard.appendChild(descriptionCard)
                bodyCard.appendChild(linkCard)

                coluna.appendChild(card)

                containerDeNoticias.appendChild(coluna)

                // console.log("------------------------------------------")
                // console.log("Titulo Noticia: " + noticia.title)
                // console.log("Descrição Noticia: " + noticia.description)
                // console.log("O link da Imagem: " + noticia.urlToImage)
            })
 

}

// precisa mostrar o titulo, a descrição e o link da imagem


