// API key variable
const API_KEY = '976414a0f8a7d6067913a199a8978ee0';


// DOM Elements
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-btn');
const weatherContainer = document.getElementById('weather-container');

// Event Listeners
searchButton.addEventListener('click', fetchWeatherData);

// Function to fetch weather data
function fetchWeatherData() {
  const city = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

  // Clear previous weather information
  weatherContainer.innerHTML = '';

  // Fetch weather data from the API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the weather data
      const cityName = data.city.name;
      const temperature = data.list[0].main.temp;
      const humidity = data.list[0].main.humidity;
      const tempF = conversionToF(temperature)
        console.log(data);
        console.log(cityName); 
        console.log(temperature);
        console.log(humidity);
        console.log(tempF);
             
      displayWeatherInfo(city, tempF, humidity);
    })
}

// Function to convert kelvin to fahrenheit, and round down to nearest decimal
function conversionToF(kelvin) {
    return Math.floor(kelvin - 273.15) * 9/5 + 32;
}

// Function to display weather information to the html
function displayWeatherInfo(city, tempF, humidity) {
  
  const weatherHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${tempF}°F</p>
    <p>Humidity: ${humidity}%</p>
  `;

  weatherContainer.innerHTML = weatherHTML;
}