let apiKey = config.SECRET_API_KEY;


const content = document.getElementById('content');

function latestNews() {
    fetch(`http://newsapi.org/v2/everything?q=news&from=2021-03-10&language=de&sortBy=popularity&pageSize=50&apiKey=${apiKey}`)
        .then(response => response.json())
        .then(news => {
            console.log(news);
            content.innerHTML = `<h1>NACHRICHTEN AUS ALLER WELT</h1>`
            news.articles.forEach(e => {

                content.innerHTML += `<section>
                                    <div>
                                    <h2>${e.title === null ? 'No Content Available' : e.title}</h2>
                                    <img src='${e.urlToImage === null ? 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80' : e.urlToImage}' alt="#">
                                    <p>${e.description === null ? 'No Content Available' : e.description}</p>
                                    <p>Datum:<br> ${e.publishedAt.slice(0, 10)}</p>
                                    <a href="${e.url}" target="_blank"><button>Lesen Sie hier den Artikel</button></a>
                                    </div>
                                    </section>`
            })

        })

}
latestNews()


