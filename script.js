const srchArea = document.querySelector("#citySearch");
const srchbtn = document.querySelector(".searchbtn");
const apiKey = "f5df394f2f0750413919423e6106cb52";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function weather(value) {
    const response = await fetch(`${apiurl}${value}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    const weatherDesc = data.weather[0].main;

    document.querySelector(".location").innerHTML = `${data.name}, ${data.sys.country}`;
    document.querySelector(".time").innerHTML = `${weatherDesc}. ${currentTime}`;
    document.querySelector(".temperature").innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".Wind").innerHTML = `Speed: ${data.wind.speed} m/s`;
    document.querySelector(".Humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
    document.querySelector(".Sunrise").innerHTML = `Sunrise: ${sunriseTime}`;
    document.querySelector(".Sunset").innerHTML = `Sunset: ${sunsetTime}`;
}

srchbtn.addEventListener("click", () => {
    weather(srchArea.value);
});
weather("kolkata");