const apikey = "0bc553467cc027e61876f91420876de3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={london}&appid={0bc553467cc027e61876f91420876de3}";

const searchBox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")

async function checkweather() {
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);


document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
document.querySelector(".wind").innerHTML = data.main.speed + " %";
}
checkweather();

searchbtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})

