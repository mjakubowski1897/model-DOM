"use strict";
//
//var secondLink = document.getElementsByTagName('a')[1]; //tworzymy zmienna z drugim linkiem
//
//function alarm(e) {
//    e.preventDefault(); //zapobiegamy domyślnej akcji !
//    console.log('kliknięto kolejny link');
//    
//    console.log(e.type);
//}
//
//secondLink.oneClick = alarm; //wywołujemy funkcję alarm() na drugim linku po kliknieciu

var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z trzecim linkiem
function alarm(e) {
    e.preventDefault(); 
    console.log('kliknieto kolejny link');
    thirdLink.style.backgroundColor = "red";
    console.log(e.type);
}

thirdLink.addEventListener("click", alarm);
thirdLink.removeEventListener("click", alarm);

var mainHeader = document.getElementById('main-header'); //efekt powiekszenia napiosu po najechaniu

//przypisujey naglowek strony do zmiennej

function resize(e) { //przekazujemy zdarzenie jako paramet funkcji
if (e.type == 'mouseover') {// sprwdzenie typu zdarzenia
mainHeader.style.fontSize = "70px"; //zmień wielkosc fonta po najechaniu
} else {
    mainHeader.style.fontSize = "inherit"; //przywróc domyslna wielkosc po zjechaniu
}
}

mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;

/* zatryzmanie propagacji - po kliknieciu w naglowek console.log(...) wywola sie dwa razy - dodajemy zatrzymanie propagacji i console.log (...) wywoluje sie raz */

function klikHeader() {
    console.log("kliknąłeś w header");
}

document.getElementsByTagName('header')[0].onclick = klikHeader; //wywolaj funkcję na elemencie header

function klikH1(e) {
    //e.stopPropagation(); //odkomentowac, żeby pokazać zatrzymanie propaginacji
    console.log("kliknąęłeś w h1");
}

document.getElementsByTagName('h1')[0].onclick = klikH1; //wywolaj funkcję na elemencie H1

