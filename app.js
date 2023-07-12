const $formInfo = document.querySelector(".form-info");
const $inputFrom = $formInfo.querySelector(".form-info__input");
const $buttonForm = $formInfo.querySelector(".form-info__button");
const $popup = document.querySelector(".popup");
const regex = /\w+@\w+\.com/g;

$formInfo.addEventListener("submit", () => {
  if (regex.test($inputFrom.value)) {
    $popup.classList.add("active");
  } else {
  }
});

$buttonForm.addEventListener("click", () => {
  if (!regex.test($inputFrom.value)) {
    $inputFrom.classList.add("wrong");
  }
});
