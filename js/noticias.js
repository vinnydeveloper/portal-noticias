const API_KEY = "a7c47d67d09b410298a02f830d42c34a";
const BASE_URL = "https://newsapi.org/v2";

const listaDeNoticias = document.querySelector("#listaDeNoticias");

async function getNews() {
  let data = {};
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?country=br`, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    data = await response.json();
  } catch {
    data = {
      status: "ok",
      totalResults: 33,
      articles: [
        {
          source: { id: "globo", name: "Globo" },
          author: null,
          title:
            "Saques do FGTS: trabalhador vai poder sacar até R$ 1 mil - Globo.com",
          description: "Saques serão permitidos até 15 de dezembro.",
          url: "https://g1.globo.com/economia/noticia/2022/03/17/saques-do-fgts-trabalhador-vai-poder-sacar-ate-r-1-mil.ghtml",
          urlToImage:
            "https://s2.glbimg.com/7ZfAaLoufp6dj1NEKMZpbqkJHq8=/1200x/smart/filters:cover():strip_icc()/s02.video.glbimg.com/x720/10330989.jpg",
          publishedAt: "2022-03-17T20:10:52Z",
          content:
            "Os trabalhadores vão poder sacar até R$ 1 mil de contas ativas e inativas do Fundo de Garantia do Tempo de Serviço (FGTS) a partir de 20 de abril. O anúncio foi feito pelo governo nesta quinta-feira … [+672 chars]",
        },
        {
          source: { id: "globo", name: "Globo" },
          author: null,
          title:
            "Governo anuncia antecipação do 13º de aposentados do INSS e saque de R$ 1 mil do FGTS - Globo.com",
          description:
            "Bolsonaro assinou medida provisória em cerimônia no Planalto. Pacote inclui ampliação do limite do empréstimo consignado, que será liberado para beneficiários do BPC e do Auxílio Brasil.",
          url: "https://g1.globo.com/politica/noticia/2022/03/17/governo-anuncia-antecipacao-do-13o-de-aposentados-do-inss-e-saque-de-r-1-mil-do-fgts.ghtml",
          urlToImage:
            "https://s2.glbimg.com/Ku6Nim2KjHAl-gQtfVXVWd2-h6k=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/10391904.jpg",
          publishedAt: "2022-03-17T20:05:00Z",
          content:
            "O governo federal anunciou nesta quinta-feira (17) a antecipação do pagamento do 13º salário de aposentados e pensionistas da Previdência e o saque de até R$ 1 mil no Fundo de Garantia do Tempo de Se… [+4226 chars]",
        },
        {
          source: { id: null, name: "Uol.com.br" },
          author: null,
          title:
            "Máscara deixa de ser obrigatória em ambientes fechados em SP - UOL",
          description:
            "Proteção ainda será exigida, porém, em hospitais, transporte público e estações de metrô e trem",
          url: "https://www1.folha.uol.com.br/equilibrioesaude/2022/03/mascara-deixa-de-ser-obrigatoria-em-ambientes-fechados-em-sp.shtml",
          urlToImage:
            "https://f.i.uol.com.br/fotografia/2022/03/17/1647543140623383649d633_1647543140_3x2_rt.jpg",
          publishedAt: "2022-03-17T19:54:00Z",
          content:
            'O uso de máscara deixa de ser obrigatório em ambientes fechados no estado de São Paulo nesta quinta (17). O governador João Doria (PSDB) anunciou a decisão durante o programa "Brasil Urgente" (Band),… [+5467 chars]',
        },
        {
          source: { id: null, name: "Uol.com.br" },
          author: "Stefanie Ramos",
          title:
            "Pedri faz golaço, Barça vence Galatasaray e vai às quartas da Liga Europa - UOL Esporte",
          description:
            "O Barcelona venceu o Galatasaray, hoje (17), por 2 a 1, e garantiu sua classificação para as quartas de final da Liga Europa. Os gols da partida foram marcados por Marcão, para os leões, Pedri e Aubameyang, para os catalães.Numa partida muito movimentada,",
          url: "https://www.uol.com.br/esporte/futebol/ultimas-noticias/2022/03/17/oitavas-de-final-liga-europa-galatasaray-x-barcelona.htm",
          urlToImage:
            "https://conteudo.imguol.com.br/c/esporte/33/2022/03/17/pedri-comemora-gol-marcado-pelo-barcelona-sobre-o-galatasaray-na-liga-europa-2021-22-1647541731035_v2_615x300.jpg",
          publishedAt: "2022-03-17T19:39:56Z",
          content:
            "O Barcelona venceu o Galatasaray, hoje (17), por 2 a 1, e garantiu sua classificação para as quartas de final da Liga Europa. Os gols da partida foram marcados por Marcão, para os leões, Pedri e Auba… [+3844 chars]",
        },
        {
          source: { id: "globo", name: "Globo" },
          author: null,
          title:
            "Após lucro recorde, Correios voltam a pagar dividendos à União e PLR aos funcionários - Globo.com",
          description:
            "Pagamentos serão feitos após a aprovação da assembleia geral, marcada para abril. Estatal zerou prejuízos e fechou 2021 com lucro acumulado de R$ 1,4 bilhão.",
          url: "https://g1.globo.com/economia/noticia/2022/03/17/apos-lucro-recorde-correios-voltam-a-pagar-dividendos-a-uniao-e-plr-aos-funcionarios.ghtml",
          urlToImage:
            "https://s2.glbimg.com/hAE3fYk1Gy-41F91ITSD3QjLnjc=/1200x/smart/filters:cover():strip_icc()/s01.video.glbimg.com/x720/9745660.jpg",
          publishedAt: "2022-03-17T19:39:53Z",
          content:
            "A União vai receber em dividendos (parcela distribuída aos acionistas) R$ 251 milhões. Para os funcionários, a empresa vai distribuir R$ 63 milhões. A última distribuição de dividendos e de participa… [+2920 chars]",
        },
        {
          source: { id: null, name: "Fogaonet.com" },
          author: "FogãoNET",
          title:
            "Ao buscar Patrick de Paula e repatriar atletas, Botafogo mostra força em primeiras negociações como SAF - FogãoNET",
          description:
            "Depois de anos no papel de mero observador, o Botafogo vem dando mostras que está disposto a se tornar um agente ativo no mercado nas primeiras negociações ...",
          url: "https://www.fogaonet.com/noticias-do-botafogo/ao-buscar-patrick-de-paula-repatriar-atletas-botafogo-mostra-forca-primeiras-negociacoes-saf/",
          urlToImage:
            "https://i.fogaonet.com/crop/rs:fill:1200:630:1/g:ce/plain/wp-content/uploads/2022/03/51940611836-31e83dbb4a-o-scaled.jpg",
          publishedAt: "2022-03-17T19:36:00Z",
          content:
            "Depois de anos no papel de mero observador, o Botafogo vem dando mostras que está disposto a se tornar um agente ativo no mercado nas primeiras negociações como Sociedade Anônima de Futebol (SAF). Al… [+3554 chars]",
        },
        {
          source: { id: null, name: "Metropoles.com" },
          author: null,
          title:
            "BBB22: Natália é chamada no confessionário após briga generalizada - Metrópoles",
          description:
            "A mineira foi chamada no confessionário para receber atendimento psicológico após causar uma briga generalizada no BBB22",
          url: "https://www.metropoles.com/entretenimento/bbb/bbb22-natalia-e-chamada-no-confessionario-apos-briga-generalizada",
          urlToImage:
            "https://uploads.metropoles.com/wp-content/uploads/2022/03/17155545/Natalia-7.jpg",
          publishedAt: "2022-03-17T19:00:00Z",
          content:
            "Natália Deodato, de 22 anos, é modelo, empreendedora e promotora de eventos. Natural de Sabará, em Minas Gerais, a jovem se considera uma faz tudo, sonha em ser famosa e trabalhar na TVReprodução/Ins… [+1706 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "Bárbara Saryne",
          title:
            'Em volta dos eliminados, Naiara Azevedo e Larissa prometem "fogo" - Yahoo Vida e Estilo',
          description: "Dinâmica acontecerá na noite desta quinta-feira (17)",
          url: "https://br.vida-estilo.yahoo.com/em-volta-dos-eliminados-naiara-azevedo-e-larissa-prometem-fogo-183748302.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/vOHVhqG5mObSJN_Y7Ua9bw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NDY-/https://s.yimg.com/os/creatr-uploaded-images/2022-03/27a689c0-a621-11ec-9427-65f217b06851",
          publishedAt: "2022-03-17T18:37:48Z",
          content:
            'Elenco do "BBB 22" nem imagina a surpresa (Foto: Reprodução/Globo)\r\nOs eliminados do "BBB 22" voltam para uma dinâmica (ainda secreta) nesta quinta-feira (17). Embora Boninho esteja fazendo suspense,… [+2084 chars]',
        },
        {
          source: { id: null, name: "Opovo.com.br" },
          author: "Henrique Araújo",
          title:
            "TJ-CE escolhe sete novos desembargadores; veja os nomes - O POVO",
          description:
            "Na lista por antiguidade, que contemplava nove magistrados da entrância final, o TJ-CE elegeu para o cargo os juízes Carlos Augusto Gomes Correia, José Evandro Nogueira Lima Filho e Maria Ilna Lima de Castro",
          url: "https://www.opovo.com.br/noticias/politica/2022/03/17/tj-ce-escolhe-sete-novos-desembargadores-veja-os-nomes.html",
          urlToImage:
            "https://www.opovo.com.br/reboot/includes/assets/img/logo_og.png",
          publishedAt: "2022-03-17T18:06:00Z",
          content:
            "O Tribunal de Justiça do Ceará definiu nesta quinta-feira (17) sete das oito vagas para novos desembargadores da instituição. Dos escolhidos, cinco são mulheres. \r\nNa lista por antiguidade, que conte… [+1996 chars]",
        },
        {
          source: { id: null, name: "R7.com" },
          author: "R7.com",
          title:
            "Veja a primeira imagem espetacular fotografada pelo telescópio espacial James Webb - R7",
          description:
            "Foto de estrela divulgada pela Nasa foi captada para testar os instrumentos ópticos já alinhados do poderoso telescópio",
          url: "http://noticias.r7.com/tecnologia-e-ciencia/veja-a-primeira-imagem-espetacular-fotografada-pelo-telescopio-espacial-james-webb-17032022",
          urlToImage:
            "https://img.r7.com/images/telescopio-james-webb-alinhamento-espelhos-17032022141045501?dimensions=771x420&",
          publishedAt: "2022-03-17T17:31:00Z",
          content:
            "O telescópio espacial James Webb completou mais uma etapa de seu processo e enviou a primeira imagem focada, após seus espelhos se alinharem quase totalmente. A foto acima é da estrela 2MASS J1755404… [+2454 chars]",
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title:
            '"Eu DUVIDO MUITO que o Corinthians contra o Palmeiras vai..." Vampeta É DIRETO ANTES do DÉRBI! - Jovem Pan Esportes',
          description: null,
          url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_Sy32EHeoB0",
          urlToImage: null,
          publishedAt: "2022-03-17T16:29:07Z",
          content: null,
        },
        {
          source: { id: null, name: "Uol.com.br" },
          author: null,
          title:
            "Putin quer Rússia 'purificada de traidores' contrários à guerra na Ucrânia - UOL",
          description:
            "Em mais um sinal de endurecimento do governo, Kremlin quer ver opositores fora do país",
          url: "https://www1.folha.uol.com.br/mundo/2022/03/putin-quer-russia-purificada-de-traidores-contrarios-a-guerra-na-ucrania.shtml",
          urlToImage:
            "https://f.i.uol.com.br/fotografia/2022/03/13/1647200945622e4ab1bf985_1647200945_3x2_rt.jpg",
          publishedAt: "2022-03-17T16:17:00Z",
          content:
            'Em mais um sinal preocupante para aqueles que temem o endurecimento do controle de Vladimir Putin sobre a Rússia, o Kremlin disse nesta quinta (17) que o país precisa passar por uma "autopurificação"… [+6798 chars]',
        },
        {
          source: { id: null, name: "Bolavip" },
          author: "Rafael Belmont",
          title:
            "BBB 22: Gustavo deixa Arthur de lado e pede outro brother no Paredão: “Se ele não for, aperto o botão e des... - Bolavip Brasil",
          description:
            "O brother, que tem rivalizado com Arthur Aguiar nos últimos dias, também tem outro participante na mira",
          url: "https://br.bolavip.com/entretenimento/BBB-22-Gustavo-deixa-Arthur-de-lado-e-pede-outro-brother-no-Paredao-Se-ele-nao-for-aperto-o-botao-e-desisto-20220317-0092.html",
          urlToImage:
            "https://bolavip.com/__export/1647533024586/sites/bolavip/img/2022/03/17/9fdc06a5-ad28-4dfc-8825-16575b32cf74_crop1647532985873.jpg_242310155.jpg",
          publishedAt: "2022-03-17T16:03:48Z",
          content:
            "Ontem (16), o Baile de Máscaras deu o que falar no BBB 22. Além dos acontecimentos na briga entre Natália e Lina, outros brother conversaram sobre jogo e projetaram o próximo Paredão. Em determinado … [+1211 chars]",
        },
        {
          source: { id: null, name: "Tudocelular.com" },
          author: "TudoCelular.com",
          title:
            "Samsung apresenta Galaxy A73 5G com recursos de top de linha e câmera de 108 MP - TudoCelular.com",
          description:
            "Este modelo não apareceu no vídeo do evento realizado pela coreana, porém já tem seus detalhes oficializados.",
          url: "https://www.tudocelular.com/samsung/noticias/n187505/samsung-apresenta-galaxy-a73-5g-camera-108-mp.html",
          urlToImage: "https://t2.tudocdn.net/615790?w=1920",
          publishedAt: "2022-03-17T14:37:23Z",
          content:
            "Na manhã desta quinta-feira (17), a Samsung oficializou os seus novos celulares intermediários. O principal deles é o Galaxy A73 5G, que vem com uma série de recursos antes presentes apenas nos tops … [+3464 chars]",
        },
        {
          source: { id: null, name: "Opovo.com.br" },
          author: "Filipe Pereira",
          title:
            "Danilo Gentili compara deputado André Fernandes a vilão pedófilo de filme censurado - O POVO",
          description:
            "O comediante resgatou uma publicação do deputado cearense de 2012 em que ele escreve: Tio o que é pedofilia? Vem cá sobrinha senta no meu colo pra eu te explicar",
          url: "https://www.opovo.com.br/noticias/politica/2022/03/17/danilo-gentili-compara-deputado-andre-fernandes-a-vilao-pedofilo-de-filme-censurado.html",
          urlToImage:
            "https://www.opovo.com.br/reboot/includes/assets/img/logo_og.png",
          publishedAt: "2022-03-17T14:22:00Z",
          content:
            "O comediante e apresentador Danilo Gentili usou as redes sociais, nesta quinta-feira, 17, para rebater as acusações de “incentivo à pedofilia” a uma cena de seu filme “Como Se Tornar o Pior Aluno da … [+4057 chars]",
        },
        {
          source: { id: "google-news", name: "Google News" },
          author: null,
          title:
            "Em Um Lugar ao Sol, Santiago surta com podre de Christian: 'Não tinha direito' - Notícias da TV",
          description: null,
          url: "https://news.google.com/__i/rss/rd/articles/CBMigAFodHRwczovL25vdGljaWFzZGF0di51b2wuY29tLmJyL25vdGljaWEvbm92ZWxhcy9lbS11bS1sdWdhci1hby1zb2wtc2FudGlhZ28tc3VydGEtY29tLXBvZHJlLWRlLWNocmlzdGlhbi1uYW8tdGluaGEtZGlyZWl0by03NzI4M9IBAA?oc=5",
          urlToImage: null,
          publishedAt: "2022-03-17T13:29:00Z",
          content: null,
        },
        {
          source: { id: "google-news", name: "Google News" },
          author: null,
          title:
            "Informações sobre Ingressos – Flamengo x Vasco – Cariocão – Club de Regatas Vasco da Gama - Notícia do Vasco",
          description: null,
          url: "https://news.google.com/__i/rss/rd/articles/CBMiVWh0dHBzOi8vdmFzY28uY29tLmJyL2luZm9ybWFjb2VzLXNvYnJlLWluZ3Jlc3Nvcy1mbGFtZW5nby14LXZhc2NvLWNhbXBlb25hdG8tY2FyaW9jYS_SAQA?oc=5",
          urlToImage: null,
          publishedAt: "2022-03-17T13:18:37Z",
          content: null,
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title: "Rússia evita 'default' | AFP - AFP Português",
          description:
            "O ministério russo das Finanças disse, nesta quinta-feira (17), que pagou os juros de dois títulos estrangeiros, em meio a temores de que o país pudesse entr...",
          url: "https://www.youtube.com/watch?v=9tukzRqQ9dI",
          urlToImage: "https://i.ytimg.com/vi/9tukzRqQ9dI/hqdefault.jpg",
          publishedAt: "2022-03-17T13:14:00Z",
          content: null,
        },
        {
          source: { id: "google-news", name: "Google News" },
          author: null,
          title:
            "Quaest em SP: Haddad tem 24%; França, 18%; Tarcísio, 9%; Boulos, 7% - Política Estadão",
          description: null,
          url: "https://news.google.com/__i/rss/rd/articles/CBMinAFodHRwczovL3BvbGl0aWNhLmVzdGFkYW8uY29tLmJyL25vdGljaWFzL2dlcmFsLHBlc3F1aXNhLXF1YWVzdC1nZW5pYWwtZmVybmFuZG8taGFkZGFkLW1hcmNpby1mcmFuY2EtdGFyY2lzaW8tZnJlaXRhcy1ndWlsaGVybWUtYm91bG9zLWdvdmVybm8tc3AsNzAwMDQwMTExODLSAQA?oc=5",
          urlToImage: null,
          publishedAt: "2022-03-17T12:57:05Z",
          content: null,
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title:
            "Guerra Rússia x Ucrânia: veja imagens do teatro atacado em Mariupol - UOL",
          description:
            "A Ucrânia afirmou nesta quinta-feira que a Rússia destruiu um teatro que abrigava mais de mil pessoas na cidade portuária sitiada de Mariupol, no sul do país...",
          url: "https://www.youtube.com/watch?v=jT6Z-W9Rhv4",
          urlToImage: "https://i.ytimg.com/vi/jT6Z-W9Rhv4/maxresdefault.jpg",
          publishedAt: "2022-03-17T12:42:04Z",
          content: null,
        },
      ],
    };
  }

  data.articles.forEach((article) => {
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
