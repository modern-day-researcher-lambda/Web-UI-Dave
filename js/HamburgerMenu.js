const hamburgerMenuIcon = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const featuresLink = document.querySelector('#features-link');

let menuOpen = false;

hamburgerMenuIcon.addEventListener('click', evt => {
    toggleMenu();

    evt.stopPropagation();
});

featuresLink.addEventListener('click', evt => {
    toggleMenu();

    evt.stopPropagation();
});

document.addEventListener('click', () => {
    if(menuOpen) {
        toggleMenu();
    }
});


function toggleMenu() {
    console.log('click');
    
    TweenMax.to(navLinks, .15, {height: `${menuOpen ? '0px' : '135px'}`})

    menuOpen = !menuOpen;
}
