const gallery = document.querySelector(".gallery-cards");
const home = document.querySelector(".home");

// Import gallery contents from './gallery-contents.js');
import { galleryData } from './gallery-contents.js';
// import galleryData from './gallery.json' assert { type: 'json' };

function dataToHTML(data, element = home) {
    const photosHTML = data.map(photo => {
        console.log("photo: ", photo.photoName);

        calculateAspectRatioFit(photo.width, photo.height, 400, 400);

        console.log("calculateAspectRatioFit: ", calculateAspectRatioFit(photo.width, photo.height, 490, 400));
        // console.log("dataToHTML()")
        return `
        <div class="photo">
            <img src="./images/gallery/${photo.imageName}" alt="${photo.description} width="${calculateAspectRatioFit(photo.width, photo.height, 400, 400).width}" height="${calculateAspectRatioFit(photo.width, photo.height, 400, 400).height}" max-width="400" max-height="400">
            <div class="description">
                <div><span>Description:</span> ${photo.description}</div>
                <div><span>Location:</span> ${photo.location}</div>
            </div>
        </div>`
    }).join('');
    console.log("photos after map: ", photosHTML);
    // addActive(element);
    gallery.innerHTML = photosHTML;
}

dataToHTML(galleryData);

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    var rtnWidth = srcWidth * ratio;
    var rtnHeight = srcHeight * ratio;
    return { width: rtnWidth, height: rtnHeight };
}

// const oldGallery = document.querySelector(".old");


// // select main div
// const activeSelection = document.querySelector('.active-selection');

// // formery templesa

// // remove "active" class from reg class elements
// function removeActive() {
//     const active = document.querySelector(".active");
//     if (active) {
//         active.classList.remove("active");
//         activeSelection.textContent = "";
//     }
// }

// function addActive(element) {
//     element.classList.add("active");
// }



// import { gallery } from './gallery.json';





// newGallery.addEventListener('click', () => {
//     console.log("newGallery clicked");
//     var templesdata = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) > 2000);
//     removeActive();
//     dataToHTML(templesdata, newGallery);
//     activeSelection.textContent = "New";

// });

// oldGallery.addEventListener('click', () => {
//     console.log("largeGallery clicked");
//     var templesdata = temples.filter(temple => parseInt(temple.dedicated.substring(0, 4)) < 1900);
//     removeActive();
//     dataToHTML(templesdata, oldGallery);
//     activeSelection.textContent = "Old";
// });

// home.addEventListener('click', () => {
//     console.log("home clicked")
//     removeActive();
//     dataToHTML(temples, home);
//     activeSelection.textContent = "All";
// });



// function toggleMenu(f) {
//     console.log("toggleMenu()");
//     menu.classList.toggle('show');
//     hamburger.classList.toggle('open');
//     console.log(" {toggle classes: 'show''open'}")
// };

// hamburger.addEventListener('click', () => toggleMenu(menu));
// // mainElement.addEventListener('mouseenter', launchMenu(menu));
// // hamburger.addEventListener('click', () => hideMenu(menu));

// console.log("temples: ", temples);

// function createTempleCard(temple) {
//     const card = document.createElement('figure')

// }