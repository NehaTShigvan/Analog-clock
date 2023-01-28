setInterval(() => {
    date = new Date()
    hr = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()

    hrotation = 30*hr + min/2;
    mrotation = 6*min;
    srotation = 6*sec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);