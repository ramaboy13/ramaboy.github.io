const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".nav-list");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};

function MessageToWhatsapp() {
  const urlToWhatsapp = `https://wa.me/+6285775242278?text=Halo nama saya, ${name.value}, email saya ${email.value}, ${pesan.value}`;

  window.open(urlToWhatsapp, "_blank");
}
