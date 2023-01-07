
let d = new Date();
let thisyear = d.getFullYear();
document.getElementById("currentyear").textContent = thisyear;

let olastmodif = new Date(document.lastModified);

document.getElementById("lastupdate").textContent = olastmodif;