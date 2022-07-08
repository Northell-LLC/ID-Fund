window.onload = function() {
    const dealsList = document.querySelector(".deals-list");
    const dealsCompletedList = document.querySelector(".deals-completed-list");

    dealsList.addEventListener('click', (e) => {
        if(e.target.classList.contains("slider-video")) {
            if (e.target.paused === true) {
                e.target.play();
            } else {
                e.target.pause();
            }
        }
    })

    dealsCompletedList.addEventListener('click', (e) => {
        if(e.target.classList.contains("slider-video")) {
            if (e.target.paused === true) {
                e.target.play();
            } else {
                e.target.pause();
            }
        }
    })
}