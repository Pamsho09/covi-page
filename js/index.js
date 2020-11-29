var dom = {
  nav: document.getElementById("nav"),
  carreteUno: document.getElementById("carreteUno"),
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

var x = 1;
function cambioCarrteUno() {
  setInterval(() => {
    x < 7 ? x++ : (x = 1);
    dom.carreteUno.src = `../img/carrete1/${x}.jpg`;
  }, 3000);
}
cambioCarrteUno();
