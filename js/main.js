const apiKey = "cbf02b2774815d3235305ec346c8d211";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchInput = document.querySelector(".search__input");
let submitBtn = document.querySelector(".button");
let weatherImg = document.querySelector(".weather__icon");

async function checkWeather(newCity) {
  const response = await fetch(apiUrl + newCity + `&appid=${apiKey}`);
  if (response.status == 200) {
    let data = await response.json();
    let temp = document.querySelector(".temp");
    let city = document.querySelector(".city");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");

    city.textContent = data.name;
    temp.textContent = `${Math.round(data.main.temp)}°c`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
    if (data.weather[0].main == "Clear") {
      weatherImg.src = "imgs/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherImg.src = "imgs/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "imgs/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "imgs/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "imgs/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImg.src = "imgs/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

}
submitBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
