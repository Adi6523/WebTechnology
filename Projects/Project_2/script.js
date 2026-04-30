// DOM Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");
const locationBtn = document.getElementById("locationBtn");

let isManualSearch = false;

// Auto load current location on page load
window.onload = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

            if (!isManualSearch) {
                getWeatherByLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );
            }

        });
    }
};

// Location button (single correct listener)
locationBtn.addEventListener("click", () => {
    if (navigator.geolocation) {

        isManualSearch = false; // switch back to location mode

        navigator.geolocation.getCurrentPosition(
            (position) => {
                getWeatherByLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );
            },
            () => {
                alert("Location access denied!");
            }
        );

    } else {
        alert("Geolocation not supported by your browser");
    }
});

// Search button (manual override)
searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    isManualSearch = true; // override location
    getWeather(city);
    cityInput.value = "";
});

// Reusable display function
function displayWeather(data) {
    weatherResult.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>🌡 Temperature: ${Math.round(data.main.temp)} °C</p>
        <p>☁ Weather: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

// Fetch weather by city
function getWeather(city) {

    const apiKey = "e3a560162abab13e1f0a1acde1e54ab8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    weatherResult.innerHTML = "<p>Loading...</p>";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod != 200) {
                weatherResult.innerHTML = "<p style='color:red;'>City not found!</p>";
                return;
            }

            displayWeather(data);
        })
        .catch(() => {
            weatherResult.innerHTML = "<p style='color:red;'>Error fetching data!</p>";
        });
}

// Fetch weather by location
function getWeatherByLocation(lat, lon) {

    const apiKey = "e3a560162abab13e1f0a1acde1e54ab8";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    weatherResult.innerHTML = "<p>Loading...</p>";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.cod != 200) {
                weatherResult.innerHTML = "<p style='color:red;'>Error fetching location weather!</p>";
                return;
            }

            displayWeather(data);
        })
        .catch(() => {
            weatherResult.innerHTML = "<p style='color:red;'>Error fetching location weather!</p>";
        });
}

searchBtn.addEventListener("click", function () {
    console.log("Button clicked"); // 🔥 check this

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    isManualSearch = true;
    getWeather(city);
});