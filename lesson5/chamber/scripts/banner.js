let meeding_day = document.getElementById("meeting_day");

if (d.getDay() === 1) {
    meeding_day.textContent = "Monday"

} else if (d.getDay() === 4) {
    meeding_day.textContent = "Thursday"

} else document.getElementById("meeting_banner").style.display = "none"