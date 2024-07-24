const numberOfVisitsDoc = document.getElementById('number-of-visits');

// determine URL of page
let url = window.location.href;
let numberOfVisits = localStorage.getItem('numberOfVisits' + url);

console.log("numberOfVisitsDoc", numberOfVisitsDoc);
console.log("numberOfVisitsLocalStorage", numberOfVisits);

function addCounter() {
    let numberOfVists = Number(window.localStorage.getItem('numberOfVisits' + url)) || 0;
    numberOfVisits++;
    localStorage.setItem('numberOfVisits' + url, numberOfVisits);
}

document.addEventListener('DOMContentLoaded', function () {

    if (numberOfVisits && localStorage.getItem('numberOfVisits' + url) != 0) {
        numberOfVisits = parseInt(localStorage.getItem('numberOfVisits' + url));
        numberOfVisitsDoc.textContent = `You have viewed this page ${numberOfVisits} times.`;
    } else {
        localStorage.setItem('numberOfVisits' + url, 1);
        numberOfVisitsDoc.textContent = `You have viewed this page 1 time.`;

    }
    addCounter();

    // numberOfPageVisits = Number(window.localStorage.getItem('numberOfVisits'));
    // console.log("numberOfVisits after DOMContentLoad", numberOfPageVisits);
    // numberOfVisitsDoc.textContent = `You have viewed this page ${numberOfPageVisits} times.`;
});