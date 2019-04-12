# frontend voor designers

Opdracht 2      Carousel

PROTOTYPES
1. [Versie 1](https://esmeebarten.github.io/frontendvoordesigners/opdracht2/v1/)
2. [Versie 2](https://esmeebarten.github.io/frontendvoordesigners/opdracht2/v2/)

OPDRACHT
De case voor deze opdracht was: "Carrousel met vakantiefoto's: Een carrousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord."
De opdracht was dat je een carrousel met vakantiefoto’s maakte en die kon bedienen met de pijltjes toetsen op de toetsenbord maar ook gewoon met de muis.
Ondanks dat het misschien niet de meest uitdagende opdracht was ben ik wel blij dat ik hem gedaan heb, omdat ik veel zelf kon schrijven en het daardoor nog beter ben gaan begrijpen.


CRITERIA'S
- In de demo maak je gebruik van twee of meer verschillende UI-events om de functionaliteit te bedienen.
- In de demo dien je rekening te houden met de interface design principles 06, 08 en/of 14 van Principles of User Interface Design.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github.
- Voeg ook je breakdown-schets toe, en beschrijf je eerste idee en technische opzet en hoe het uiteindelijk is geworden.


CODE
De code is erg uitgebreid. Ik denk zeker dat dit korter kan maar kreeg dat niet zelf voor elkaar.
Toch ben ik best trots op dat het gelukt is. Ik heb maar weinig dingen van internet af hoeven halen en kon de meeste code zelf schrijven.

Ik heb in HTML twee buttons en een aantal afbeeldingen gezet en heb deze met CSS op de goede plek gezet en gezorgd dat je maar 1 afbeelding ziet.
Daarna ben ik in Javascript verder gegaan. Ik heb de afbeeldingen gedefinieerd en allemaal een eigen variabele gegeven. Hierdoor kan ik ze allemaal makkelijk aanroepen.
Ik ben begonnen met het schrijven van het script voor het click event. Ik heb bovenaan de variabele img aangemaakt om de afbeeldingen te tellen.

Als je op 1 van de knoppen drukt gaat het script controleren welk cijfer var img heeft.
Als var img bijvoorbeeld 1 is gaat hij dat stukje van het script volgen:
if (img == 1) { //show afb 2
    console.log("twee");                //Controle of hij het doet
    afbeen.classList.add("hidden");        //Hij haalt afbeelding 1 weg door hem de class hidden te geven
    afbtwee.classList.add("display");    //De tweede afbeelding komt tevoorschijn door de class display.
    img = 2;                            //Daarna maakt hij de variabele img 2
}

Zo volgen de afbeeldingen elkaar op als je op de buttons klikt.
Als je de pijltjes toetsen wil gebruiken werkt het hetzelfde enkel wordt hier van te voren gecontroleerd of je de pijltjes toetsen gebruikt door e.keyCode.  Links = 37 en Rechts is 39.


PRINCIPLES OF  UI DESIGN
6. One primary action per screen
Op de pagina kan je alleen maar het carrousel bekijken. Je hebt geen meerdere acties.

8. Provide a natural next step
De pijlen op de grote knoppen geven duidelijk aan dat je naar links of rechts kan gaan.


TESTEN
Uit de test met versie 1 bleek dat het carrousel erg saai. Alles was grijs en de tekst op de foto was slecht leesbaar
(Niet te zien in versie 1, i.v.m. dat ik die gelijk vervangen heb en vergeten een versie te maken).
Ik heb de tekst op de foto zwart gemaakt en nieuwe beelden geselecteerd waarop de tekst goed te lezen is.
Verder heb ik de knoppen groen gemaakt zodat ze bij de foto's passen. En kan je in versie 2 het carrousel ook met de pijltjes besturen.
Bij versie 1 kon de gebruiker nog niet de pijltjes toetsen gebruiken om het te besturen.
