const openTabButton = document.querySelector('#open-deals-tab');
const completedTabButton = document.querySelector('#completed-deals-tab');
const openList = document.querySelector('.deals-list');
const completedList = document.querySelector('.deals-completed-list');

openTabButton.addEventListener('click', () => {

    openTabButton.classList.add('active');
    completedTabButton.classList.remove('active');

    openList.classList.add('show-tab');
    completedList.classList.remove('show-tab');
});

completedTabButton.addEventListener('click', () => {

    completedTabButton.classList.add('active');
    openTabButton.classList.remove('active');

    completedList.classList.add('show-tab');
    openList.classList.remove('show-tab');
});