setInterval(displayDateTime, 1000);

function displayDateTime() {

    const d = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    document.getElementById("date").innerHTML = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    document.getElementById("day").innerHTML = dayNames[d.getDay()-1].toUpperCase();
    document.getElementById("minutes").innerHTML = ("0" + d.getMinutes()).slice(-2);
    document.getElementById("seconds").innerHTML = ("0" + d.getSeconds()).slice(-2);
    document.getElementById("session").innerHTML = getSession(d);
}

function getSession(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var session = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (document.getElementById("session").hidden == true) {
        document.getElementById("hours").innerHTML = d.getHours();
    }
    else
    {
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
    }
    return session;
}

function swapSession() {
    var d = new Date();
    var hours = d.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (document.getElementById("session").hidden == true) {
        document.getElementById("session").hidden = false;
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);

    }
    else
    {
        document.getElementById("session").hidden = true;
        document.getElementById("hours").innerHTML = d.getHours();
    }
}
