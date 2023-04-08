const refs = {
  signForm: document.querySelector(".js-form"),
  form: document.querySelector(".js-form-group"),
};

console.log(refs);

const onOpenForm = (e) => {
  e.preventDefault();
  refs.form.classList.add("form-show");
  console.log(e);
};

refs.signForm.addEventListener("click", onOpenForm);
