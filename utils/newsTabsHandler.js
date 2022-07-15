const companyUpdatesTabButton = document.querySelector('#company-updates-tab-button');
const quarReportsTabButton = document.querySelector('#quar-reports-tab-button');
const newsTabButton = document.querySelector('#news-tab-button');
const eventsTabButton = document.querySelector('#events-tab-button');

const companyUpdatesTab = document.querySelector('.company-updates-tab');
const quarReportsTab = document.querySelector('.quar-reports-tab');
const newsTab = document.querySelector('.news-tab');
const eventsTab = document.querySelector('.events-tab');

companyUpdatesTabButton.addEventListener('click', () => {
    companyUpdatesTab.classList.add('show-tab');
    quarReportsTab.classList.remove('show-tab');
    newsTab.classList.remove('show-tab');
    eventsTab.classList.remove('show-tab');

    companyUpdatesTabButton.classList.add('active');
    quarReportsTabButton.classList.remove('active');
    newsTabButton.classList.remove('active');
    eventsTabButton.classList.remove('active');
});

quarReportsTabButton.addEventListener('click', () => {
    companyUpdatesTab.classList.remove('show-tab');
    quarReportsTab.classList.add('show-tab');
    newsTab.classList.remove('show-tab');
    eventsTab.classList.remove('show-tab');

    companyUpdatesTabButton.classList.remove('active');
    quarReportsTabButton.classList.add('active');
    newsTabButton.classList.remove('active');
    eventsTabButton.classList.remove('active');
});

newsTabButton.addEventListener('click', () => {
    companyUpdatesTab.classList.remove('show-tab');
    quarReportsTab.classList.remove('show-tab');
    newsTab.classList.add('show-tab');
    eventsTab.classList.remove('show-tab');

    companyUpdatesTabButton.classList.remove('active');
    quarReportsTabButton.classList.remove('active');
    newsTabButton.classList.add('active');
    eventsTabButton.classList.remove('active');
});

eventsTabButton.addEventListener('click', () => {
    companyUpdatesTab.classList.remove('show-tab');
    quarReportsTab.classList.remove('show-tab');
    newsTab.classList.remove('show-tab');
    eventsTab.classList.add('show-tab');

    companyUpdatesTabButton.classList.remove('active');
    quarReportsTabButton.classList.remove('active');
    newsTabButton.classList.remove('active');
    eventsTabButton.classList.add('active');
})