let sechand = document.getElementById('second');
let minutehand = document.getElementById('minute');
let hourhand = document.getElementById('hour');



function updateClock(){
    let date = new Date();

    let sec = (date.getSeconds()) / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;


    sechand.style.transform = "rotate(" + (sec * 360) + "deg)";
    minutehand.style.transform = "rotate(" + (min * 360) + "deg)";
    hourhand.style.transform = "rotate(" + (hour * 360) + "deg)";
};
setInterval(updateClock, 1000);
updateClock();