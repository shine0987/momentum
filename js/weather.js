const API_KEY = "195e74cfdc793ee321923a10d07b447d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("Yout live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.name === "P’ungnap-tong") {
            data.name = "풍납동";
        }
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} | ${data.main.temp}℃`;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you. No wheather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
