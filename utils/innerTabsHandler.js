
const overviewTabButton = document.querySelector('#overview-tab-button');
const documentsTabButton = document.querySelector('#documents-tab-button');
const investmentsTabButton = document.querySelector('#investments-tab-button');
const overviewTab = document.querySelector('#overview-tab');
const documentsTab = document.querySelector('#documents-tab');
const investmentsTab = document.querySelector('#investments-tab');

overviewTabButton.addEventListener('click', () => {
    overviewTab.style.display = 'block';
    documentsTab.style.display = 'none';
    investmentsTab.style.display = 'none';

    overviewTabButton.classList.add('active');
    documentsTabButton.classList.remove('active');
    investmentsTabButton.classList.remove('active');
});

documentsTabButton.addEventListener('click', () => {
    overviewTab.style.display = 'none';
    documentsTab.style.display = 'block';
    investmentsTab.style.display = 'none';

    overviewTabButton.classList.remove('active');
    documentsTabButton.classList.add('active');
    investmentsTabButton.classList.remove('active');
});

investmentsTabButton.addEventListener('click', () => {
    overviewTab.style.display = 'none';
    documentsTab.style.display = 'none';
    investmentsTab.style.display = 'block';

    overviewTabButton.classList.remove('active');
    documentsTabButton.classList.remove('active');
    investmentsTabButton.classList.add('active');
});