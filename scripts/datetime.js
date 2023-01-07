
let d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").textContent = year;

let olastmodif = new Date(document.lastModified);

document.getElementById("lastupdate").textContent = olastmodif;