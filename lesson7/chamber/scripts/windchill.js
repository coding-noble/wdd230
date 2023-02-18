const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");
const tempratureElement = document.getElementById("temprature");
const weatherTypeElement = document.getElementById("weather-type");
const weatherIconElement = document.getElementById("weather-icon");

const weatherIcon = "images/weather-icon.webp"
const temperature = 7;
const speed = 35;

weatherIconElement.setAttribute("src", weatherIcon)
weatherTypeElement.textContent = "Blizzarding";
tempratureElement.textContent = temperature;
windSpeedElement.textContent = speed;

function calcWindChill() {
    if (temperature <= 50 && speed >= 3.0) {
        windChillElement.textContent = (35.74 + 0.6215 * temperature - 35.75 * speed ** 0.16 + 0.4275 * temperature * speed ** 0.16).toFixed(2) + "°F"
    }
};
calcWindChill();
