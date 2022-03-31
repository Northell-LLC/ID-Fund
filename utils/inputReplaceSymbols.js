function replaceSymbols() {
    this.value = this.value.replace(/[^0-9]/g,'')
}

const input = document.querySelectorAll(".input-number");
input.forEach((el) =>  {
    el.addEventListener("input", replaceSymbols);
});
