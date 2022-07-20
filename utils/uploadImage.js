const changeImageButton = document.querySelector('.change-img-button');
const changeImageButtonMobile = document.querySelector(
  ".change-img-button-mobile"
);
const deleteImageButton = document.querySelector(".delete-img-button");
const deleteImageButtonMobile = document.querySelector(
  ".delete-img-button-mobile"
);

const imageWrapper = document.querySelector(".onboarding-person-image");
const accountImg = document.querySelector(".account-img");
const noImageBlock = document.querySelector(".no-image-block");

window.onload = () => {
  if (localStorage.getItem("imgUrl")) {
    accountImg.src = localStorage.getItem("imgUrl");
    noImageBlock.classList.add("img-element-hidden");
    accountImg.classList.remove("img-element-hidden");
    deleteImageButton.classList.remove("img-element-hidden");
    deleteImageButtonMobile.classList.remove("img-element-hidden");
  }
};

function changeImage(input) {
  const file = input.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    accountImg.src = reader.result;
    localStorage.setItem("imgUrl", reader.result);
    noImageBlock.classList.add("img-element-hidden");
    accountImg.classList.remove("img-element-hidden");
    deleteImageButton.classList.remove("img-element-hidden");
    deleteImageButtonMobile.classList.remove("img-element-hidden");
  };
}

deleteImageButton.addEventListener("click", () => {
  noImageBlock.classList.remove("img-element-hidden");
  accountImg.src = "";
  accountImg.classList.add("img-element-hidden");
  deleteImageButton.classList.add("img-element-hidden");
  localStorage.removeItem("imgUrl");
});
deleteImageButtonMobile.addEventListener("click", () => {
  noImageBlock.classList.remove("img-element-hidden");
  accountImg.src = "";
  accountImg.classList.add("img-element-hidden");
  deleteImageButtonMobile.classList.add("img-element-hidden");
  localStorage.removeItem("imgUrl");
});