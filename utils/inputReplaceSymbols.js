const input = document.querySelectorAll(".input-number");

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => input[i].value = input[i].value.replace(/[^0-9]/g,''));
}