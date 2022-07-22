const body = document.querySelector('body');
const openModalButton = document.querySelector('.open-modal-button');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const modalCancelButton = document.querySelector('.modal-cancel-button');

const openAddressModalButton = document.querySelector('.open-address-modal-button');
const addressModalWrapper = document.querySelector('.modal-address-wrapper');
const addressModal = document.querySelector('.modal-address');
const saveAddressChanges = document.querySelector('.save-address-changes');
const addressModalCancelButton = document.querySelector('.modal-address-cancel-button');


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

openAddressModalButton.addEventListener('click', () => {
    addressModal.classList.remove('modal-visible');

    addressModal.classList.add('modal-visible');
    addressModalWrapper.classList.add('modal-wrapper-visible');
    body.classList.add('scroll-lock');
});


addressModalWrapper.addEventListener('click', (event) => {
	if (event.target === addressModalWrapper) {
		addressModalWrapper.classList.remove('modal-wrapper-visible');
        addressModal.classList.remove('modal-visible');
        body.classList.remove('scroll-lock');
	}
});

addressModalCancelButton.addEventListener('click', (event) => {
    closeModal(event);
});

saveAddressChanges.addEventListener('click', (event) => {
    closeModal(event);
})

function closeModal(event) {
    event.preventDefault();
    addressModalWrapper.classList.remove('modal-wrapper-visible');
    addressModal.classList.remove('modal-visible');
    body.classList.remove('scroll-lock');
}