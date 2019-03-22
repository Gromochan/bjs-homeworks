setAlarm = (time, callback) => {
    console.log(time);
    setDailyRhythm(time, "23:50", "07:15")
}
whatTime = () => {
    let time = new Date();
    time = (time.getHours() + 1) + ":" + (time.getMinutes() + 1);
    return time;
}
const timer = setInterval(() => setAlarm(whatTime()), 1000);
activeAlarm = (time, timeWhen) => {
    if (time === timeWhen) {
        console.log(timeWhen === time)
        loudAlarm();
        return;
    }
    return
}
setDailyRhythm = (time, morningAlarm, eveningAlarm) => {
    activeAlarm(time, morningAlarm);
    activeAlarm(time, eveningAlarm);

}
loudAlarm = () => {
    clearInterval(timer)
    return "ДЗИНЬ-ДЗЫНЬ-ДЗЫНЬ! ПРОСНИСЬ! ПОРА ВСТАВАТЬ! ДЗИНЬ-ДЗЫНЬ-ДЗЫНЬ!"
}
timer
