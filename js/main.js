const formMail = document.getElementById("formMail");
const validator = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
formMail.addEventListener("submit", (e) => e.preventDefault());
formMail.addEventListener("click", (e) => {
  if (e.target.className === "formEmail__btn") {
    const contentInput =
      e.target.previousElementSibling.firstElementChild;
    const MsgeError =
      e.target.previousElementSibling.lastElementChild;
    if (contentInput.value === "") {
      removeStyleMail(contentInput, MsgeError);
    } else {
      formValidation(contentInput.value, contentInput, MsgeError);
    }
  }
  e.stopPropagation();
});
formMail.addEventListener("keyup", (e) => {
  if (
    e.target.className === "formEmail__input" ||
    e.target.className === "formEmail__input formEmail__input--show"
  ) {
    if (e.target.value === "") {
      removeStyleMail(e.target, e.target.nextElementSibling);
    }
  }
  e.stopPropagation();
});
const formValidation = (Email, ContentMail, Msge) => {
  if (!validator.test(Email)) {
    ContentMail.classList.add("formEmail__input--show");
    Msge.classList.add("formEmail__inputMsgError--show");
  }
};
const removeStyleMail = (ContentMail, Msge) => {
  ContentMail.classList.remove("formEmail__input--show");
  Msge.classList.remove("formEmail__inputMsgError--show");
};
