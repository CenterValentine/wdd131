
const menu = document.querySelector(".menu")
const hamburger = document.getElementById("hamburger-menu")
// const menu = document.querySelectorAll(".menu a")
// // mediaQuery = window.matchMedia('(max-width: 52rem')

// const menuElement = document.querySelector('.menu div');

// mediaQuery.addListener(function () {
//     console.log("You moved the screen")
// });

function toggleMenu(f) {
    console.log("toggleMenu()");
    menu.classList.toggle('show');
    hamburger.classList.toggle('open');
    console.log(" {toggle classes: 'show''open'}")
};

// function hideMenu(f) {
//     console.log("hide");
//     // mainElement.id = '';
//     f.forEach(a => {
//         // console.log(a.textContent);

//         a.style.display = "none";
//     });
// };

hamburger.addEventListener('click', () => toggleMenu(menu));
// mainElement.addEventListener('mouseenter', launchMenu(menu));
// hamburger.addEventListener('click', () => hideMenu(menu));
