let meeding_day = document.getElementById("meeting_day");

if (d.getDay() === 1) {
    meeding_day.textContent = "Monday"

} else if (d.getDay() === 3) {
    meeding_day.textContent = "Wednesday"

} else document.getElementById("meeting_banner").style.display = "none"