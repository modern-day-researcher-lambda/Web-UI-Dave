class Navigation {
    constructor(navLinks) {
        
        // Variables
        this.navLinks = navLinks;
        this.featuresLink = navLinks.querySelector('#features-link');
        
        this.numLinks = navLinks.querySelectorAll('a').length;
        this.menuOpen = false;

        this.hamburgerMenuIcon = document.querySelector('.hamburger-menu');

        // Event Listeners
        this.hamburgerMenuIcon.addEventListener('click', evt => {
            this.toggleMenu();
            evt.stopPropagation();
        });
        
        document.addEventListener('click', ()=> {
            if(this.menuOpen) {
                this.toggleMenu();
            }
        });

        if(this.featuresLink) {
            this.featuresLink.addEventListener('click', evt => {
                this.toggleMenu();
        
                evt.stopPropagation();
            });
        }
    }

    toggleMenu() {
    
        if(this.numLinks === 2) {
            TweenMax.to(this.navLinks, .15, {height: `${this.menuOpen ? '0px' : '90px'}`})
        }
        else {
            TweenMax.to(this.navLinks, .15, {height: `${this.menuOpen ? '0px' : '135px'}`})
        }
        
        this.menuOpen = !this.menuOpen;
    }
}

const navLinks = document.querySelector('.nav-links');

new Navigation(navLinks);
