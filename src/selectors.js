let body = document.body;
let form = document.querySelector("form");
let input = document.querySelector("input");
let tempUnit = "metric";
function setTempUnit(value) {
    tempUnit = value;
}
let errorText = document.querySelector(".error");
let loading = document.querySelector(".loading");
let switchUnit = document.querySelector(".switch");

let temp = document.querySelector(".temp h2");
let condition = document.querySelector(".condition");
let description = document.querySelector(".description");
let maxTemp = document.querySelector(".temp-max-val");
let minTemp = document.querySelector(".temp-min-val");
let precipitation = document.querySelector(".precipitation-val");
let humidity = document.querySelector(".humidity span");
let wind = document.querySelector(".wind-val");
let windUnit = document.querySelector(".wind-unit");
let date = document.querySelector(".date");
let location = document.querySelector(".location > div");
let time = document.querySelector(".time");
let feelsLike = document.querySelector(".feels-like span")
let pressure = document.querySelector(".pressure-val");
let uv = document.querySelector(".uv > .with-svg > div");

export {body, form, input, tempUnit, setTempUnit, switchUnit, errorText, loading, temp, description, condition, maxTemp, minTemp, precipitation, humidity, wind, windUnit, date, location, time, feelsLike, pressure, uv};