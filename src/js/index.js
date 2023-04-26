const refs = {
  btnOpenForm: document.querySelector(".js-btn-form"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-sign-form"),
  burgerOpen: document.querySelector(".js-burger"),
  header: document.querySelector(".js-header"),
  menu: document.querySelector(".js-nav-menu"),
  menuClose: document.querySelector(".js-nav-menu-close"),
};

const { btnOpenForm, formGroup, form } = refs;

// console.log(refs);

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

function onSubmitForm(e) {
  e.preventDefault();
  const email = e.currentTarget.email.value;
  const password = e.currentTarget.password.value;

  if (email === "" || password.length < 4) {
    alert("All field fool");
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

const onScroll = () => {
  const pageScroll = window.pageYOffset;

  return pageScroll > 50
    ? refs.header.classList.add("header-active")
    : refs.header.classList.remove("header-active");
};

document.addEventListener("scroll", onScroll);

const onOpenMenu = () => {
  refs.menu.classList.add("header__nav-active");
};

refs.burgerOpen.addEventListener("click", onOpenMenu);

const onCloseMenu = () => {
  refs.menu.classList.remove("header__nav-active");
};

refs.menuClose.addEventListener("click", onCloseMenu);
