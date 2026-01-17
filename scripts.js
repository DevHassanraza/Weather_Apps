const apiKey = "d0ba842584d9acebfdf09004c237c189";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const data = await response.json();

    // Weather icon change
    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "/images/image copy 5.png";
    }
    else if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "/images/image copy 3.png";
    }
    else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "/images/image copy 9.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "/images/image copy 6.png";
    }
    else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "/images/image copy 7.png";
    }

    // Put data in UI
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
