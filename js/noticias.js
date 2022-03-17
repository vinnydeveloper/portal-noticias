const API_KEY = "a7c47d67d09b410298a02f830d42c34a";
const BASE_URL = "https://newsapi.org/v2";

const listaDeNoticias = document.querySelector("#listaDeNoticias");

async function getNews() {
  const response = await fetch(`${BASE_URL}/top-headlines?country=br`, {
    method: "GET",
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  const { articles } = await response.json();

  articles.forEach((article) => {
    const card = `<div class="col-6">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${article.urlToImage}" class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
              <h5 class="card-title">${article.title}</h5>
              <p class="card-text">
                  ${article.description}
              </p>
              <a href="${article.url}" class="btn btn-primary">Ir para noticia</a>
              </div>
            </div>
          </div>
    </div>`;

    listaDeNoticias.insertAdjacentHTML("beforeend", card);
  });
}

getNews();
