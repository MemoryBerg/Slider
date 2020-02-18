let sliderList = document.getElementById('sliderList');
let toolbar = document.getElementById('slider__toolbar');
let field = document.getElementById('slider');
let startElem;
let lastElem;
let timer;


class Slide {
    /**
     *
     * @param {number} direction
     * @param {number} visiblePics
     */
    // constructor(direction) {
    //     this.direction = direction;
    // }

    constructor(visiblePics) {
        this.visiblePics = visiblePics;

        toolbar.style.width = (visiblePics * 200) + ((visiblePics - 1) * 1) + 'px';
        field.style.width = toolbar.style.width + 90 + 'px';
    }


     moveSlider(direction) {

        sliderList.style.transform = 'translateX(' + direction + 'px)';

        if(Math.sign(direction) === -1) {
            sliderList.removeEventListener('transitioned', wrapperCirclePositive);
            sliderList.removeEventListener('transitioned', wrapperCircleNegative);
            sliderList.addEventListener('transitionend', wrapperCircleNegative);
        } else if(Math.sign(direction) === 1) {
            sliderList.removeEventListener('transitioned', wrapperCircleNegative);
            sliderList.removeEventListener('transitioned', wrapperCirclePositive);
            sliderList.addEventListener('transitionend', wrapperCirclePositive);
        }


         //this.autoSlide(this.moveSliderLeft, 2000);

    }


/*
    moveSliderRight(direction) {
        sliderList.style.transform = 'translateX(' + direction + 'px)';

        sliderList.addEventListener('transitionend', () => this.circleSlide(1));

        //this.autoSlide(this.moveSliderLeft, 2000);

    }

 */
/*
    circleSlideLeft() {
        sliderList.style.transition = 'none';
        startElem = document.getElementsByClassName('slider__slide')[0];
        sliderList.removeChild(startElem);
        sliderList.append(startElem);
        sliderList.style.transform = 'translate(0, 0)';
        console.log(sliderList);

        setTimeout(function () {
            sliderList.style.transition = '';
        });
    }

    circleSlideRight() {
        sliderList.style.transition = 'none';
        lastElem = document.getElementsByClassName('slider__slide');
        lastElem = lastElem[lastElem.length - 1];
        sliderList.removeChild(lastElem);
        sliderList.prepend(lastElem);
        sliderList.style.transform = 'translate(0, 0)';
        console.log(sliderList);

        setTimeout(function () {
            sliderList.style.transition = '';
        });

    }

 */



    autoSlide(method, ms) {
        timer = setTimeout(method, ms);
    }

}



// autoLeafing(ms);
//
// function autoLeafing(ms) {
//     timer = setTimeout(slideLeft, ms)
// }

// function circleSlideLeft() {
//     sliderList.style.transition = 'none';
//
//     startElem = document.getElementsByClassName('slider__slide')[0];
//
//     console.log(startElem);
//
//     sliderList.removeChild(startElem);
//
//     sliderList.append(startElem);
//
//     sliderList.style.transform = 'translate(0, 0)';
//
//
//     setTimeout(function () {
//         sliderList.style.transition = '';
//
//
//     });
//
// }

// function auto(method, ms) {
//     timer = setTimeout(method, ms);
//
// }
function circleSlide(side) {
    sliderList.style.transition = 'none';
    console.log(Math.sign(side));
    if(Math.sign(side) === -1) {
        startElem = document.getElementsByClassName('slider__slide')[0];
        sliderList.removeChild(startElem);
        sliderList.append(startElem);
        console.log(startElem);
    } else if (Math.sign(side) === 1) {
        lastElem = document.getElementsByClassName('slider__slide');
        lastElem = lastElem[lastElem.length - 1];
        sliderList.removeChild(lastElem);
        sliderList.prepend(lastElem);
        console.log(lastElem);
    }
    sliderList.style.transform = 'translate(0, 0)';
    console.log(sliderList);

    setTimeout(function () {
        sliderList.style.transition = '';
    });
}

function wrapperCircleNegative() {
    return circleSlide(-1);
}
function wrapperCirclePositive() {
    return circleSlide(1);
}
