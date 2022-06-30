window.onload = function() {
    const dealsList = document.querySelector(".deals-list");

    dealsList.addEventListener('click', (e) => {
        if(e.target.classList.contains("slider-video")) {
            if (e.target.paused === true) {
                e.target.play();
            } else {
                e.target.pause();
            }
        }
    })
}

$(document).ready(function(){
    $('.slick-slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
    });
});