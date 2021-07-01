const t = parseFloat(document.getElementById("temp").textContent);
const s = parseFloat(document.getElementById("speed").textContent);

let wc = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4175 * t * Math.pow(s, 0.16));

wc = Math.round(wc);
    
if(t <= 50 && s > 3){
    document.getElementById("chill").textContent = wc;
} else {
    document.getElementById("chill").textContent = "0";
}