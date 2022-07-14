const dealsList = document.querySelector(".deals-list");
const dealsCompletedList = document.querySelector(".deals-completed-list");
const videoControls1 = document.querySelector(".video-controls-1");
const videoBtn1 = document.querySelector('.video-btn-1');
const sliderVideo1 = document.querySelector('.slider-video-1');
const videoControls2 = document.querySelector(".video-controls-2");
const videoBtn2 = document.querySelector('.video-btn-2');
const sliderVideo2 = document.querySelector('.slider-video-2');
const videoControls3 = document.querySelector(".video-controls-3");
const videoBtn3 = document.querySelector('.video-btn-3');
const sliderVideo3 = document.querySelector('.slider-video-3');

function playVideo(video) {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function showVideoControls(video) {
    video.classList.remove('play-pause-hide');
}

function hideVideoControls(video, button) {
    if (!video.paused) {
        button.classList.add('play-pause-hide');
    }
}

videoBtn1.addEventListener('click', () => {
    playVideo(sliderVideo1);
});
videoControls1.addEventListener('mouseover', () => {
    showVideoControls(videoBtn1);
});
videoControls1.addEventListener('mouseout', () => {
    hideVideoControls(sliderVideo1, videoBtn1);
});

videoBtn2.addEventListener('click', () => {
    playVideo(sliderVideo2);
});
videoControls2.addEventListener('mouseover', () => {
    showVideoControls(videoBtn2);
});
videoControls2.addEventListener('mouseout', () => {
    hideVideoControls(sliderVideo2, videoBtn2);
});

videoBtn3.addEventListener('click', () => {
    playVideo(sliderVideo3);
});
videoControls3.addEventListener('mouseover', () => {
    showVideoControls(videoBtn3);
});
videoControls3.addEventListener('mouseout', () => {
    hideVideoControls(sliderVideo3, videoBtn3);
});