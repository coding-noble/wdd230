// set the last modified when saved.
document.getElementById("lastupdate").textContent = new Date(document.lastModified);

// set the year after the copywrite simble
let d = new Date();
let year = d.getFullYear();
document.getElementById("currentyear").textContent = year;
