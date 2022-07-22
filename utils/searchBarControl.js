const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-bar-button');
const pageSelectBlock = document.querySelector('.page-select-block');
const searchRelustsContainer = document.querySelector('.search-relusts-container');
const searchResultList = document.querySelector('#search-result-list');
const searchResultsNumber = document.querySelector('.search-results-number');
const searchListItems = Array.from(document.querySelectorAll('.search-select'));

searchButton.addEventListener('click', () => {
    if(searchInput.value !== '') {
        pageSelectBlock.classList.add('page-select-hidden');
        searchRelustsContainer.classList.remove('page-select-hidden');
        searchResultsNumber.innerHTML = `4 results for «${searchInput.value}»`;
    }
});

searchInput.addEventListener('input', () => {
    if(searchInput.value === '') {
        hideSearchResult();
    }
});

searchResultList.addEventListener('click', (event) => {
    searchListItems.map(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
});

function hideSearchResult() {
    pageSelectBlock.classList.remove('page-select-hidden');
    searchRelustsContainer.classList.add('page-select-hidden');
}