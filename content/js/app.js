let searchBoxEl = document.querySelector(".search-box")
let cityEl = document.querySelector(".city")
let dateEl = document.querySelector(".date")
let tempEl = document.querySelector(".temp")
let weatherEl = document.querySelector(".weather")
let hiLowEl = document.querySelector(".hi-low")
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let apiData = {
    key : "480effeba050ae3d9b3548e5c0b12cdb",
    url : `https://api.openweathermap.org/data/2.5/weather?q=`
}

window.addEventListener("load",()=>{
    fetch(`${apiData.url}iran&appid=${apiData.key}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        showData(data)
    })
    let d = new Date
    let dayName = days[d.getDay()];
    let day = d.getDate()
    let month = months[d.getMonth()]; 
    let year = d.getFullYear()
    dateEl.innerHTML = `${dayName} ${day} ${month} ${year}`
})


searchBoxEl.addEventListener("keypress",(e)=>{
    if (e.keyCode === 13) {
        let searchBoxElValue = searchBoxEl.value
        fetch(`${apiData.url}${searchBoxElValue}&appid=${apiData.key}`)
        .then(res => res.json())
        .then(data => {
            showData(data)
        })
    }
})
function showData(data) {
    cityEl.innerHTML = `${data.name},${data.sys.country}`
    tempEl.innerHTML = `${Math.floor(data.main.temp - 273.15)}°C`
    weatherEl.innerHTML = `${data.weather[0].main}`
    hiLowEl.innerHTML = `${Math.floor(data.main.temp_min - 273.15)}°C /${Math.floor(data.main.temp_max - 273.15)}°C`
}
