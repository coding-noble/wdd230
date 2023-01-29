// Date Box Code
const currentdate = document.getElementById("datebox");

const date = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
    date
);

currentdate.innerHTML = `<em>${fulldate}</em>`;