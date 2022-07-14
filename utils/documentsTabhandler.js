const documentsNavListItem = Array.from(document.querySelectorAll('.documents-nav-list-item'));
const settingsTabs = Array.from(document.querySelectorAll('.acc-settings-tab'));
const documentsSubscriptionsButton = document.querySelector('#documents-subscriptions-button');
const documentsConfirmsButton = document.querySelector('#documents-confirms-button');
const documentsStatementsButton = document.querySelector('#documents-statements-button');
const documentsKDocsButton = document.querySelector('#documents-k-docs-button');
const documentsMiscellButton = document.querySelector('#documents-miscell-button');
const documentsPrivateButton = document.querySelector('#documents-private-button');

const documentsSubscriptionsTab = document.querySelector('.subscriptions-main');
const documentsConfirmsTab = document.querySelector('.confirms-main');
const documentsStatementsTab = document.querySelector('.statements-main');
const documentsKDocsTab = document.querySelector('.k-docs-main');
const documentsMiscellTab = document.querySelector('.miscell-main');
const documentsPrivateTab = document.querySelector('.private-main');

function defaultIconPaint() {
    documentsSubscriptionsButton.firstElementChild.src = '../../assets/images/verification-grey.svg';
    documentsConfirmsButton.firstElementChild.src = '../../assets/images/confirms-gray-icon.svg';
    documentsStatementsButton.firstElementChild.src = '../../assets/images/statements-gray-icon.svg';
    documentsKDocsButton.firstElementChild.src = '../../assets/images/k-docs-gray-icon.svg';
    documentsMiscellButton.firstElementChild.src = '../../assets/images/miscell-gray-icon.svg';
    documentsPrivateButton.firstElementChild.src = '../../assets/images/private-gray-icon.svg';
}

function tabColorHandler(currentButton) {
    documentsNavListItem.map(item => {
        item.classList.remove('active-documents-tab');
    });
    currentButton.classList.add('active-documents-tab');
}

function settingsTabHandler(currentTab) {
    settingsTabs.map(item => {
        item.classList.add('settings-tab-hidden');
    })
    currentTab.classList.remove('settings-tab-hidden');
}

function selectSubscriptionsTab() {
    tabColorHandler(documentsSubscriptionsButton);
    defaultIconPaint();
    documentsSubscriptionsButton.firstElementChild.src = '../../assets/images/verification.svg';
    settingsTabHandler(documentsSubscriptionsTab);
}
documentsSubscriptionsButton.addEventListener('click', () => {
    selectSubscriptionsTab();
})

function selectConfirmsTab() {
    tabColorHandler(documentsConfirmsButton);
    defaultIconPaint();
    documentsConfirmsButton.firstElementChild.src = '../../assets/images/confirms-icon.svg';
    settingsTabHandler(documentsConfirmsTab);
}
documentsConfirmsButton.addEventListener('click', () => {
    selectConfirmsTab();
})

function selectStatementsTab() {
    tabColorHandler(documentsStatementsButton);
    defaultIconPaint();
    documentsStatementsButton.firstElementChild.src = '../../assets/images/statements-icon.svg';
    settingsTabHandler(documentsStatementsTab);
}
documentsStatementsButton.addEventListener('click', () => {
    selectStatementsTab();
})

function selectKDocsTab() {
    tabColorHandler(documentsKDocsButton);
    defaultIconPaint();
    documentsKDocsButton.firstElementChild.src = '../../assets/images/k-docs-icon.svg';
    settingsTabHandler(documentsKDocsTab);
}
documentsKDocsButton.addEventListener('click', () => {
    selectKDocsTab();
})

function selectMiscellTab() {
    tabColorHandler(documentsMiscellButton);
    defaultIconPaint();
    documentsMiscellButton.firstElementChild.src = '../../assets/images/miscell-icon.svg';
    settingsTabHandler(documentsMiscellTab);
}
documentsMiscellButton.addEventListener('click', () => {
    selectMiscellTab();
})

function selectPrivateTab() {
    tabColorHandler(documentsPrivateButton);
    defaultIconPaint();
    documentsPrivateButton.firstElementChild.src = '../../assets/images/private-icon.svg';
    settingsTabHandler(documentsPrivateTab);
}
documentsPrivateButton.addEventListener('click', () => {
    selectPrivateTab();
})