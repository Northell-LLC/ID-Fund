const openDealsTabButton = document.querySelector("#open-deals-tab-button");
const completedDealsTabButton = document.querySelector(
  "#completed-deals-tab-button"
);
const openDealsTab = document.querySelector(".open-deals-tab");
const completedDealsTab = document.querySelector(".completed-deals-tab");

openDealsTabButton.addEventListener("click", () => {
  openDealsTab.classList.add("show-tab");
  completedDealsTab.classList.remove("show-tab");

  openDealsTabButton.classList.add("active");
  completedDealsTabButton.classList.remove("active");
});
completedDealsTabButton.addEventListener("click", () => {
  openDealsTab.classList.remove("show-tab");
  completedDealsTab.classList.add("show-tab");

  openDealsTabButton.classList.remove("active");
  completedDealsTabButton.classList.add("active");
});
