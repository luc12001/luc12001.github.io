window.onload = function() {
    var myDate = new Date();
    var myYear = (myDate.toLocaleString("default", { weekday: "long"}))+", "+ (myDate.getDay()) +" "+(myDate.toLocaleDateString('default', { month: 'long'}))+" "+myDate.getFullYear();
    document.getElementById("theYear").textContent = myYear;
}

    
let now = new Date();
let lastVisit = new Date(localStorage.getItem("lastVisitTime"));
const diffTime = now - lastVisit;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffDays + " days");

if (diffDays < 2) {
  if (diffDays == 1) {
    document.getElementById('lastVisited').innerHTML = " | Last Visited: 1 Day Ago";
  }
} else {
  document.getElementById('lastVisited').innerHTML = " | Last Visited:" + diffDays + " Days Ago";
}

localStorage.setItem("lastVisitTime", now.toISOString());




    


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
    }