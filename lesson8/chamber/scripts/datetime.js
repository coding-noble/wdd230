// set the year after the copywrite simble
const d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();

// set the last modified when saved.
let lastUpdate = ('Last Modification: ' + document.lastModified);
document.getElementById("lastupdate").innerHTML = lastUpdate;
