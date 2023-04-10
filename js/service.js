import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

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

// export default toast;
