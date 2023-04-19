import Notiflix from "notiflix";

export default function notification() {
  return Notiflix.Notify.warning("Fields must be filled", {
    timeout: 1500,
    position: "center-top",
    clickToClose: true,
  });
}
