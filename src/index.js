let currentButton = document.querySelector("Button");
currentButton.addEventListener(onclick, showPosition);

function showTemperature(response) {
  console.log(response.data.weather[0].description);
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#city-temp");
  temp.innerHTML = `${temperature}℃`;
  let description = response.data.weather[0].description;
  let desc = document.querySelector("#city-description");
  desc.innerHTML = description;
  let humidity = response.data.main.humidity;
  let cityHumidity = document.querySelector("#city-humidity");
  cityHumidity.innerHTML = `${humidity}%`;
  let windSpeed = response.data.wind.speed;
  let cityWindSpeed = document.querySelector("#city-windspeed");
  cityWindSpeed.innerHTML = windSpeed;
}

function showCity(event) {
  let name = document.querySelector("#city-name");
  let formValue = document.querySelector("#city-input");
  name.innerHTML = formValue.value;
  let apiKey = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
  let city = formValue.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", showCity);

let apiKey1 = "85bbd3d16a2dfe0ecf253c7ae1e8fe03";
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey1}`).then(showCity);
}

navigator.geolocation.getCurrentPosition(showPosition);
