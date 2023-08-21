
let cityName;

async function apiCall(){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=33c71afcfb22b4578e54e6ed7c101db1`);

    return data.json();
};


document.querySelector("button").addEventListener("click", function(){
    cityName = document.getElementById("cityName").value;

    async function display(){
        const weatherData = await apiCall();

    const iconData = weatherData.weather[0].icon;
    const tempData = Math.round(weatherData.main.temp);
    const descriptionData = weatherData.weather[0].description;
    const feelsLike = Math.round(weatherData.main.feels_like);
    const humid = weatherData.main.humidity;
    const windSpeed = weatherData.wind.speed;


    // icon
    document.getElementById("icon").setAttribute("src", `https://openweathermap.org/img/wn/${iconData}.png`);

    // temperature
    document.getElementById("temperature").innerHTML = `${tempData}°C`;

    // description
    document.getElementById("description").innerHTML = descriptionData;

    // more info box 1
    document.getElementById("feels").innerHTML = `Feels Like: ${feelsLike}`;

    // more info box 2
    document.getElementById("humidity").innerHTML = `Humidity: ${humid}%`;

    // more info box 3
    document.getElementById("wind").innerHTML = `Wind Speed: ${windSpeed}<br>m/s`;

    // Showing the whole content
    document.getElementById("result").classList.remove("hide");

    };

    display();
});

