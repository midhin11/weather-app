export function dateChanger(dateString) {
    let date = new Date(dateString).toLocaleDateString("en-GB", {
        month: "long",
        day: "numeric",
    });
    let day = new Date(dateString).toLocaleDateString("en-GB", {
        weekday: "long",
    });
    return (date + ", " + day);
};

export function timeChanger(zone){
    let time = new Date().toLocaleTimeString("en-US", {
        timeZone: zone,
        hour: "numeric",
        minute: "2-digit"
    })
    return time;
}