const openTabButton = document.querySelector('#open-deals-tab');
const completedTabButton = document.querySelector('#completed-deals-tab');
const openList = document.querySelector('.deals-list');
const completedList = document.querySelector('.deals-completed-list');

openTabButton.addEventListener('click', () => {
    
    openTabButton.classList.add('active');
    completedTabButton.classList.remove('active');

    openList.style.display = 'block';
    completedList.style.display = 'none';

    $('.slick-slider').slick('unslick').slick({
        infinite: true,
        arrows: true,
        dots: true,
        prevArrow: "<img src='../../assets/images/left-arrow.svg' class='prev' alt='left-arrow'>",
        nextArrow: "<img src='../../assets/images/right-arrow.svg' class='next' alt='right-arrow'>",
    })
});

completedTabButton.addEventListener('click', () => {

    completedTabButton.classList.add('active');
    openTabButton.classList.remove('active');

    completedList.style.display = 'block';
    openList.style.display = 'none';

    $('.slick-slider').slick('unslick').slick({
        infinite: true,
        arrows: true,
        dots: true,
        prevArrow: "<img src='../../assets/images/left-arrow.svg' class='prev' alt='left-arrow'>",
        nextArrow: "<img src='../../assets/images/right-arrow.svg' class='next' alt='right-arrow'>",
    })
});