//ADD the key and change units to imperial
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6f72edb5e59fb4d3d7678f84fc61706e&units=imperial";

const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";


//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    document.getElementById("townName").textContent = weatherInfo.name;

    let forecastDayNumber = todayDayNumber;
    let mylist = weatherInfo.list;

    for(i=0; i<MediaQueryList.length; i++){
      let time = mylist[i].dt_txt;
      if (time.includes('21:00:00')){
        forecastDayNumber += 1;
        if (forecastDayNumber === 7){
        forecastDayNumber = 0;}

        let theDayName = document.createElement("span");
        theDayName.textContent = weekday[forecastDayNumber];
        
        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "/xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweatehrmap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img")
        theIcon.src = iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);
        
        document.getElementById('weatherForecast').appendChild(theDay);

       
      } //end if
    }//end for


  /*document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);   
    
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;*/
 }); //end of "then" fat arrow function



