const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.temp');
const cityElement = document.querySelector('.city');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

const weatherIcons = {
    '01d': 'clear.png',
    '02d': 'clouds.png',
    '03d': 'clouds.png',
    '04d': 'clouds.png',
    '09d': 'rain.png',
    '10d': 'rain.png',
    '11d': 'thunderstorm.png',
    '13d': 'snow.png',
    '50d': 'mist.png',
};

searchButton.addEventListener('click', () => {
    const cityName = searchInput.value;
    if (cityName) {
        const apiKey = 'a981de64820a63ef6df7fff155e45a24'; //Add Your Api Key form OpenWeatherApp
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`; 

        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                const temperature = parseInt(data.main.temp-273);
                const weatherCode = data.weather[0].icon;
                const humidityValue = data.main.humidity;
                const windSpeed = data.wind.speed;
                const cityName = data.name;
                const weatherImageFilename = weatherIcons[weatherCode];
                weatherIcon.src = `images/${weatherImageFilename}`;
                tempElement.textContent = `${temperature}°C`;
                cityElement.textContent = cityName;
                humidityElement.textContent = `${humidityValue}%`;
                windElement.textContent = `${windSpeed} km/h`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
