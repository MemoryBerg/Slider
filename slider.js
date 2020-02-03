class Slide {

    constructor (obj) {
        let {parentNode, slides, showSlides, sliderTime} = obj;
        this.parentNode = parentNode;
        this.slides = slides;
        this.showSlides = showSlides;
        this.sliderTime = sliderTime;
    }

    renderNodes(slides, parentNode) {
        render(slides, parentNode)
    }
}

let sliderParent = document.getElementById('slider__toolbar');

let catsSlider = {
    tagName: 'div',
    children: [
        {
            attrs: {
                tagName: 'div',
                style: "background: url(\"../img/cat1.jpg\"), center/contain",
                class: "slider__slide"
            }
        },
        {
            attrs: {
                style: "background: url(\"../img/cat2.jpg\"), center/contain",
                class: "slider__slide"
            }
        },
        {
            attrs: {
                style: "background: url(\"../img/cat3.jpg\"), center/contain",
                class: "slider__slide"
            }
        },
        {
            attrs: {
                style: "background: url(\"../img/cat4.jpg\"), center/contain",
                class: "slider__slide"
            }
        },
        {
            attrs: {
                style: "background: url(\"../img/cat5.jpg\"), center/contain",
                class: "slider__slide"
            }
        },
            ],
    attrs: {
        class: "slider__list"
    }
};


let cats = new Slide({
    parentNode: sliderParent,
    slides: catsSlider,

});

cats.renderNodes(catsSlider, sliderParent);

console.log(catsSlider);


// console.log(sliderParent.tagName);
// render(catsSlider, sliderParent);
