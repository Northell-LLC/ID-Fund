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

const documentsSubsButtonMobile = document.querySelector("#documents-subs-button-mobile");
const documentsConfirmsButtonMobile = document.querySelector("#documents-confirms-button-mobile");
const documentsStatementsButtonMobile = document.querySelector("#documents-statements-button-mobile");
const documentsKdocButtonMobile = document.querySelector("#documents-kdoc-button-mobile");
const documentsMiscellButtonMobile = document.querySelector("#documents-miscell-button-mobile");
const documentsPrivateButtonMobile = document.querySelector("#documents-private-button-mobile");

const documentsSubscriptionsTab = document.querySelector(".subscriptions-main");
const documentsConfirmsTab = document.querySelector(".confirms-main");
const documentsStatementsTab = document.querySelector(".statements-main");
const documentsKDocsTab = document.querySelector(".k-docs-main");
const documentsMiscellTab = document.querySelector(".miscell-main");
const documentsPrivateTab = document.querySelector(".private-main");

function selectSubscriptionsTab() {
  documentsSubscriptionsTab.classList.remove("settings-tab-hidden");
  documentsConfirmsTab.classList.add("settings-tab-hidden");
  documentsStatementsTab.classList.add("settings-tab-hidden");
  documentsKDocsTab.classList.add("settings-tab-hidden");
  documentsMiscellTab.classList.add("settings-tab-hidden");
  documentsPrivateTab.classList.add("settings-tab-hidden");

  documentsSubscriptionsButton.lastElementChild.classList.add("active-documents-tab");
  documentsConfirmsButton.lastElementChild.classList.remove("active-documents-tab");
  documentsStatementsButton.lastElementChild.classList.remove("active-documents-tab");
  documentsKDocsButton.lastElementChild.classList.remove("active-documents-tab");
  documentsMiscellButton.lastElementChild.classList.remove("active-documents-tab");
  documentsPrivateButton.lastElementChild.classList.remove("active-documents-tab");

  documentsSubsButtonMobile.lastElementChild.classList.add("active-documents-tab");
  documentsConfirmsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsStatementsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsKdocButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsMiscellButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsPrivateButtonMobile.lastElementChild.classList.remove("active-documents-tab");

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subs-icon.svg";
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

  documentsSubsButtonMobile.firstElementChild.src =
    "../../assets/images/subs-icon.svg";
  documentsConfirmsButtonMobile.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButtonMobile.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKdocButtonMobile.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButtonMobile.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButtonMobile.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";
}

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
  documentsSubsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsConfirmsButtonMobile.lastElementChild.classList.add("active-documents-tab");
  documentsStatementsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsKdocButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsMiscellButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsPrivateButtonMobile.lastElementChild.classList.remove("active-documents-tab");

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";

  documentsSubsButtonMobile.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButtonMobile.firstElementChild.src =
    "../../assets/images/confirms-icon.svg";
  documentsStatementsButtonMobile.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKdocButtonMobile.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButtonMobile.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButtonMobile.firstElementChild.src =
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

  documentsSubsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsConfirmsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsStatementsButtonMobile.lastElementChild.classList.add("active-documents-tab");
  documentsKdocButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsMiscellButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsPrivateButtonMobile.lastElementChild.classList.remove("active-documents-tab");

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";

  documentsSubsButtonMobile.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButtonMobile.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButtonMobile.firstElementChild.src =
    "../../assets/images/statements-icon.svg";
  documentsKdocButtonMobile.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButtonMobile.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButtonMobile.firstElementChild.src =
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

  documentsSubsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsConfirmsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsStatementsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsKdocButtonMobile.lastElementChild.classList.add("active-documents-tab");
  documentsMiscellButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsPrivateButtonMobile.lastElementChild.classList.remove("active-documents-tab");

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";

  documentsSubsButtonMobile.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButtonMobile.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButtonMobile.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKdocButtonMobile.firstElementChild.src =
    "../../assets/images/k-docs-icon.svg";
  documentsMiscellButtonMobile.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButtonMobile.firstElementChild.src =
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

  documentsSubsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsConfirmsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsStatementsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsKdocButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsMiscellButtonMobile.lastElementChild.classList.add("active-documents-tab");
  documentsPrivateButtonMobile.lastElementChild.classList.remove("active-documents-tab");

  documentsSubscriptionsButton.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButton.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButton.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKDocsButton.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButton.firstElementChild.src =
    "../../assets/images/miscell-icon.svg";
  documentsPrivateButton.firstElementChild.src =
    "../../assets/images/private-gray-icon.svg";

  documentsSubsButtonMobile.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButtonMobile.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButtonMobile.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKdocButtonMobile.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButtonMobile.firstElementChild.src =
    "../../assets/images/miscell-icon.svg";
  documentsPrivateButtonMobile.firstElementChild.src =
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
  documentsSubsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsConfirmsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsStatementsButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsKdocButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsMiscellButtonMobile.lastElementChild.classList.remove("active-documents-tab");
  documentsPrivateButtonMobile.lastElementChild.classList.add("active-documents-tab");

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
    "../../assets/images/private-icon.svg";

  documentsSubsButtonMobile.firstElementChild.src =
    "../../assets/images/subcr-grey.svg";
  documentsConfirmsButtonMobile.firstElementChild.src =
    "../../assets/images/confirms-gray-icon.svg";
  documentsStatementsButtonMobile.firstElementChild.src =
    "../../assets/images/statements-gray-icon.svg";
  documentsKdocButtonMobile.firstElementChild.src =
    "../../assets/images/k-docs-gray-icon.svg";
  documentsMiscellButtonMobile.firstElementChild.src =
    "../../assets/images/miscell-gray-icon.svg";
  documentsPrivateButtonMobile.firstElementChild.src =
    "../../assets/images/private-icon.svg";
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
        dropDownBtn.lastElementChild.lastElementChild.classList.add("active-documents-tab");
        dropDownBtn.firstElementChild.firstElementChild.src = "../../assets/images/confirms-icon.svg";
      } else if (dropDownInput.value === "subscriptions") {
        selectSubscriptionsTab();
        dropDownBtn.lastElementChild.lastElementChild.classList.add("active-documents-tab");
        dropDownBtn.firstElementChild.firstElementChild.src = "../../assets/images/subs-icon.svg";
      } else if (dropDownInput.value === "statements") {
        selectStatementsTab();
        dropDownBtn.lastElementChild.lastElementChild.classList.add("active-documents-tab");
        dropDownBtn.firstElementChild.firstElementChild.src = "../../assets/images/statements-icon.svg";
      } else if (dropDownInput.value === "k-1") {
        selectKDocsTab();
        dropDownBtn.lastElementChild.lastElementChild.classList.add("active-documents-tab");
        dropDownBtn.firstElementChild.firstElementChild.src = "../../assets/images/k-docs-icon.svg";
      } else if (dropDownInput.value === "miscellaneous") {
        selectMiscellTab();
        dropDownBtn.lastElementChild.lastElementChild.classList.add("active-documents-tab");
        dropDownBtn.firstElementChild.firstElementChild.src = "../../assets/images/miscell-icon.svg";
      } else if (dropDownInput.value === "private") {
        selectPrivateTab();
        dropDownBtn.lastElementChild.lastElementChild.classList.add("active-documents-tab");
        dropDownBtn.firstElementChild.firstElementChild.src = "../../assets/images/private-icon.svg";
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
