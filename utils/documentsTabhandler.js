const documentsSubscriptionsButton = document.querySelector(
  "#documents-subscriptions-button"
);
const documentsConfirmsButton = document.querySelector(
  "#documents-confirms-button"
);
const documentsStatementsButton = document.querySelector(
  "#documents-statements-button"
);
const documentsKDocsButton = document.querySelector("#documents-k-docs-button");
const documentsMiscellButton = document.querySelector(
  "#documents-miscell-button"
);
const documentsPrivateButton = document.querySelector(
  "#documents-private-button"
);

const documentsSubscriptionsTab = document.querySelector(".subscriptions-main");
const documentsConfirmsTab = document.querySelector(".confirms-main");
const documentsStatementsTab = document.querySelector(".statements-main");
const documentsKDocsTab = document.querySelector(".k-docs-main");
const documentsMiscellTab = document.querySelector(".miscell-main");
const documentsPrivateTab = document.querySelector(".private-main");

function selectConfirmsTab() {
  documentsConfirmsTab.classList.remove("settings-tab-hidden");
  documentsSubscriptionsTab.classList.add("settings-tab-hidden");
  documentsStatementsTab.classList.add("settings-tab-hidden");
  documentsKDocsTab.classList.add("settings-tab-hidden");
  documentsMiscellTab.classList.add("settings-tab-hidden");
  documentsPrivateTab.classList.add("settings-tab-hidden");

  documentsConfirmsButton.lastElementChild.classList.add(
    "active-documents-tab"
  );
  documentsSubscriptionsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsStatementsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsKDocsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsMiscellButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsPrivateButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

function selectSubscriptionsTab() {
  documentsSubscriptionsTab.classList.remove("settings-tab-hidden");
  documentsConfirmsTab.classList.add("settings-tab-hidden");
  documentsStatementsTab.classList.add("settings-tab-hidden");
  documentsKDocsTab.classList.add("settings-tab-hidden");
  documentsMiscellTab.classList.add("settings-tab-hidden");
  documentsPrivateTab.classList.add("settings-tab-hidden");

  documentsSubscriptionsButton.lastElementChild.classList.add(
    "active-documents-tab"
  );
  documentsConfirmsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsStatementsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsKDocsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsMiscellButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsPrivateButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

function selectStatementsTab() {
  documentsStatementsTab.classList.remove("settings-tab-hidden");

  documentsSubscriptionsTab.classList.add("settings-tab-hidden");
  documentsConfirmsTab.classList.add("settings-tab-hidden");
  documentsKDocsTab.classList.add("settings-tab-hidden");
  documentsMiscellTab.classList.add("settings-tab-hidden");
  documentsPrivateTab.classList.add("settings-tab-hidden");

  documentsStatementsButton.lastElementChild.classList.add(
    "active-documents-tab"
  );
  documentsSubscriptionsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsConfirmsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsKDocsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsMiscellButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsPrivateButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

function selectKDocsTab() {
  documentsKDocsTab.classList.remove("settings-tab-hidden");
  documentsStatementsTab.classList.add("settings-tab-hidden");
  documentsSubscriptionsTab.classList.add("settings-tab-hidden");
  documentsConfirmsTab.classList.add("settings-tab-hidden");
  documentsMiscellTab.classList.add("settings-tab-hidden");
  documentsPrivateTab.classList.add("settings-tab-hidden");

  documentsKDocsButton.lastElementChild.classList.add("active-documents-tab");

  documentsStatementsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsSubscriptionsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsConfirmsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsMiscellButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsPrivateButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

function selectMiscellTab() {
  documentsMiscellTab.classList.remove("settings-tab-hidden");
  documentsKDocsTab.classList.add("settings-tab-hidden");
  documentsStatementsTab.classList.add("settings-tab-hidden");
  documentsSubscriptionsTab.classList.add("settings-tab-hidden");
  documentsConfirmsTab.classList.add("settings-tab-hidden");
  documentsPrivateTab.classList.add("settings-tab-hidden");

  documentsMiscellButton.lastElementChild.classList.add("active-documents-tab");
  documentsKDocsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsStatementsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsSubscriptionsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsConfirmsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsPrivateButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

function selectPrivateTab() {
  documentsPrivateTab.classList.remove("settings-tab-hidden");
  documentsMiscellTab.classList.add("settings-tab-hidden");
  documentsKDocsTab.classList.add("settings-tab-hidden");
  documentsStatementsTab.classList.add("settings-tab-hidden");
  documentsSubscriptionsTab.classList.add("settings-tab-hidden");
  documentsConfirmsTab.classList.add("settings-tab-hidden");

  documentsPrivateButton.lastElementChild.classList.add("active-documents-tab");
  documentsMiscellButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsKDocsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsStatementsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsSubscriptionsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );
  documentsConfirmsButton.lastElementChild.classList.remove(
    "active-documents-tab"
  );

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

documentsSubscriptionsButton.addEventListener("click", () => {
  selectSubscriptionsTab();
});

documentsConfirmsButton.addEventListener("click", () => {
  selectConfirmsTab();
});

documentsStatementsButton.addEventListener("click", () => {
  selectStatementsTab();
});

documentsKDocsButton.addEventListener("click", () => {
  selectKDocsTab();
});
documentsMiscellButton.addEventListener("click", () => {
  selectMiscellTab();
});
documentsPrivateButton.addEventListener("click", () => {
  selectPrivateTab();
});

document.querySelectorAll(".dropdown").forEach((dropDownWrapper) => {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown-button");
  const dropDownList = dropDownWrapper.querySelector(".dropdown-list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown-list-item"
  );
  const dropDownInput = dropDownWrapper.querySelector(".dropdown-input-hidden");

  dropDownBtn.addEventListener("click", function () {
    dropDownList.classList.toggle("dropdown-list-visible");
    this.classList.add("dropdown-button-active");
  });

  dropDownListItems.forEach((listItem) => {
    listItem.addEventListener("click", function (event) {
      event.stopPropagation();
      dropDownBtn.innerHTML = this.innerHTML;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      if (dropDownInput.value === "confirms") {
        selectConfirmsTab();
      } else if (dropDownInput.value === "subscriptions") {
        selectSubscriptionsTab();
      } else if (dropDownInput.value === "statements") {
        selectStatementsTab();
      } else if (dropDownInput.value === "k-1") {
        selectKDocsTab();
      } else if (dropDownInput.value === "miscellaneous") {
        selectMiscellTab();
      } else if (dropDownInput.value === "private") {
        selectPrivateTab();
      }
      dropDownList.classList.remove("dropdown-list-visible");
    });
  });

  document.addEventListener("click", (event) => {
    if (event.target !== dropDownBtn) {
      dropDownBtn.classList.remove("dropdown-button-active");
      dropDownList.classList.remove("dropdown-list-visible");
    }
  });
});
