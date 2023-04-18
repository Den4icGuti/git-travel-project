// import { toast } from "./service";
import Aos from "aos";
import "../node_modules/aos/dist/aos.css";

aos();

const refs = {
  btnOpenForm: document.querySelector(".js-btn-form"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-sign-form"),
};

const { btnOpenForm, formGroup, form } = refs;

console.log(refs);

btnOpenForm.addEventListener("click", onOpenForm);

formGroup.addEventListener("click", onBackdropClick);

function onOpenForm() {
  formGroup.classList.add("show-form");
  window.addEventListener("keydown", onKeyPressEsc);
}

function onCloseForm() {
  formGroup.classList.remove("show-form");
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
  console.log(newUser);
  form.reset();
}

form.addEventListener("submit", onSubmitForm);
