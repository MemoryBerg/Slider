/* class Slider {

test

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

//let left = 0;
//let sliderList = document.getElementById('sliderList');

//document.getElementById('buttonNext').addEventListener('click', slideLeft);

// autoLeafing(ms);
//
// function autoLeafing(ms) {
//     timer = setTimeout(slideLeft, ms)
// }

/*
function slideLeft() {

    left = - 200;

    sliderList.style.transform = 'translateX(' + left + 'px)';

    sliderList.addEventListener('transitionend', circleSlide);


    autoLeafing(ms);
}

function slideRight() {

    left = + 200;

    sliderList.style.transform = 'translateX(' + left + 'px)';

    clearTimeout(autoLeafing);

}

*/

/*
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

 */


let slider = new Slide(3);
//slideLeft.move();
//slideLeft.circleSlide();
/*
document.getElementById('buttonPrev').addEventListener('click', () => {
    slider.moveSliderLeft(-200);
});


document.getElementById('buttonNext').addEventListener('click', () => {
    slider.moveSliderRight(200);
});

 */

document.getElementById('buttonPrev').addEventListener('click', wrapperLeft);
document.getElementById('buttonNext').addEventListener('click', wrapperRight);

//slider.autoSlide(slider.moveSliderLeft, 2000);


function wrapperLeft() {
    slider.moveSlider(-200);
}

function wrapperRight() {
    slider.moveSlider(200);
}

