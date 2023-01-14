// set the year after the copywrite simble
const d = new Date();
document.getElementById("currentyear").textContent = d.getFullYear();

// set the last modified when saved.
document.getElementById("lastupdate").textContent = new Date(document.lastModified);