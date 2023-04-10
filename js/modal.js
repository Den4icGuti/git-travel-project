import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const refs = {
  btnOpenForm: document.querySelector(".js-btn-form"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-sign-form"),
};

const toast = Toastify({
  text: "All fields must be hidden",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "#b1693d",
  },
});

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

function onSubmitForm(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  if (email === "" || password.length < 4) {
    toast.showToast();
    return;
  }
  const dataUser = {
    email,
    password,
  };

  const db = [];

  const res = [dataUser, ...db];

  console.log(res);
  refs.form.reset();
}

refs.form.addEventListener("submit", onSubmitForm);
