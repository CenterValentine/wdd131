const tempatureStat = document.querySelector(".weather div table tbody tr:nth-child(1) th:nth-child(2)")
const windStat = document.querySelector(".weather  div table tbody tr:nth-child(3) th:nth-child(2)")
const windChillStat = document.querySelector(".weather div table tbody tr:nth-child(4) th:nth-child(2)");

function calculateWindChill(t, v) {
    return 13.12 + (0.6215 * t) - (11.37 * v) ** .16 + (0.3965 * t * v) ** .16;
}

console.log(tempatureStat);

let temperature = parseInt(tempatureStat.textContent.split(" ")[0]);
let wind = parseInt(windStat.textContent.split(" "))

console.log(wind);

var windChill = "N/A"

if (temperature <= 10 || wind > 4.8) {
    windChill = calculateWindChill(temperature, wind);
}

console.log(windChill);

windChillStat.textContent = Math.round(windChill,2).toString() + " C°";