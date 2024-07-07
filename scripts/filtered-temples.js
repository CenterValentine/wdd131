
const menu = document.querySelector(".menu");
const hamburger = document.getElementById("hamburger-menu");

const gallery = document.querySelector(".temple-cards");
const home = document.querySelector(".home");
const oldGallery = document.querySelector(".old");
const newGallery = document.querySelector(".new");
const largeGallery = document.querySelector(".large");
const smallGallery = document.querySelector(".small");

// select main div
const activeSelection = document.querySelector('.active-selection');



// remove "active" class from reg class elements
function removeActive() {
    const active = document.querySelector(".active");
    if (active) {
        active.classList.remove("active");
        activeSelection.textContent = "";
    }
}

function addActive(element) {
    element.classList.add("active");
}





import { temples } from './filtered-temple-json.js';

dataToHTML(temples)

function dataToHTML(data, element = home) {
    const templeHTML = data.map(temple => {
        console.log("temple: ", temple.templeName);
        // console.log("dataToHTML()")
        return `
    <div class="temple">
        <div>
            <div><span>${temple.templeName}</span></div>
            <div><span>Location:</span> ${temple.location}</div>
            <div><span>Dedicated:</span> ${temple.dedicated}</div>
            <div><span>Area:</span> ${temple.area} sq ft</div>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.templeName} loading="lazy">
    </div>`
    }).join('');
    console.log("temple after map: ", templeHTML);
    addActive(element);
    gallery.innerHTML = templeHTML;
    // 
}

newGallery.addEventListener('click', () => {
    console.log("newGallery clicked");
    var templesdata = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
    removeActive();
    dataToHTML(templesdata, newGallery);
    activeSelection.textContent = "New";

});

oldGallery.addEventListener('click', () => {
    console.log("largeGallery clicked");
    var templesdata = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
    removeActive();
    dataToHTML(templesdata, oldGallery);
    activeSelection.textContent = "Old";
});

smallGallery.addEventListener('click', () => {
    console.log("smallGallery clicked")
    var templesdata = temples.filter(temple => temple.area < 10000);
    removeActive();
    dataToHTML(templesdata, smallGallery);
    activeSelection.textContent = "Small";
});
largeGallery.addEventListener('click', () => {
    console.log("oldGallery clicked")
    var templesdata = temples.filter(temple => temple.area > 90000);
    removeActive();
    dataToHTML(templesdata, largeGallery);
    activeSelection.textContent = "Large";
});

home.addEventListener('click', () => {
    console.log("home clicked")
    removeActive();
    dataToHTML(temples, home);
    activeSelection.textContent = "All";
});



function toggleMenu(f) {
    console.log("toggleMenu()");
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');
    console.log(" {toggle classes: 'show''open'}")
};

hamburger.addEventListener('click', () => toggleMenu(menu));
// mainElement.addEventListener('mouseenter', launchMenu(menu));
// hamburger.addEventListener('click', () => hideMenu(menu));

console.log("temples: ", temples);

function createTempleCard(temple) {
    const card = document.createElement('figure')

}