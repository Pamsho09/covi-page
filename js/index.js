var dom = {
  nav: document.getElementById("nav"),
};

var menuState = false;
function active() {
  if (menuState) {
    dom.nav.style.display = "none";
    menuState = false;
  } else {
    dom.nav.style.display = "grid";
    menuState = true;
  }
}
