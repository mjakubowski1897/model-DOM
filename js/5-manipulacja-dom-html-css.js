"use strict"

var mainHeader = document.getElementById('main-header'); //przypisujey naglowek strony do zmiennej

//mainHeader.innerHTML = "treść nagłówka"; //dodajemy treść nagłówka

mainHeader.innerText = "treść nagłówka";
mainHeader.outerHTML = "<p>Treść nagłówka</p>";

var link = document.getElementsByClassName('link')[0]; //Przypisujemy pierwszy link do zmiennej

link.href = "http://akademia108.pl"; //Nadpisujemy atrybut href w linki

link.className = "nowa-klasa";
link.classList.add("nowa-klasa"); //dodajemy kolejne klasy
//console.log(link);
link.style.backgroundColor="yellow";

