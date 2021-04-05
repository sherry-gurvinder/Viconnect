const receivedNews = (newsdata) => {
  const articlesDiv = document.querySelector(".articles");
  //looping through all news
    for(var i =0; i<=newsdata.articles.length; i++){
      //creating divs and then add to our news html file
      const div = document.createElement("div");
      div.className = "news";
      div.innerHTML = `
            <h2>${newsdata.articles[i].title}</h2>
            <img src="${newsdata.articles[i].media}"/>
            <p>${newsdata.articles[i].summary}</p>
            <hr>`;
      articlesDiv.appendChild(div);
  };
};

// //sending request to api and js promise running it
fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?lang=en&media=True", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "0ab4ae333bmsh76356bcf87f0d7bp1c4fdcjsnf08afa11ea71",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
})
  .then((response) => response.json())
  .then(receivedNews);
