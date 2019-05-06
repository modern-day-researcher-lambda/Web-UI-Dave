class Feature {
    constructor(feature) {
        this.feature = feature;
        this.demoButton = this.feature.querySelector(`.demo-button`);
        this.demoHidden = true;

        this.demoButton.addEventListener('click', this.toggleHeight.bind(this));
    }

    toggleHeight() {

        if(this.demoHidden) {
            TweenMax.to(this.feature, .75, {height: '850px'});
            this.demoButton.textContent = 'Hide';
            this.demoButton.style.opacity = 1;
        }
        else {
            TweenMax.to(this.feature, .75, {height: '290px'});
            this.demoButton.textContent = 'See How';
        }

        this.demoHidden = !this.demoHidden;
    }
}

let features = document.querySelectorAll('.feature').

features = Array.from(features).filter(feature => feature.dataset.feature !== 'grow');

features.forEach(feature => new Feature(feature));