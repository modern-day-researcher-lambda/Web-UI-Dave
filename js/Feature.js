class Feature {
    constructor(feature) {
        this.feature = feature;

        this.featureAbout = feature.querySelector('.feature-about');

        this.demoContainer = feature.querySelector('.demo-container');

        this.featureType = this.feature.dataset.feature;

        this.demoButton = this.feature.querySelector(`.demo-button`);

        this.demoButton.addEventListener('click', this.expandHeight.bind(this));
    }

    expandHeight() {
        console.log('click', this.featureType);
        
        // this.feature.style.alignItems = 'flex-start';
        // this.feature.style.flexWrap = 'wrap';
        // this.feature.style.padding = '3rem';

        // this.feature.scrollIntoView({behavior: "smooth", block: "start"});

        TweenMax.to(this.feature, .75, {height: '850px'});


        // this.feature.style.height = 'fit-content';

        this.demoContainer = new DemoContainer(this.demoContainer);

        this.demoContainer.displayDemo();
    }
}

class DemoContainer {
    constructor(demoContainer) {
        this.demoContainer = demoContainer;
    }

    displayDemo() {
        console.log(this)
        // this.demoContainer.style.display = 'flex';
        // this.demoContainer.style.
        
    }
}

const features = document.querySelectorAll('.feature');

features.forEach(feature => new Feature(feature));