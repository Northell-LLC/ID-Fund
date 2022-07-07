const carouselCounterItem = Array.from(document.querySelectorAll('.carousel-counter-item'));
const currentSlideCount = document.querySelector('.count-current');
const totalSlidesCount = document.querySelector('.count-total');
const sliderPrevButton = document.querySelector('.control-prev-bottom');
const sliderNextButton = document.querySelector('.control-next-bottom');

countSlides();
function countSlides() {
    totalSlidesCount.innerHTML = carouselCounterItem.length;

    carouselCounterItem.map((item, index) => {
        setTimeout(() => {
            if(item.classList.contains('active')) {
                currentSlideCount.innerHTML = item.getAttribute('data-current');
            }
        }, 620);
    });
}

sliderPrevButton.addEventListener('click', () => {
    countSlides();
});

sliderNextButton.addEventListener('click', () => {
    countSlides();
});