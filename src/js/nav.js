const mainMenu = document.querySelector(".link-box");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = mainMenu.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    mainMenu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    mainMenu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
