const openDealsTabButton = document.querySelector("#open-deals-tab-button");
const completedDealsTabButton = document.querySelector(
  "#completed-deals-tab-button"
);
const externalDealsTabButton = document.querySelector(
  "#external-deals-tab-button"
);
const openDealsTab = document.querySelector(".open-deals-tab");
const externalDealsTab = document.querySelector(".external-deals-tab");

openDealsTabButton.addEventListener("click", () => {
  openDealsTab.classList.add("show-tab");
  externalDealsTab.classList.remove("show-tab");

  openDealsTabButton.classList.add("active");
  externalDealsTabButton.classList.remove("active");
});
externalDealsTabButton.addEventListener("click", () => {
  openDealsTab.classList.remove("show-tab");
  externalDealsTab.classList.add("show-tab");

  openDealsTabButton.classList.remove("active");
  externalDealsTabButton.classList.add("active");
});
