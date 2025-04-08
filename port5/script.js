const apiKey = '9a9dabf62d60be5637a0dc6f98cad0a9'; // Replace with your actual API key

// Get Weather Data
function getWeatherData() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
                fetchForecast(data.coord.lat, data.coord.lon);
            } else {
                alert(data.message);
            }
        })
        .catch(error => alert('Error fetching weather data: ' + error));
}

// Display Weather
function displayWeather(data) {
    const temp = data.main.temp;
    const condition = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const smiley = condition.includes('rain') ? '☹️' : '😊';

    document.getElementById('temp').innerText = `Temperature: ${temp}°C`;
    document.getElementById('condition').innerText = `Condition: ${condition}`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind').innerText = `Wind: ${wind} km/h`;
    document.getElementById('smiley').innerText = smiley;
}

// Fetch 7-Day Forecast
function fetchForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayForecast(data.daily);
        })
        .catch(error => alert('Error fetching forecast data: ' + error));
}

// Display Forecast Chart
function displayForecast(daily) {
    const labels = daily.map(day => new Date(day.dt * 1000).toLocaleDateString());
    const temperatures = daily.map(day => day.temp.day);

    const ctx = document.getElementById('forecast-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: '#0288d1',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            animation: {
                duration: 1500,
                easing: 'easeInOutQuad'
            }
        }
    });
}

// Handle Navigation
$(document).ready(function() {
    $(".nav-link").click(function(e) {
        e.preventDefault();
        const targetPage = $(this).attr("href");
        window.location.href = targetPage;
    });
});

// Additional Function to Get Weather Data and Forecast for Forecast Page
function getForecastDataForPage() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherForForecastPage(data);
                fetchForecast(data.coord.lat, data.coord.lon);
            } else {
                alert(data.message);
            }
        })
        .catch(error => alert('Error fetching weather data: ' + error));
}

// Display Weather for Forecast Page
function displayWeatherForForecastPage(data) {
    const cityName = data.name;
    document.getElementById('city-name').innerText = `City: ${cityName}`;
    document.getElementById('temp').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('condition').innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind: ${data.wind.speed} km/h`;
}
