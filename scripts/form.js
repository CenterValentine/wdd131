const products = [
    {
        "id": "fc - 1888",
        "name": "flux capacitor",
        "avg-rating": 4.5
    },
    {
        "id": "fc - 2050",
        "name": "power laces",
        "averagerating": 4.7
    },
    {
        "id": "fs - 1987",
        "name": "time circuits",
        "averagerating": 3.5
    },
    {
        "id": "ac - 2000",
        "name": "low voltage reactor",
        "averagerating": 3.9
    },
    {
        "id": "jj - 1969",
        "name": "warp equalizer",
        "averagerating": 5.0
    }
];

const productselect = document.querySelector('.review-form select');
const reviewFormButton = document.querySelector('.review-form');

dataToHTML(products);

reviewFormButton.addEventListener('submit', () => {
    addCounter();
});

console.log("productselect: ", productselect);

function dataToHTML(data) {
    const productsHTML = data.map(product => {
        // console.log("dataToHTML()")
        let words = product.name.split(" ");
        product.name = words.map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
        return `<option value="${product.id}" id="${product.id}"><div>${product.name} - ${product.averagerating || product["avg-rating"]}</div></option>`
    }).join('');
    console.log("products after map: ", products);
    productselect.insertAdjacentHTML('beforeend', productsHTML);
}

function addCounter() {
    let numberOfReviews = Number(window.localStorage.getItem('numberOfReviews')) || 0;
    numberOfReviews++;
    console.log("numberOfReviews", numberOfReviews);
    localStorage.setItem('numberOfReviews', numberOfReviews);
}