const hamburgerMenuIcon = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

let menuOpen = false;

hamburgerMenuIcon.addEventListener('click', ()=> {

    console.log(navLinks.style.height);

    TweenMax.to(navLinks, .15, {height: `${menuOpen ? '0px' : '135px'}`})

    // navLinks.style.height = menuOpen ? '0px' : '135px';

    menuOpen = !menuOpen;

});

window.addEventListener('resize', function() {
    if(this.innerWidth >= 800) {
        navLinks.style.height = '0px';

        menuOpen = false;
    }
});

// class HamburgerMenu() {
//     constructor(hamburgerMenu) {
//         this.hamburgerMenu = hamburgerMenu;
//     }
// }