const refs = {
  btnOpenForm: document.querySelector(".js-btn-form"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-sign-form"),
  header: document.querySelector(".js-header"),
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
  console.log(e);
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
    alert("");
    return;
  }

  const dataUser = {
    email,
    password,
  };

  console.log(JSON.stringify(dataUser));

  form.reset();
}

form.addEventListener("submit", onSubmitForm);

// function onScrollHeader(e) {}

const onScroll = () => {
  const pageScroll = window.pageYOffset;
  console.log(pageScroll);

  return pageScroll > 50
    ? refs.header.classList.add("header-active")
    : refs.header.classList.remove("header-active");
};

setTimeout(() => {
  onScroll();
}, 2000);

document.addEventListener("scroll", onScroll);
