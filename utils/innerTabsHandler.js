const overviewTabButton = document.querySelector('#overview-tab-button');
const documentsTabButton = document.querySelector('#documents-tab-button');
const investmentsTabButton = document.querySelector('#investments-tab-button');
const overviewTab = document.querySelector('.overview-tab');
const documentsTab = document.querySelector('.documents-tab');
const investmentsTab = document.querySelector('.investments-tab');

overviewTabButton.addEventListener('click', () => {
    overviewTab.classList.add('show-tab');
    documentsTab.classList.remove('show-tab');
    investmentsTab.classList.remove('show-tab');

    overviewTabButton.classList.add('active');
    documentsTabButton.classList.remove('active');
    investmentsTabButton.classList.remove('active');
});

documentsTabButton.addEventListener('click', () => {
    overviewTab.classList.remove('show-tab');
    documentsTab.classList.add('show-tab');
    investmentsTab.classList.remove('show-tab');

    overviewTabButton.classList.remove('active');
    documentsTabButton.classList.add('active');
    investmentsTabButton.classList.remove('active');
});

investmentsTabButton.addEventListener('click', () => {
    overviewTab.classList.remove('show-tab');
    documentsTab.classList.remove('show-tab');
    investmentsTab.classList.add('show-tab');

    overviewTabButton.classList.remove('active');
    documentsTabButton.classList.remove('active');
    investmentsTabButton.classList.add('active');
});