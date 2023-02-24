// set the year after the copywrite simble
const d = new Date();
const dateTime = d.toLocaleString();
const hiddenFormTime = document.getElementById("date-time");
document.getElementById("currentyear").textContent = d.getFullYear();

// set the last modified when saved.
let lastUpdate = ('Last Modification: ' + document.lastModified);
document.getElementById("lastupdate").innerHTML = lastUpdate;

hiddenFormTime.setAttribute("value", dateTime);