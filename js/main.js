
var theDay = new Date("June 11, 2020 00:00:00").getTime();
var cd = document.getElementById("countdown");
var text = document.createTextNode("");
cd.style.fontWeight = "bold";
cd.appendChild(text);
function countdown() {
    let now = new Date().getTime();
    let difference = Math.floor((theDay - now)/1000);
    let days = Math.floor(difference / (3600 * 24));
    difference -= days * 24 * 3600;
    let hours = Math.floor(difference / 3600);
    difference -= hours * 3600;
    let minutes = Math.floor(difference / 60);
    difference -= minutes * 60;
    let seconds = difference;
    let time = days + "d" + '\t' + hours + "h" + '\t' + minutes + "m" + '\t' + seconds + "s";
    text.nodeValue = time;
}
setInterval(countdown, 1000);