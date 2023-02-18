const FACTOR = 86400000;

const lastVisit = Number(window.localStorage.getItem("lastVisit"));
const numOfDays = Math.ceil((Date.now() - lastVisit) / FACTOR);
const numVisits = document.getElementById("last-visit");

let numOfVisits = window.localStorage.getItem("visits");

localStorage.setItem("lastVisit", Date.now());
localStorage.setItem("visits", numOfVisits);

numOfVisits = parseInt(numOfVisits) + 1;

if (numOfVisits != 0) {
    numVisits.innerHTML = numOfDays;
}