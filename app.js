const $popup = document.querySelector(".popup");
const $formInfo = document.querySelector(".form-info");
const $inputForm = $formInfo.querySelector(".form-info__input");
const $formInfoHeaders = document.querySelector(".form-info__headers");

$popup.addEventListener("click", hidePopup);

$formInfo.addEventListener("submit", (event) => {
  checkEmailUser(event);

  displayErrorMessage();

  if ($popup.classList.contains("active")) {
    $inputForm.classList.remove("wrong");
    $inputForm.value = "";
    hideErrorMessage();
  }
});

function checkEmailUser(event) {
  event.preventDefault();
  const regex = /\w+@\w+\.com/g;

  regex.test($inputForm.value)
    ? $popup.classList.add("active")
    : $inputForm.classList.add("wrong");
}

function displayErrorMessage() {
  const $errorMessageElement = $formInfoHeaders.querySelector(
    ".form-info__title-wrong"
  );

  if (!$errorMessageElement) {
    $formInfoHeaders.insertAdjacentHTML(
      "beforeend",
      `<h5 class="form-info__title-wrong">Valid email required</h5>`
    );
  }
}

function hideErrorMessage() {
  const $errorMessageElement = $formInfoHeaders.querySelector(
    ".form-info__title-wrong"
  );

  if ($errorMessageElement) {
    $errorMessageElement.remove();
  }
}

function hidePopup(event) {
  const currentTarget = event.target;
  const $btnPopup = $popup.querySelector("button");

  if (currentTarget === $btnPopup) {
    $popup.classList.remove("active");
  }
}
