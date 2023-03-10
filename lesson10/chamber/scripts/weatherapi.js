// select HTML elements in the document
const windSpeedElement = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");
const currentTemp = document.getElementById('temperature');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.getElementById('weather-type');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Pinedale,US&units=imperial&appid=9f1370e341d4e9d8bcaa0a780fba8529'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    
    const speed = weatherData.wind.speed;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    windSpeedElement.textContent = speed + " mph";
    windChillElement.textContent = (35.74 + 0.6215 * weatherData.main.temp.toFixed(0) - 35.75 * speed ** 0.16 + 0.4275 * weatherData.main.temp.toFixed(0) * speed ** 0.16).toFixed(2) + "°F"
}
