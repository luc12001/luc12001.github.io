window.onload = function() {
    var myDate = new Date();
    var myYear = (myDate.toLocaleString("default", { weekday: "long"}))+", "+ (myDate.getDay()) +" "+(myDate.toLocaleDateString('default', { month: 'long'}))+" "+myDate.getFullYear();
    document.getElementById("theYear").textContent = myYear;

    }

    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');
    
    hambutton.addEventListener("click", () =>{mainnav.classList.toggle("responsive")}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    const today = new Date();
    const dayNumber = today.getDay();

    const element = document.getElementById("pancakes");    
    if (dayNumber == 5) {
        element.classList.add("showme");
    } else {
        element.classList.add("hideme");
    };
    







    //5 Day Forecast 

    const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6f72edb5e59fb4d3d7678f84fc61706e&units=imperial";

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
    
    
    fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        document.getElementById("townName").textContent = weatherInfo.name;
        console.log(weatherInfo)
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
            
        document.getElementById('weatherforecast').appendChild(theDay);
    
        document.getElementById('townName').innerHTML = weatherInfo.city.name;
        document.getElementById('cond').innerHTML = weatherInfo.list[0].weather[0].main;
        document.getElementById('temp').innerHTML = weatherInfo.list[0].main.temp;
        document.getElementById('speed').innerHTML = weatherInfo.list[0].wind.speed;
        document.getElementById('humid').innerHTML = weatherInfo.list[0].main.humidity;
        document.getElementById('chill').innerHTML = weatherInfo.list[0].main.feels_like;
        
          } //end if
        }});