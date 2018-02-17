"use strict";
var istniejacyWezel = document.getElementById('parFirst').children[3];

var newElement = document.createElement('p');
//console.log(newElement);

var newElementContent = document.createTextNode ('to jest nowy paragraf');


newElement.appendChild(newElementContent);


istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');
parFirstDiv.replaceChild(newElement, istniejacyWezel);
//zmaien drugi link na paragraf

console.log(newElement);

var allLinks = document.querySelectorAll('a'); // przypisz do zmiennej tablicę ze wszystkimi linkami

//console.log(allLinks);
//Array.form("nodeList");

for (var i =0; i < allLinks.length; i++) {
    var br = document.createElement('br');
    //console.log(allLinks[i].parentNode)
    allLinks[i].parentNode.insertBefore(br, allLinks[i].nextSibling);
    //Dodaj br po kazdym linki
    allLinks[i].removeAttribute('class'); // usun atrybuty klasy
    
}
