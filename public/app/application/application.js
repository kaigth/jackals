import query from '../util/query';
import Slideshow from './slideshow';

// This is your global application.  This is where it all begins.

export default class Application {
    constructor() {
        this.slideshow = query('.js-slideshow');

        this.init();
    }

    init() {
        this.slideshow.map((elem) => new Slideshow(elem, this));
    }

    teardown() {
        this.slideshow = null;
    }
}