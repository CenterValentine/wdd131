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

        return `
        <div class="photo">
        <picture>
            <source media="(min-width: 800px)" srcset="./images/gallery/${photo.imageName}"  width="600" height="600"">
            <img src="./images/gallery/${photo.imageName}" alt="${photo.description} width="${calculateAspectRatioFit(photo.width, photo.height, 400, 400).width}" height="${calculateAspectRatioFit(photo.width, photo.height, 400, 400).height}" max-width="400" max-height="400" lazy="loading">
            </picture>
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
