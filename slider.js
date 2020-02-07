class Slider {
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
            tagName: 'img',
            attrs: {
                src: "./img/cat1.jpg",
                class: "slider__slide"
            }
        },
        {
            tagName: 'img',
            attrs: {
                src: "./img/cat2.jpg",
                class: "slider__slide"
            }
        },
        {
            tagName: 'img',
            attrs: {
                src: "./img/cat3.jpg",
                class: "slider__slide"
            }
        },
        {
            tagName: 'img',
            attrs: {
                src: "./img/cat4.jpg",
                class: "slider__slide"
            }
        },
        {
            tagName: 'img',
            attrs: {
                src: "./img/cat5.jpg",
                class: "slider__slide"
            }
        },
            ],
    attrs: {
        class: "slider__list"
    }
};

/*
let cats = new Slider({
    parentNode: sliderParent,
    slides: catsSlider,

});

cats.renderNodes(catsSlider, sliderParent);

 */

let left = 0;
let timer;
let sliderList = document.getElementById('sliderList');
let ms = 2000;

document.getElementById('buttonPrev').addEventListener('click', slideRight);
document.getElementById('buttonNext').addEventListener('click', slideLeft);

autoLeafing(ms);

function autoLeafing(ms) {
    timer = setTimeout(slideLeft, ms)
}
function slideLeft() {

    left = - 200;

    sliderList.style.transform = 'translateX(' + left + 'px)';

    sliderList.addEventListener('transitionend', circleSlide);


    autoLeafing(ms);
}

function slideRight() {

    left = + 200;

    sliderList.style.transform = 'translateX(' + left + 'px)';

}


function circleSlide() {

    sliderList.style.transition = 'none';


    let startElem = document.getElementsByClassName('slider__slide')[0];

    sliderList.removeChild(startElem);

    sliderList.append(startElem);

    sliderList.style.transform = 'translate(0, 0)';


    setTimeout(function () {
        sliderList.style.transition = '';

    })
}

