function moveInput(position, target) {
    const check = position !== 'previous' ? target.nextElementSibling : target.previousElementSibling;

    while (target = check) {
        if (target.tagName.toLowerCase() === "input") {
            target.focus();
            break;
        }
    }

}

function moveToNext (event) {
    const { target } = event;
    const myLength = target.value.length;

    if (myLength) {
        moveInput('next', target);
    } else {
        moveInput('previous', target);
    }
}

const container = document.querySelector(".confirm-number-form");
container.addEventListener('keyup', moveToNext);
