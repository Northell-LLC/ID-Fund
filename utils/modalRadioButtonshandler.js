const radioButtonsBlock = document.querySelector('.radio-buttons-block');
const radioButtonContainers = Array.from(document.querySelectorAll('.radio-button-container'));

radioButtonsBlock.addEventListener('click', (event) => {
    radioButtonContainers.map(item => {
        item.classList.remove('active-radio');

        if(item.id === event.target.getAttribute('data-number')) {
            item.classList.add('active-radio');
        }
    })
});