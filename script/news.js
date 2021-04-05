// key = "50a2ce5640bb4470975dac3abda416d7"; //Apikey generated from news api
const url = `https://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=50a2ce5640bb4470975dac3abda416d7`;

const receivedNews = (newsdata) => {
  const articlesDiv = document.querySelector(".articles");
  //looping through all news
  newsdata.articles.forEach((article) => {
    //creating divs and then add to our news html file
    const div = document.createElement("div");
    div.className = "news";
    div.innerHTML = `
          <h2>${article.title}</h2>
          <img src="${article.urlToImage}"/>`;
    articlesDiv.appendChild(div);
  });
};

// //sending request to api and js promise running it
fetch(url)
  .then((response) => response.json())
  .then(receivedNews);
