class CallToAction {
    constructor(callToAction) {
        this.callToAction = callToAction;

        document.addEventListener('scroll', this.updateCTAOpacity.bind(this));
    }

    updateCTAOpacity() {
        this.callToAction.style.opacity = 1 - (window.scrollY / 400);
    }
}

// new CallToAction(document.querySelector('.cta'))

/* 
    This seems stupid...
*/