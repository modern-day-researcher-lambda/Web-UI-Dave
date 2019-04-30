class Feature {
    constructor(feature) {
        this.feature = feature;

        this.featureType = this.feature.dataset.feature;

        this.demoButton = this.feature.querySelector('.demo-button');

        this.demoButton.addEventListener('click', this.displayDemoContainer.bind(this));
    }

    displayDemoContainer() {
        console.log('click', this.featureType);

        // let demoContainer = document.querySelector(`.demo-container[data-feature="${this.featureType}"]`);

        // demoContainer.style.display = 'block';
    }
}

class DemoContainer {
    constructor() {

    }
}

const features = document.querySelectorAll('.feature');

features.forEach(feature => new Feature(feature));