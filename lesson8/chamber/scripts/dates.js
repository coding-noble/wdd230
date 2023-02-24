// Date Box Code
const currentdate = document.getElementById("datebox");
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(d);
currentdate.innerHTML = `<em>${fulldate}</em>`;