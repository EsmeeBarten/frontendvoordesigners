# frontend voor designers

Opdracht 3      API films

PROTOTYPES
1. [Versie 1](https://esmeebarten.github.io/frontendvoordesigners/opdracht3/v1/)
2. [Versie 2](https://esmeebarten.github.io/frontendvoordesigners/opdracht3/v2/)


OPDRACHT
De opdracht is dat je met JSON data een film database maakt.
De elementen moeten van de JSON file via Javascript worden ingeladen in HTML.
Je moet de HTML op twee manieren kunnen besturen.


CRITERIA'S
- De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
- De data wordt van een externe bron ingeladen met Javascript
- In de demo maak je gebruik van meerdere verschillende UI events zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
- Verschillende states van de UI stack worden opgevangen en zijn vormgegeven.
- In de demo dien je rekening te houden met de interface design principles 04, 09 en 11 van Principles of User Interface Design.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github


CODE
In de HTML heb ik zo min mogelijk neer gezet voordat ik begon. Enkel de titel en een knop welke je gelijk ziet als je op de pagina komt.
Daarna ben ik begonnen met het inladen van de elementen uit de JSON file.
Ik zoek de elementen in de JSON file door ze in de console log te loggen doormiddel van console.log(item['title']);

Daarna maak een HTML element aan, bijvoorbeeld een H2, door de code var myH2 = document.createElement('h2'); te gebruiken.
Als ik het HTML element heb aangemaakt vul ik hem met de informatie uit de JSON file door de code myH2.textContent = item.title;.
Nu het element is aangemaakt en gevuld is ga ik hem in een ander HTML element plaatsen, voor nu een Article.
Dit doe ik doormiddel van de code myArticle.appendChild(myH2);.
Het artikel heb ik voor de tijd op dezelfde manier in de section gedaan die al in de HTML stond.
Op deze manier heb ik mijn hele HTML opgebouwd met de informatie die ik nodig had voor de eerste opzet.

Als laatste maak ik een div aan voor de extra informatie die ik wil tonen. De informatie die ik graag in het extra venster wil tonen zet ik daarin.
Via CSS zorg ik ervoor dat je de informatie niet gelijk ziet, maar dat je het pas ziet als je op de knop 'lees meer' drukt.
Deze knop word gestuurd door de functie LeesMeerButton die ervoor zorgt dat je de extra informatie te zien krijgt.

function LeesMeerButton() {
console.log('Lees Meer')                                //Checken of de functie het doet
var buttons = document.querySelectorAll('.leesMeer');   //Selecteer alles elementen met de class leesMeer (dit zijn de buttons)
for (var button of buttons) {                           //Loop door de buttons heen
    button.addEventListener('click', function () {      //Als je op 1 van de buttons klikt:
     console.log('click', parent);                      //Extra check of die het doet
    var parent = this.parentElement;                    //Pakt het element boven die button, de div in dit geval
    parent.classList.toggle('active');                  //Geeft de div de class active waardoor die zichbaar wordt of zet hem uit
        });
    }
}

De loading state krijg je te zien als je op de knop "Zoek films" drukt.
Dit komt omdat hij dan eerst een andere functie (loadingZichtbaar) gaat afspelen waar de gif zichbaar wordt gemaakt en naar 3sec weer onzichbaar.
Aan het einde van die functie worden de films pas ingeladen.

Als laatste heb ik weer de toetsenbord besturing toegevoegd.
Je kan de eerste knop ook bedienen door op enter te drukken.
Ik heb dit op dezelfde manier gedaan als bij opdracht 2, event.key === "Enter".


PRINCIPLES OF  UI DESIGN
4. Keep users in control
De gebruiker kan overal op klikken zonder dat er gekke dingen gebeuren.

9. Appearance follows behavior
De knoppen zeggen duidelijk wat er gebeurt en door de donkere schaduw is het duidelijk dat je op de knop kan drukken.

11. Strong visual hierarchies work best
De belangrijke stukken tekst, zoals de titel, zijn grote dan de rest van de teksten.
De kopjes zijn dik gedrukt zodat je makkelijk kan scannen wat je wil weten.


TESTEN
Ik heb in week 9 getest en daar kwam uit dat de gebruiker een loading state miste.
Dit heb ik toegevoegd in versie 2. Ook de knop "Zoek films" heb ik weg gehaald als er eenmaal 1x op gedrukt is.
Hierdoor heeft de gebruiker niet het idee dat er meer komt als hij er vaker op klikt.
Het was de bedoeling dat de extra informatie stukken precies over de oude tekst heen vielen, maar dit kreeg ik niet opgelost.
