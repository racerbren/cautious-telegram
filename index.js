// const condition = [];
// condition.push("Sunny", "Cloudy", "Windy", "Rainy", "Stormy");
// var temps = 100; 
// var conditions = condition;
// var city = "Long Beach";
const condition = document.querySelector(".condition");
const icon = document.querySelector(".icon");
const temps = document.querySelector(".temp"); 


window.addEventListener("click", () =>{
    const APIkey = "b5baf800d5aaab557d6896a90df24d76";
    const city = document.querySelector(".search-box input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`)
        .then((response) => {response.json();})
        .then((data) => {console.log(data);
            temps.textContent = data.main.temp;
            condition.textContent = data.weather.description;
            icon = data.weather.icon;
        });
});