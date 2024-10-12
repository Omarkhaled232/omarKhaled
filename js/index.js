var arrLocation=[]
if(navigator.geolocation){
   
navigator.geolocation.getCurrentPosition(function Position(Position){
    console.log(Position)
    let x=Position.coords.latitude
    let y=Position.coords.longitude
  async  function Positionfun(x,y){
      let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8c181013fd3b44ea8a143201241706&q=${x},${y}&days=3`)
       let lastlocation = await response.json();
       arrLocation=lastlocation;
       console.log(arrLocation);
       if (inpLocation.value === "") {
        inpLocation.value=arrLocation.location.tz_id


        
        getWeather(inpLocation.value)
    }


    }
    Positionfun(x,y)
})}
var inpLocation=document.querySelector(".location")
var inpFind=document.querySelector(".FindLocation")
var allWeather = [];
var Weather = document.querySelector(".Weather");
var date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var day = date.getDate() + " " + monthNames[date.getMonth()];
var dayStr = date.toLocaleString('en-us', { weekday: 'long' });
console.log(dayStr);

async function getWeather(find) {
    
        var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8c181013fd3b44ea8a143201241706&q=${find}&days=3`);
        let result = await response.json();
        allWeather = result;
        console.log(allWeather);
        display();
    }

function display() {
    let cartona = "";

    cartona += `
        <div class="col-md-4 rounded-5  p-0">
            <div class="bottom-50 rounded-5 text-white ">
                <div class="header d-flex  justify-content-between p-2">
                    <span>${dayStr}</span>
                    <span>${day}</span>
                </div>
                <div class="content pt-3 px-5 ps-3">
                    <h4 class="city">${allWeather.location.name}</h4>
                    <span class="temperature d-block">${allWeather.current.temp_c}<span><sup>o</sup>c</span></span>
                    <img src="https:${allWeather.current.condition.icon}" alt="">
                    <span class="d-block my-2 text-info custom">${allWeather.current.condition.text}</span>
                    <div class="icons mt-3">
                        <span class="me-3"><i class="fa-solid fa-umbrella fa-rotate-by" style="--fa-rotate-angle: 60deg;"></i> ${allWeather.current.humidity}%</span>
                        <span class="me-3"><i class="fa-solid fa-wind mb-3"></i> ${allWeather.current.wind_kph}km/h</span>
                        <span class="me-3"><i class="fa-solid fa-compass"></i> ${allWeather.current.wind_dir}</span>
                    </div>
                </div>
            </div>
        </div>`;


    var day2 = new Date(allWeather.forecast.forecastday[1].date);
    var day2Str = day2.toLocaleString('en-us', { weekday: 'long' });
    var day2Formatted = day2.getDate() + " " + monthNames[day2.getMonth()];

    cartona += `
        <div class="col-md-4 p-0">
            <div class="bottom-50 text-white">
                <div class="header2  text-center p-2">
                    <span class="">${day2Str}</span>
                </div>
                <div class="content2 text-center pt-3 px-5 ps-3">
                    <img class="d-block mt-4 mb-2 mx-auto" src="https:${allWeather.forecast.forecastday[1].day.condition.icon}" alt="">
                    <span class="temperature2">${allWeather.forecast.forecastday[1].day.maxtemp_c}<span><sup>o</sup>c</span></span>
                    <small class="d-block">${allWeather.forecast.forecastday[1].day.mintemp_c}<sup> o</sup></small>
                    <span class="d-block  pb-5 mb-5 text-info custom2">${allWeather.forecast.forecastday[1].day.condition.text}</span>
                </div>
            </div>
        </div>`;

    var day3 = new Date(allWeather.forecast.forecastday[2].date);
    var day3Str = day3.toLocaleString('en-us', { weekday: 'long' });
    var day3Formatted = day3.getDate() + " " + monthNames[day3.getMonth()];

    cartona += `
        <div class="col-md-4 p-0">
            <div class="bottom-50 text-white">
                <div class="header3 text-center p-2">
                    <span>${day3Str}</span>
                </div>
                <div class="content3 text-center pt-3 px-5 ps-3">
                    <img class="d-block mt-4 mb-2 mx-auto" src="https:${allWeather.forecast.forecastday[2].day.condition.icon}" alt="">
                    <span class="temperature2">${allWeather.forecast.forecastday[2].day.maxtemp_c}<span><sup>o</sup>c</span></span>
                    <small class="d-block">${allWeather.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
                    <span class="d-block  pb-5 mb-5 text-info custom2">${allWeather.forecast.forecastday[2].day.condition.text}</span>
                </div>
            </div>
        </div>`;

    Weather.innerHTML = cartona;
}


inpLocation.addEventListener('keyup', function() {
    let valueInpLocation = inpLocation.value;
    console.log(valueInpLocation);
   
    
    getWeather(valueInpLocation);
});
getWeather();
