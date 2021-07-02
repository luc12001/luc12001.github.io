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
    
