const refs = {
  btnOpenForm: document.querySelector(".js-btn-form"),
  formGroup: document.querySelector(".js-form-group"),
  form: document.querySelector(".js-sign-form"),
  burgerOpen: document.querySelector(".js-burger"),
  header: document.querySelector(".js-header"),
  menu: document.querySelector(".js-nav-menu"),
  menuClose: document.querySelector(".js-nav-menu-close"),
  btn: document.querySelector(".js-btn"),
  headerLink: document.querySelectorAll(".js-header-link"),
};

const { btnOpenForm, formGroup, form, btn, headerLink } = refs;

console.log(headerLink);

function onCloseBurgerMenu() {
  console.log("close");
}

// console.log(refs);

btnOpenForm.addEventListener("click", onOpenForm);

btn.addEventListener("click", onOpenForm);

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

  const data = JSON.stringify(dataUser);

  localStorage.setItem("dataUser", data);

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

function widthDocument() {
  if (window.innerWidth <= 768) {
    for (let i = 0; i < headerLink.length; i += 1) {
      const eventHandling = headerLink[i];
      eventHandling.addEventListener("click", onCloseMenu);
    }
  }
}

widthDocument();
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
