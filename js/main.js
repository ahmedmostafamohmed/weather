

let days = document.getElementById("day"),
    Month = document.getElementById("Month"),
    locationcity = document.getElementById("location"),
    temp = document.getElementById("temp"),
    icon1 = document.getElementById("icon"),
    description = document.getElementById("description"),
    wind_direction = document.getElementById("wind_direction"),
    windKph = document.getElementById("windKph"),
    humidty = document.getElementById("humidity"),
    // nextday
    nextday = document.getElementById("nextDay"),
    MaxtempNextDay = document.getElementById("MaxtempNextDay"),
    mintempNextDay = document.getElementById("mintempNextDay"),
    descriptionNextDay = document.getElementById("descriptionNextDay"),
    iconNextDay = document.getElementById("iconNextDay"),
    // thirdday
    thirdday = document.getElementById("thirdday"),
    MaxtempthirdDay = document.getElementById("MaxtempthirdDay"),
    mintempthirdDay = document.getElementById("mintempthirdDay"),
    descriptionthirdDay = document.getElementById("descriptionthirdDay"),
    iconthirdDay = document.getElementById("iconthirdDay"),
    searchInput = document.getElementById("FindLocation"),
    
    myHttp,
    myData,
    weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    monthName = ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];
async function getWeatherData(currentCity = 'cairo') {
    myHttp = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=848e4c9efef048e494f100521210205&q=${currentCity}&days=3`);
    myData = await myHttp.json();
    displayData();
    displayNextDate();
    displaythirdDate();
}
getWeatherData()

function displayDay(){
    let getdate = new Date();

    let getDay = weekDays[getdate.getDay()];
    days.innerHTML = getDay ;
    let getdayAndMonthe = getdate.getDate() + monthName[getdate.getMonth()];
    Month.innerHTML = getdayAndMonthe ;
    
}
displayDay();

function displayData(){
    // to display location
    locationcity.innerHTML = myData.location.name;
    // to display temp
    temp.innerHTML = myData.current.temp_c + `&#8451;`;
    // to display temp icon
    let srcIcon = myData.current.condition.icon ;
    icon1.setAttribute("src",`https:${srcIcon}`);
    description.innerHTML = myData.current.condition.text ;
    wind_direction.innerHTML = myData.current.wind_dir ;
    windKph.innerHTML = myData.current.wind_kph ;
    humidty.innerHTML = myData.current.humidity ;
}

// to display Next day
function nextDay(){
    let nextday1 = new Date();
    let getNextDay = nextday1.getDay() + 1;
    if (getNextDay == weekDays.length){
        getNextDay = 0
    }
    nextday.innerHTML = weekDays[getNextDay];
}
nextDay();

function displayNextDate(){
    // to display Max temp
    MaxtempNextDay.innerHTML = myData.forecast.forecastday[1].day.maxtemp_c + `&#8451`;
    // to display Min temp
    mintempNextDay.innerHTML = myData.forecast.forecastday[1].day.mintemp_c + `&#8451`;
    // to display Description temp
    descriptionNextDay.innerHTML = myData.forecast.forecastday[1].day.condition.text;
    // to display icon temp
    let icon2 = myData.forecast.forecastday[1].day.condition.icon
    iconNextDay.setAttribute("src",`https:${icon2}`)
}


// to display third day
function thirdDay(){
    let thirdday1 = new Date();
    let getthirdDay = thirdday1.getDay() + 2;
    if (getthirdDay > weekDays.length){
        getthirdDay = 1
    }
    thirdday.innerHTML = weekDays[getthirdDay];
}
thirdDay();


function displaythirdDate(){
    // to display Max temp
    MaxtempthirdDay.innerHTML = myData.forecast.forecastday[2].day.maxtemp_c + `&#8451`;
    // to display Min temp
    mintempthirdDay.innerHTML = myData.forecast.forecastday[2].day.mintemp_c + `&#8451`;
    // to display Description temp
    descriptionthirdDay.innerHTML = myData.forecast.forecastday[2].day.condition.text;
    // to display icon temp
    let icon2 = myData.forecast.forecastday[2].day.condition.icon
    iconthirdDay.setAttribute("src",`https:${icon2}`)
}



searchInput.addEventListener("keyup",function(){
    currentCity = searchInput.value ;
    getWeatherData(currentCity)
})



$(document).ready(function(){
    $("#loadingX").fadeOut(1000,function(){
        $("body").css("overflow","auto")
    }); 
})

