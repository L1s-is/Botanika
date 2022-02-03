"use strict";

//animation
(function () {
    let navAnimate = document.querySelectorAll('.nav__link')

    for (let i = navAnimate.length - 1; i >= 0; i--) {

        navAnimate[i].addEventListener('mouseenter', function () {
            this.classList.toggle('in');
            this.classList.remove('out');
        })

        navAnimate[i].addEventListener('mouseleave', function () {
            this.classList.toggle('out');
            this.classList.remove('in');
        })
    }
})();


//slider
(function () {
    let slides = document.getElementsByClassName("slider__card");
    let slideIndex = 0;
    showSlides()

    function showSlides() {
        for (let i = 1; i < slides.length; i++) {
            hideElement(slides[i])
        }
    }

    function showElement(element) {
        let opacity = 0
        element.opacity = opacity
        element.style.display = ""

        function animation() {
            opacity += 0.05
            element.style.opacity = opacity
            if (opacity < 1) {
                requestAnimationFrame(animation)
            }
        }

        animation()
    }

    function hideElement(element, cb) {
        let opacity = getComputedStyle(element).getPropertyValue("opacity")

        function animation() {
            opacity -= 0.05
            element.style.opacity = opacity
            if (opacity > 0) {
                requestAnimationFrame(animation)
            } else {
                element.style.display = "none"
                if (cb) cb()
            }
        }

        animation()
    }

    let btnForward = document.querySelector('.arrow__forward')
    btnForward.onclick = function () {
        let slideIndexEx = slideIndex
        if (slideIndex - 1 === -1) {
            slideIndex = slides.length - 1
        } else {
            slideIndex--
        }
        hideElement(slides[slideIndexEx], () => showElement(slides[slideIndex]))
    }

    let btnBack = document.querySelector('.arrow__back')
    btnBack.onclick = function () {
        let slideIndexEx = slideIndex
        if (slideIndex + 1 === slides.length) {
            slideIndex = 0
        } else {
            slideIndex++
        }
        hideElement(slides[slideIndexEx], () => showElement(slides[slideIndex]))
    }
})();