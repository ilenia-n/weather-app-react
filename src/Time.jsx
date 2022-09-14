

function Time() {
    let now = new Date();
    let weekday = now.getDay();
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let minutes = now.getMinutes();
    if (minutes < 10) { minutes = `0${minutes}` };
    let hours = now.getHours();
    if (hours < 10) { hours = `0${hours}` };

    return `${week[weekday]} ${hours}:${minutes}`
}

export default Time;