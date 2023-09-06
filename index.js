function main() {
  const buttonEl = document.querySelector(".menu__button-burger");
  const buttonCerrarVentEl = document.querySelector(".wind__close");
  const ventanaEl = document.querySelector(".wind");

  buttonEl.addEventListener("click", () => {
    ventanaEl.style.display = "inherit";
  });
  buttonCerrarVentEl.addEventListener("click", () => {
    ventanaEl.style.display = "";
  });
}
main();
