let sliderList = document.getElementById('sliderList');
let startElem;
let timer;


class Slide {
    /**
     *
     * @param {number} direction
     */
    // constructor(direction) {
    //     this.direction = direction;
    // }


     moveSliderLeft(direction) {

        sliderList.style.transform = 'translateX(' + direction + 'px)';

        sliderList.addEventListener('transitionend', this.circleSlideLeft);

        this.autoSlide(this.moveSliderLeft, 2000);

    }

    moveSliderRight(direction) {
        sliderList.style.transform = 'translateX(' + direction + 'px)';

        sliderList.addEventListener('transitionend', this.circleSlideRight);

        this.autoSlide(this.moveSliderLeft, 2000);

    }

    circleSlideLeft() {
        sliderList.style.transition = 'none';

        startElem = document.getElementsByClassName('slider__slide')[0];

        console.log(startElem);

        sliderList.removeChild(startElem);

        sliderList.append(startElem);

        sliderList.style.transform = 'translate(0, 0)';


        setTimeout(function () {
            sliderList.style.transition = '';


        });
    }

    circleSlideRight() {
        sliderList.style.transition = 'none';

        startElem = document.getElementsByClassName('slider__slide');
        startElem = startElem[startElem.length - 1];
        console.log(startElem);
        sliderList.prepend(startElem);

        sliderList.removeChild(startElem);


        sliderList.style.transform = 'translate(0, 0)';


        setTimeout(function () {
            sliderList.style.transition = '';
        });

    }


    autoSlide(method, ms) {
        return timer = setTimeout(method, ms);
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
