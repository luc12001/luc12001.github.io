const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=4704628&appid=6f72edb5e59fb4d3d7678f84fc61706e&units=imperial";

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
    
    
    fetch(apiURL2)
    .then((response) => response.json())
    .then((weatherInfo) => {
    let forecastDayNumber = todayDayNumber;
    let mylist = weatherInfo.list;
        console.log(mylist)
    for(i=0; i<mylist.length; i++){
        let time = mylist[i].dt_txt;
        if (time.includes('18:00:00')){
        forecastDayNumber += 1;
            if (forecastDayNumber === 7){
            forecastDayNumber = 0;}
    
        let theDayName = document.createElement("span");
        theDayName.textContent = weekday[forecastDayNumber];
            
        let theTemp = document.createElement("p");
        theTemp.innerHTML = weatherInfo.list[i].main.temp + '&#8457;';
    
        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "https://openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img")
        theIcon.src = iconPath;
    
        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);
            
        document.getElementById('weatherforecast').appendChild(theDay)}}});