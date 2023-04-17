// import { toast } from "./service";
const refs = {
  btnOpenForm: document.querySelector(".js-btn-form"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-sign-form"),
};

console.log(refs);

refs.btnOpenForm.addEventListener("click", onOpenForm);

refs.formGroup.addEventListener("click", onBackdropClick);

function onOpenForm() {
  refs.formGroup.classList.add("show-form");
  window.addEventListener("keydown", onKeyPressEsc);
}

function onCloseForm() {
  refs.formGroup.classList.remove("show-form");
  window.removeEventListener("keydown", onKeyPressEsc);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseForm();
  }
}

function onKeyPressEsc(e) {
  if (e.code === "Escape") {
    onCloseForm();
  }
}

const db = [];

function onSubmitForm(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  if (email === "" || password.length < 4) {
    alert("All fields must be filled");
    return;
  }
  const dataUser = {
    email,
    password,
  };

  const newUser = [dataUser, ...db];

  refs.form.reset();
}

refs.form.addEventListener("submit", onSubmitForm);
