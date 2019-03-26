function VindOudeFilm () {
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        createElement(request.response);
    }
};
}


function createElement(data) {
    for (var item of data) {
        console.log(item ['cover'])


        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myDate = document.createElement('h3');
        var myGerne = document.createElement ('h4');
        var myMiniPlot = document.createElement ('P');
        var myIMG = document.createElement('img');

        myH2.textContent = item.title;
        myDate.textContent = item.release_date;
        myGerne.textContent = item.genres;
        myMiniPlot.textContent = item.simple_plot;
        myIMG.setAttribute('src', item.cover);

        myArticle.appendChild(myIMG);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myDate);
        myArticle.appendChild(myGerne);
        myArticle.appendChild(myMiniPlot);

        document.querySelector('section').appendChild(myArticle);
    }
}


//VindOudeFilm.addEventListener('click', BUTTON??);
