window.onload = function() {
  var myDate = new Date();
  var myYear = myDate.getFullYear();
  document.getElementById("theYear").textContent = myYear;
  document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;

  }

  const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigation');
    
    hambutton.addEventListener("click", () =>{mainnav.classList.toggle("responsive")}, false);
    
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

    const today = new Date();
    const dayNumber = today.getDay();

    const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=29.0339&lon=-95.4344&exclude=minutely,hourly&appid=6f72edb5e59fb4d3d7678f84fc61706e&units=imperial";
    fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
   console.log(weatherInfo)

    document.getElementById('cond').innerHTML = weatherInfo.current.weather[0].main;
    document.getElementById('temp').innerHTML = weatherInfo.current.temp;
    document.getElementById('speed').innerHTML = weatherInfo.current.wind_speed;
    document.getElementById('humid').innerHTML = weatherInfo.current.humidity;
    
    
    });

        





    