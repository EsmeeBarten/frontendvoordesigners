//BOVENSTE BUTTON
var ZoekButton = document.querySelector('button');
var Loading = document.querySelector('span img');

//LOADING STATE
function loadingZichtbaar() {
    ZoekButton.classList.add('hidden');
}

function loadingHidden() {
    Loading.classList.remove('zichtbaar');
    ZoekFilms();
}


//JSON AANROEPEN
function ZoekFilms() {
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


//VIA ENTER BESTUREN
function enterToets(event, data) {
    if (event.key === "Enter") {
        console.log('enter');

        function loadingZichtbaar() {
            ZoekButton.classList.add('hidden');
        }

        function loadingHidden() {
            Loading.classList.remove('zichtbaar');
            ZoekFilms();
        }

        function ZoekFilms() {
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
                console.log(item['actors']);

                //STANDAARD INFORMATIE
                var myArticle = document.createElement('article');
                myArticle.classList.add('content');

                var myH2 = document.createElement('h2');
                var myDate = document.createElement('h3');
                var myGerne = document.createElement('h4');
                var myMiniPlot = document.createElement('p');
                var myIMG = document.createElement('img');
                var myButton = document.createElement('button');
                myButton.classList.add('leesMeer');

                myH2.textContent = item.title;
                myDate.textContent = item.release_date;
                myGerne.textContent = item.genres;
                myMiniPlot.textContent = item.simple_plot;
                myIMG.setAttribute('src', item.cover);
                myButton.textContent = 'Lees meer';

                myArticle.appendChild(myIMG);
                myArticle.appendChild(myH2);
                myArticle.appendChild(myDate);
                myArticle.appendChild(myGerne);
                myArticle.appendChild(myMiniPlot);
                myArticle.appendChild(myButton);


                //MEER INFORMATIE WEERGEVEN
                var leesMeerContainer = document.createElement('div');
                leesMeerContainer.classList.add('leesMeerContainer');

                //AFBEELDING
                var myIMG2 = document.createElement('img');
                myIMG2.setAttribute('src', item.cover);
                leesMeerContainer.appendChild(myIMG2);

                //LANGE PLOT
                var myPlot = document.createElement('p');
                myPlot.textContent = item.plot;
                leesMeerContainer.appendChild(myPlot);

                //DIRECTOR
                var myDirectorsTitel = document.createElement('h5');
                var myDirector = document.createElement('p');

                myDirectorsTitel.textContent = "Director:";
                myDirector.textContent = item.directors[0].name;

                leesMeerContainer.appendChild(myDirectorsTitel);
                leesMeerContainer.appendChild(myDirector);

                //ACTEURS
                var myBelangrijskteActeurs = document.createElement('h5');
                var myActeursLijst = document.createElement('ul');
                var myActeurs1 = document.createElement('li');
                var myActeurs2 = document.createElement('li');
                var myActeurs3 = document.createElement('li');
                var myActeurs4 = document.createElement('li');

                myBelangrijskteActeurs.textContent = "De belangrijkste acteurs:";
                myActeurs1.textContent = item.actors[0].actor_name + " speelt in de film " + item.actors[0].character;
                myActeurs2.textContent = item.actors[1].actor_name + " speelt in de film " + item.actors[1].character;
                myActeurs3.textContent = item.actors[2].actor_name + " speelt in de film " + item.actors[2].character;
                myActeurs4.textContent = item.actors[3].actor_name + " speelt in de film " + item.actors[3].character;


                leesMeerContainer.appendChild(myBelangrijskteActeurs);
                leesMeerContainer.appendChild(myActeursLijst);
                myActeursLijst.appendChild(myActeurs1);
                myActeursLijst.appendChild(myActeurs2);
                myActeursLijst.appendChild(myActeurs3);
                myActeursLijst.appendChild(myActeurs4);

                //LEESMEERCONTAINER IN ARTICLE PLAATSEN
                myArticle.appendChild(leesMeerContainer);

                //ARTICLE IN SECTION PLAATSEN
                document.querySelector('section').appendChild(myArticle);
            }
            LeesMeerButton();
        }

        function LeesMeerButton() {
            //LEES MEER BUTTONS SELECTEREN
            var buttons = document.querySelectorAll('.leesMeer');

            for (var button of buttons) {
                button.addEventListener('click', function () {
                    var parent = this.parentElement;
                    console.log('click', parent);

                    parent.classList.toggle('active');
                });
            }
        }

        function Loader() {
            Loading.classList.add('zichtbaar');
            loadingZichtbaar();
            setTimeout(loadingHidden, 3000);
        };

        Loader();
    }
};


