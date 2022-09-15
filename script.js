console.log("Hello World");

function displayTime() {
    var dTime = new Date();
    var hrs = dTime.getHours();
    var min = dTime.getMinutes();
    var sec = dTime.getSeconds();
    var session = document.getElementById('session')

    if (hrs >=12) {
        session.innerHTML = "Pm"
    } else {
        session.innerHTML = "Am"
    }

    if (hrs > 12) {
        hrs -= 12
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec
}
setInterval(displayTime, 10);