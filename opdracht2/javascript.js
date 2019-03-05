var buttonLinks = document.querySelector(".links");
var buttonRechts = document.querySelector(".rechts");


function PijlLinks(event) {
  console.log("hoi");
}

function PijlRechts(event) {
    console.log("doei");
}


buttonLinks.addEventListener('click', PijlLinks);
buttonRechts.addEventListener('click', PijlRechts);
