const apiUrlToday = "//api.openweathermap.org/data/2.5/weather?id=5775863&appid=8caf54fc69abf7048634ab8b3f74fb30&units=imperial"
const apiUrl = "//api.openweathermap.org/data/2.5/forecast?id=5775863&appid=8caf54fc69abf7048634ab8b3f74fb30&units=imperial"


const day= new Date();
const todayDayNumber = day.getDay();

//-7 hrs
const myweekday = new Array(7);
myweekday[0]="Sunday";
myweekday[1]="Monday";
myweekday[2]="Tuesday";
myweekday[3]="Wednesday";
myweekday[4]="Thursday";
myweekday[5]="Friday";
myweekday[6]="Saturday";
console.log(myweekday[todayDayNumber], "is myweekday[todayDayNumber]")


fetch(apiUrlToday)

.then((mydata) => mydata.json())
.then((WeatherInfo) => {
    console.log(WeatherInfo, "Weather Info Today");
    document.getElementById('currentTemp').innerHTML =  WeatherInfo.main.temp;
    document.getElementById('highTemp').innerHTML =  WeatherInfo.main.temp_max;
    document.getElementById('minTemp').innerHTML =  WeatherInfo.main.temp_min;
    document.getElementById('day1').innerHTML = myweekday[todayDayNumber]
    document.getElementById('windSpeed').innerHTML= WeatherInfo.wind.speed;
    const iconcode = WeatherInfo.weather[0].icon;
    console.log(iconcode)
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path
    console.log(icon_path)
})

 
fetch(apiUrl)
.then((mydata) => mydata.json())
.then((WeatherInformation) => {
    console.log(WeatherInformation, "Weather information");

    document.getElementById('place').innerHTML=WeatherInformation.city.name;


    let mylist =WeatherInformation.list
    let forcastDayNumber = todayDayNumber
    console.log(forcastDayNumber, "Forcast Day Number");

    for (i=0; i<mylist.length; i++){
        let time = mylist[i].dt_txt;
    //change 21:00:00 for highland utah...
        if (time.includes('21:00:00')){
            console.log("Found an entry with 21:00:00 in the time. It was report " +i+" from the mylist of 40.");
            forcastDayNumber +=1;
            console.log(forcastDayNumber, "Forcast Day Numbers when found")

            if (forcastDayNumber === 7){ //7 is not a valid day, so it becomes 0
                forcastDayNumber = 0;}

            console.log(forcastDayNumber, "Forcast Day Numberss")
            let theCard = document.createElement("figure")
            console.log(theCard)
            let theDayName = document.createElement("p");
            theDayName.textContent = myweekday[forcastDayNumber];


            let theTemp = document.createElement("p");
            theTemp.textContent = WeatherInformation.list[i].main.temp+ "\xB0";
            //let highTemp = document.createElement("p");
            //highTemp.textContent = WeatherInformation.list[i].main.temp_max;
            //let lowTemp = document.createElement("p");
            //lowTemp.textContent = WeatherInformation.list[i].main.temp_min;
            //console.log(lowTemp,"Low Temp")
            //console.log(highTemp,"High Temp")
            let iconcode = WeatherInformation.list[i].weather[0].icon
            console.log(iconcode, "ICON CODE")
            let icon_path = "//openweathermap.org/img/w/"+ iconcode +".png";
            let theIcon = document.createElement("img")
            theIcon.alt = "Weather Icon"
            theIcon.src = icon_path;

            let theDay = document.createElement("section");
            theDay.appendChild(theDayName)
            theDay.appendChild(theTemp)
            theDay.appendChild(theIcon)

                
            document.getElementById('weatherForecast').appendChild(theDay);

        }
    }











});

function openMenu() {
    document.getElementById("navMenu").classList.toggle("classOpen");
    document.getElementById("burger").classList.toggle("classOpen");
}

const x = document.getElementById('burger');
x.onclick = openMenu
const container = document.getElementById("burger")
container.onclick = openMenu;



//end of .then
//openweathermap.org/img/2/{weather 0}.png

/*
"id": 5775863,
8caf54fc69abf7048634ab8b3f74fb30
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
https:
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
https://api.openweathermap.org/data/2.5/weather?id=2172797&appid={API key}
//api.openweathermap.org/data/2.5/weather?id=524901&lang=fr&appid={API key}
api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}
*/

    //document.getElementById('currentTemp').innerHTML =  WeatherInformation.list[0].temp;
    //document.getElementById('highTemp').innerHTML =  WeatherInformation.main.temp_max;
    //document.getElementById('minTemp').innerHTML =  WeatherInformation.main.temp_min;

    //const iconcode = WeatherInformation.weather.list[0].icon
    //console.log(iconcode)
    //const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    //document.getElementById('weather_icon').src = icon_path
    //console.log(icon_path)


    