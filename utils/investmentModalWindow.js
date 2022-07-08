const openModalButton = document.querySelector('.investment-button');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const modalCancelButton = document.querySelector('.modal-cancel-button');
const body = document.querySelector('body');


openModalButton.addEventListener('click', () => {
    modal.classList.remove('modal-visible');

    modal.classList.add('modal-visible');
    modalWrapper.classList.add('modal-wrapper-visible');
    body.classList.add('scroll-lock');
});


modalWrapper.addEventListener('click', (event) => {
	if (event.target === modalWrapper) {
		modalWrapper.classList.remove('modal-wrapper-visible');
        modal.classList.remove('modal-visible');
        body.classList.remove('scroll-lock');
	}
});

modalCancelButton.addEventListener('click', () => {
    modalWrapper.classList.remove('modal-wrapper-visible');
    modal.classList.remove('modal-visible');
    body.classList.remove('scroll-lock');
});