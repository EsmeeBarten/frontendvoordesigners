var buttonLinks = document.querySelector(".links");
var buttonRechts = document.querySelector(".rechts");

var afbeen = document.querySelector(".een");
var afbtwee = document.querySelector(".twee");
var afbdrie = document.querySelector(".drie");
var afbvier = document.querySelector(".vier");
var afbvijf = document.querySelector(".vijf");
var afbzes = document.querySelector(".zes");
var afbzeven = document.querySelector(".zeven");
var afbacht = document.querySelector(".acht");

var img = 1;


function PijlRechts(event) {
    console.log("rechts");
    if (img == 1) { //show afb 2
        console.log("twee");
        afbeen.classList.add("hidden");
        afbtwee.classList.add("display");
        img = 2;
    } else if (img == 2) { //show afb 3
        console.log("drie");
        afbtwee.classList.remove("display");
        afbdrie.classList.add("display");
        img = 3;
    } else if (img == 3) { //show afb 4
        console.log("vier");
        afbdrie.classList.remove("display");
        afbvier.classList.add("display");
        img = 4;
    } else if (img == 4) { //show afb 5
        console.log("vijf");
        afbvier.classList.remove("display");
        afbvijf.classList.add("display");
        img = 5;
    } else if (img == 5) { //show afb 6
        console.log("zes");
        afbvijf.classList.remove("display");
        afbzes.classList.add("display");
        img = 6;
    } else if (img == 6) { //show afb 7
        console.log("zeven");
        afbzes.classList.remove("display");
        afbzeven.classList.add("display");
        img = 7;
    } else if (img == 7) { //show afb 8
        console.log("acht");
        afbzeven.classList.remove("display");
        afbacht.classList.add("display");
        img = 0;
    } else if (img == 0) { //show afb 1
        console.log("een");
        afbacht.classList.remove("display");
        afbeen.classList.remove("hidden");
        img = 1;
    }
}

function PijlLinks(event) {
    console.log("links");

    if (img == 1) { //show afb
        console.log("acht");
        afbeen.classList.add("hidden");
        afbacht.classList.add("display");
        img = 7;
    } else if (img == 7) {
        console.log("zeven");
        afbacht.classList.remove("display");
        afbzeven.classList.add("display");
        img = 6;
    } else if (img == 6) {
        console.log("zes");
        afbzeven.classList.remove("display");
        afbzes.classList.add("display");
        img = 5;
    } else if (img == 5) {
        console.log("vijf");
        afbzes.classList.remove("display");
        afbvijf.classList.add("display");
        img = 4;
    } else if (img == 4) {
        console.log("vier");
        afbvijf.classList.remove("display");
        afbvier.classList.add("display");
        img = 3;
    } else if (img == 3) {
        console.log("drie");
        afbvier.classList.remove("display");
        afbdrie.classList.add("display");
        img = 2;
    } else if (img == 2) {
        console.log("twee");
        afbdrie.classList.remove("display");
        afbtwee.classList.add("display");
        img = 0;
    } else if (img == 0) {
        console.log("een");
        afbtwee.classList.remove("display");
        afbeen.classList.remove("hidden");
        img = 1;
    }
}


buttonLinks.addEventListener('click', PijlLinks);
buttonRechts.addEventListener('click', PijlRechts);
