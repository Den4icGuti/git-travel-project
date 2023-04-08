const refs = {
  signForm: document.querySelector(".js-form"),
  form: document.querySelector(".js-form-group"),
};

console.log(refs);

const onOpenForm = (e) => {
  e.preventDefault();
  refs.form.classList.add("form-show");
};

const onCloseForm = (e) => {
  if (e.currentTarget === e.currentTarget) {
    refs.signForm.classList.remove("form-show");
  }
};

document.body("click", onCloseForm);

refs.signForm.addEventListener("click", onOpenForm);
