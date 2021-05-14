window.onload = function() {
    var myDate = new Date();
    var myYear = myDate.getFullYear();
    document.getElementById("theYear").textContent = myYear;
    document.getElementById("lastUpdated").textContent = "Last Updated: " + document.lastModified;
    }