import "./styles.css";
import { form, input, tempUnit, setTempUnit, switchUnit, errorText, loading, temp, description, condition, maxTemp, minTemp, precipitation, humidity, wind, windUnit, date, location, time, feelsLike, pressure, uv} from "./selectors.js"
import { timeChanger, dateChanger } from "./display-functions.js";

// async function gifFetch(url) {
//     try{
//         const response = await fetch(url);
//         if(!response.ok){
//             throw new Error(`Error status: ${response.status}`);
//         }
//         const returnedData = await response.json();
//         body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${returnedData.data.images.original.url})`;
//         body.style.backgroundSize = "contain";
//         body.style.backgroundPosition = "center";
//         body.style.backgroundRepeat = "no-repeat";
//     } catch(err){
//         console.error(err)
//     }
// }


async function weatherFetch(url) {
    loading.textContent = "Loading weather data...";
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error status: ${response.status}`);
        }
        const returnedData = await response.json();
        console.log(returnedData);
        loading.textContent = "";
        printData(returnedData);
    } catch(err) {
        loading.textContent = "";
        errorText.textContent = "Couldn't find that city. Try again!";
        console.error(err);
    }
}

function printData(weatherReport) {
    // const conditionGIF = weatherReport.currentConditions.icon;
    // gifFetch(`https://api.giphy.com/v1/gifs/translate?api_key=Your_key_here=${conditionGIF}`);
    if(tempUnit === "metric"){
        windUnit.textContent = "km/h"
    } 
    if(tempUnit === "us") {
        windUnit.textContent = "mph";
    }
    temp.textContent = weatherReport.currentConditions.temp.toFixed();
    description.textContent = weatherReport.days["0"].description;
    condition.textContent = weatherReport.currentConditions.conditions;
    maxTemp.textContent = weatherReport.days["0"].tempmax.toFixed();
    minTemp.textContent = weatherReport.days["0"].tempmin.toFixed();
    precipitation.textContent =  weatherReport.currentConditions.precipprob;
    humidity.textContent = weatherReport.currentConditions.humidity.toFixed();
    wind.textContent =  weatherReport.currentConditions.windspeed.toFixed();
    date.textContent = dateChanger(weatherReport.days["0"].datetime);
    location.textContent = weatherReport.resolvedAddress.toUpperCase();
    time.textContent = timeChanger(weatherReport.timezone);
    feelsLike.textContent = weatherReport.currentConditions.feelslike.toFixed();
    pressure.textContent = weatherReport.currentConditions.pressure;
    uv.textContent = weatherReport.currentConditions.uvindex;
}


// let initialLocation = "new york";
// weatherFetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(initialLocation)}?unitGroup=${tempUnit}&key=PWUUGS8L8F8BMKKEMXV578FDM`);

// switching between metric and us units
switchUnit.addEventListener("click", function(e){
    if(!input.value) return;

    if(e.target.textContent === "C" && tempUnit === "us"){
        setTempUnit("metric");
        fetchAction();
    } else if(e.target.textContent === "C" && tempUnit === "metric"){
        return;
    } else if(e.target.textContent === "F" && tempUnit === "us") {
        return;
    } else if(e.target.textContent === "F" && tempUnit === "metric"){
        setTempUnit("us");
        fetchAction();
    } else return;
});


input.addEventListener("input", validateInput);
form.addEventListener("submit", function(e){
    e.preventDefault();
    if(!validateInput()) return;
    fetchAction();
});

function validateInput() {
    if (input.value.trim() === "") {
        errorText.textContent = "Please enter the name of the city!";
        input.reportValidity(); 
        return false;
    } else {
        errorText.textContent = "";
        return true;
    }
}

function fetchAction() {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(input.value)}?unitGroup=${tempUnit}&key=PWUUGS8L8F8BMKKEMXV578FDM`;
    weatherFetch(url);
}
