const onboardingTabButton = document.querySelector('#onboarding-tab-button');
const documentsTabButton = document.querySelector('#documents-tab-button');
const settingsTabButton = document.querySelector('#settings-tab-button');
const onboardingTab = document.querySelector('.onboarding-tab');
const documentsTab = document.querySelector('.documents-tab');
const settingsTab = document.querySelector('.settings-tab');

onboardingTabButton.addEventListener('click', () => {
    onboardingTab.classList.add('show-tab');
    documentsTab.classList.remove('show-tab');
    settingsTab.classList.remove('show-tab');

    onboardingTabButton.classList.add('active');
    documentsTabButton.classList.remove('active');
    settingsTabButton.classList.remove('active');
});

documentsTabButton.addEventListener('click', () => {
    onboardingTab.classList.remove('show-tab');
    documentsTab.classList.add('show-tab');
    settingsTab.classList.remove('show-tab');

    onboardingTabButton.classList.remove('active');
    documentsTabButton.classList.add('active');
    settingsTabButton.classList.remove('active');
});

settingsTabButton.addEventListener('click', () => {
    onboardingTab.classList.remove('show-tab');
    documentsTab.classList.remove('show-tab');
    settingsTab.classList.add('show-tab');

    onboardingTabButton.classList.remove('active');
    documentsTabButton.classList.remove('active');
    settingsTabButton.classList.add('active');
});