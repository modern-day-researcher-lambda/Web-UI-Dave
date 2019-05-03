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

const features = document.querySelectorAll('.feature');

features.forEach(feature => {
    if(feature.dataset.feature != 'grow')
        new Feature(feature);
});