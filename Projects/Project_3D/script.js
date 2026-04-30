const API_KEY = "e3a560162abab13e1f0a1acde1e54ab8";
const BASE = "https://api.openweathermap.org";

// State
let state = {
  history: JSON.parse(localStorage.getItem("history")) || []
};

// Elements
const refs = {
  form: document.getElementById("searchForm"),
  input: document.getElementById("cityInput"),
  locationBtn: document.getElementById("useLocationBtn"),

  location: document.getElementById("locationName"),
  temp: document.getElementById("currentTemp"),
  condition: document.getElementById("currentCondition"),
  time: document.getElementById("currentTime"),

  hourly: document.getElementById("hourlyContainer"),
  daily: document.getElementById("dailyContainer"),
  history: document.getElementById("historyContainer"),

  aqiLevel: document.getElementById("aqiLevel"),
  aqiValue: document.getElementById("aqiValue"),

  themeBtn: document.getElementById("themeToggle"),
  themeText: document.getElementById("themeText"),

  suggestion: document.getElementById("weatherSuggestion")
};

// Init
init();

function init() {
  refs.form.addEventListener("submit", handleSearch);
  refs.locationBtn.addEventListener("click", getLocationWeather);
  refs.themeBtn.addEventListener("click", toggleTheme);

  loadTheme();
  renderHistory();
  getLocationWeather();
}

// Search
function handleSearch(e) {
  e.preventDefault();
  let city = refs.input.value.trim();
  if (!city) return;

  saveHistory(city);
  getCityWeather(city);
}

//  Location
function getLocationWeather() {
  navigator.geolocation.getCurrentPosition(pos => {
    let { latitude, longitude } = pos.coords;
    getWeather(latitude, longitude);
  });
}

//  City → Coordinates
async function getCityWeather(city) {
  let res = await fetch(`${BASE}/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`);
  let data = await res.json();

  if (!data.length) return alert("City not found");

  let { lat, lon, name, country } = data[0];
  getWeather(lat, lon, `${name}, ${country}`);
}

//  Main Weather
async function getWeather(lat, lon, name = "Your Location") {
  try {
    let [curRes, forRes, aqiRes] = await Promise.all([
      fetch(`${BASE}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
      fetch(`${BASE}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`),
      fetch(`${BASE}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    ]);

    let current = await curRes.json();
    let forecast = await forRes.json();
    let aqiData = await aqiRes.json();

    displayCurrent(current, name);
    displayHourly(forecast.list);
    displayDaily(forecast.list);
    displayAQI(aqiData);

  } catch {
    alert("Error fetching data");
  }
}

//  Current
function displayCurrent(data, name) {
  let temp = Math.round(data.main.temp);

  refs.location.textContent = name;
  refs.temp.textContent = `${temp}°C`;
  refs.condition.textContent = data.weather[0].main;
  refs.time.textContent = new Date().toLocaleTimeString();

  // Suggestion
  if (temp > 35) {
    refs.suggestion.textContent = "Very Hot! 🔥";
  } else if (temp < 15) {
    refs.suggestion.textContent = "Cold! ❄";
  } else {
    refs.suggestion.textContent = "Pleasant 😊";
  }
}

//  Hourly
function displayHourly(list) {
  refs.hourly.innerHTML = "";

  list.slice(0, 6).forEach(item => {
    let div = document.createElement("div");
    div.className = "hour-item";

    div.innerHTML = `
      <p>${new Date(item.dt * 1000).getHours()}:00</p>
      <p>${Math.round(item.main.temp)}°C</p>
      <p>${item.weather[0].main}</p>
    `;

    refs.hourly.appendChild(div);
  });
}

//  Daily
function displayDaily(list) {
  refs.daily.innerHTML = "";

  let days = {};

  list.forEach(item => {
    let date = new Date(item.dt * 1000).toDateString();
    if (!days[date]) days[date] = [];
    days[date].push(item);
  });

  Object.keys(days).slice(0, 5).forEach(day => {
    let temps = days[day].map(i => i.main.temp);

    let max = Math.max(...temps);
    let min = Math.min(...temps);

    let div = document.createElement("div");
    div.className = "day-item";

    div.innerHTML = `
      <p>${day}</p>
      <p>${Math.round(max)}° / ${Math.round(min)}°</p>
    `;

    refs.daily.appendChild(div);
  });
}

//  AQI
function displayAQI(data) {
  let aqi = data.list[0].main.aqi;

  const levels = ["", "Good 😊", "Fair 🙂", "Moderate 😐", "Poor 😷", "Very Poor ☠"];

  refs.aqiLevel.textContent = levels[aqi];
  refs.aqiValue.textContent = "AQI: " + aqi;
}

//  History
function saveHistory(city) {
  state.history.unshift(city);

  state.history = state.history
    .filter((c, i, arr) => arr.indexOf(c) === i)
    .slice(0, 5);

  localStorage.setItem("history", JSON.stringify(state.history));
  renderHistory();
}

function renderHistory() {
  refs.history.innerHTML = "";

  state.history.forEach(city => {
    let btn = document.createElement("button");
    btn.textContent = city;
    btn.className = "history-btn";

    btn.onclick = () => getCityWeather(city);

    refs.history.appendChild(btn);
  });
}

//Theme
function toggleTheme() {
  document.body.classList.toggle("light");

  let isLight = document.body.classList.contains("light");
  refs.themeText.textContent = isLight ? "Light" : "Dark";

  localStorage.setItem("theme", isLight ? "light" : "dark");
}

function loadTheme() {
  let saved = localStorage.getItem("theme");

  if (saved === "light") {
    document.body.classList.add("light");
    refs.themeText.textContent = "Light";
  }
}