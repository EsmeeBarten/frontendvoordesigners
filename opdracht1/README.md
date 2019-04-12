# frontend voor designers

Opdracht 1      Drag & Drop

PROTOTYPES
1. [Versie 1](https://esmeebarten.github.io/frontendvoordesigners/opdracht1/v1/)
2. [Versie 2](https://esmeebarten.github.io/frontendvoordesigners/opdracht1/v2/)

OPDRACHT
De eerste opdracht was Drag & Drop.
De case voor deze opdracht was: "In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een vette playlist te maken."
Voor de opdracht was het de bedoeling dat je ervoor zorgde dat je de volgorde van de nummers in de playlist kon veranderen doormiddel van de drag & drop techniek.
We mochten zelf een apparaat en browser kiezen waarin we hebt wilde maken. Ik heb gekozen voor een 13" laptop in Google Chrome.


CRITERIA'S
De criteria's aan de opdracht zijn:
- De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
- De Principles of User Interface Design nummer 04 & 11 zijn goed toegepast.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github.


CODE
Drag & Drop opdracht vond ik een erg uitdagende opdracht om te doen! Ik heb er veel tijd in gestoken, maar het is gelukt.
Ik heb veel verschillende soorten van deze code bekeken en van meerdere codes mijn eigen code gemaakt.
Je kan je item op pakken en weer terugzetten in de lijst. Het item komt altijd boven zijn parent.

In HTML heb ik een lijst gemaakt en de items verplaatsbaar gemaakt met draggable="true".
De functie dragStart is eigenlijk de belangrijkste functie uit de code.
In deze functie zorg ik ervoor dat via event.target het goede element, het element dat je op pakt, geselecteerd wordt.
Daarna geef ik aan dat hij mag verplaatsen en zich niet hoeft te kopiëren en dat de inhoud van het item hetzelfde blijft.

In de functies dragEnter, dragLeave en drop zorg ik ervoor dat de groene lijn die aangeeft waar je je item kan laten vallen
zichtbaar is als het nodig is en weer weg gaat wanneer je je item hebt laten vallen.
Deze functies herhalen zich constant bij elk item die je oppakt.

Om voor de gebruiker duidelijk te maken dat je de items op kan pakken heb ik ervoor gezorgt dat als je over een item heen gaat de muis verander in de move versie van de muis.


PRINCIPLES OF  UI DESIGN
4. Keep users in control
Dit principle zie je terug in dat de user de items op kan pakken en zelf kan bepalen waar hij hem weer neer zet.
Daarnaast helpt de groene blok om te laten zien waar je het item kan neerzetten.

11. Strong visual hierarchies work best
Door verschillende lettertypes en kleuren te gebruiken heb ik ervoor gezorgt dat je als eerste naar de titels kijkt en daarna na de lijst met items.

TESTEN
Ik heb de playlist gestetst in week 2.
In versie 1 tripte het groene balkje die aangeeft waar je je item kan laten vallen hem steeds.
Elke keer als je je item beweegt komt er ook bovenaan de lijst een groene lijn waardoor het erg verwarrend is waar je het item nou kan laten vallen.
En waar die dan heen zou gaan.
Dit heb ik in versie 2 opgelost. Ook heb ik meer kleur toegebracht in versie 2 en een betere kwaliteit foto toegevoegd.