//VIA CLICK BESTUREN
function createElement(data) {
    for (var item of data) {
        console.log(item['actors']);

        //STANDAARD INFORMATIE
        var myArticle = document.createElement('article');
        myArticle.classList.add('content');

        var myH2 = document.createElement('h2');
        var myDate = document.createElement('h3');
        var myGerne = document.createElement('h4');
        var myMiniPlot = document.createElement('p');
        var myIMG = document.createElement('img');
        var myButton = document.createElement('button');
        myButton.classList.add('leesMeer');

        myH2.textContent = item.title;
        myDate.textContent = item.release_date;
        myGerne.textContent = item.genres;
        myMiniPlot.textContent = item.simple_plot;
        myIMG.setAttribute('src', item.cover);
        myButton.textContent = 'Lees meer';

        myArticle.appendChild(myIMG);
        myArticle.appendChild(myH2);
        myArticle.appendChild(myDate);
        myArticle.appendChild(myGerne);
        myArticle.appendChild(myMiniPlot);
        myArticle.appendChild(myButton);


        //MEER INFORMATIE WEERGEVEN
        var leesMeerContainer = document.createElement('div');
        leesMeerContainer.classList.add('leesMeerContainer');

        //AFBEELDING
        var myIMG3 = document.createElement('img');
        myIMG3.setAttribute('src', item.cover);
        leesMeerContainer.appendChild(myIMG3);

        //LANGE PLOT
        var myPlot = document.createElement('p');
        myPlot.textContent = item.plot;
        leesMeerContainer.appendChild(myPlot);

        //DIRECTOR
        var myDirectorsTitel = document.createElement('h5');
        var myDirector = document.createElement('p');

        myDirectorsTitel.textContent = "Director:";
        myDirector.textContent = item.directors[0].name;

        leesMeerContainer.appendChild(myDirectorsTitel);
        leesMeerContainer.appendChild(myDirector);

        //ACTEURS
        var myBelangrijskteActeurs = document.createElement('h5');
        var myActeursLijst = document.createElement('ul');
        var myActeurs1 = document.createElement('li');
        var myActeurs2 = document.createElement('li');
        var myActeurs3 = document.createElement('li');
        var myActeurs4 = document.createElement('li');

        myBelangrijskteActeurs.textContent = "De belangrijkste acteurs:";
        myActeurs1.textContent = item.actors[0].actor_name + " speelt in de film " + item.actors[0].character;
        myActeurs2.textContent = item.actors[1].actor_name + " speelt in de film " + item.actors[1].character;
        myActeurs3.textContent = item.actors[2].actor_name + " speelt in de film " + item.actors[2].character;
        myActeurs4.textContent = item.actors[3].actor_name + " speelt in de film " + item.actors[3].character;


        leesMeerContainer.appendChild(myBelangrijskteActeurs);
        leesMeerContainer.appendChild(myActeursLijst);
        myActeursLijst.appendChild(myActeurs1);
        myActeursLijst.appendChild(myActeurs2);
        myActeursLijst.appendChild(myActeurs3);
        myActeursLijst.appendChild(myActeurs4);

        //LEESMEERCONTAINER IN ARTICLE PLAATSEN
        myArticle.appendChild(leesMeerContainer);

        //ARTICLE IN SECTION PLAATSEN
        document.querySelector('section').appendChild(myArticle);
    }
    LeesMeerButton();
}

function LeesMeerButton() {

    console.log('Lees Meer')
    //LEES MEER BUTTONS SELECTEREN
    var buttons = document.querySelectorAll('.leesMeer');

    for (var button of buttons) {
        button.addEventListener('click', function () {
            var parent = this.parentElement;
            console.log('click', parent);

            parent.classList.toggle('active');
        });
    }
}


ZoekButton.addEventListener('click', function () {
    Loading.classList.add('zichtbaar');
    loadingZichtbaar();
    setTimeout(loadingHidden, 3000);
});

window.addEventListener('keydown', enterToets);
