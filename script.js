setInterval(() => {
    a = new Date();
    let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    let date = a.toLocaleDateString();
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

}, 1000);