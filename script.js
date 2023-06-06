console.log("JS OK");

// Questo esercizio richiede un po' di ricerca
// ma anche un po' di domande che accompagnano
// l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano dal Natale?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?




// PRENDO GLI ELEMENTI DAL DOM
const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const hoursElement = document.getElementById("hours");
const daysElement = document.getElementById("days");



// data countdown del natale
let countDownDate = new Date("Dec 25, 2025 00:00:00").getTime();

// funzione
let christmasCounter = setInterval(function () {

    // Prendo la data di oggi
    let now = new Date().getTime();

    // Calcolo la differenza da oggi alla data del natale
    let difference = countDownDate - now;

    // calcolo dei giorni ore minuti e secondi
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);


    // Stampo in pagina
    secondsElement.innerText = seconds;
    minutesElement.innerText = minutes;
    hoursElement.innerText = hours;
    daysElement.innerText = days;

    if (seconds < 10) {
        secondsElement.innerText = "0" + seconds;
    } else if (minutes < 10) {
        minutesElement.innerText = "0" + minutes;
    } else if (hours < 10) {
        hoursElement.innerText = "0" + hours;
    } else if (days < 10) {
        daysElement.innerText = "0" + days;
    } else {
        return;
    }

    if (difference < 0) {
        prompt("MERRY XMAS!");
        clearInterval(x);
    }
}, 1000);