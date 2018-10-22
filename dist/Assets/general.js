let isNavShown = false;
function toggleNav() {
  let nav = document.getElementById("fullNav");
  let hamburger = document.querySelector(".hamburger");
  if (isNavShown) {
    nav.classList.remove("fullNavShown");
    hamburger.classList.remove("is-active");
    isNavShown = false;
  }
  else {
    nav.classList.add("fullNavShown");
    hamburger.classList.add("is-active");
    isNavShown = true;
  }
}