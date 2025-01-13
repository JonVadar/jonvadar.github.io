// Selection DOM elements
const navigation = document.querySelector("#navigation");
const navOpener = document.querySelector("#nav-opener");
const navCloser = document.querySelector("#nav-closer");
const navItems = document.querySelector("#nav-items");
const mobileNavLinks = document.querySelectorAll("#mobile-nav-links a");
const navBackdrop = document.querySelector("#nav-backdrop");

// Open the mobile nav items
navOpener.addEventListener("click", () => {
  navItems.classList.remove("invisible", "opacity-0");
  navBackdrop.classList.remove("invisible", "opacity-0");
});

// Close the mobile nav items
navCloser.addEventListener("click", () => {
  closeNav();
});

// Close the mobile nav items when click outside
document.addEventListener("click", (e) => {
  if (!navItems.contains(e.target) && e.target !== navOpener) {
    closeNav();
  }
});

// Close the mobile nav items when click on each link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

// Close the nav items container
function closeNav() {
  navItems.classList.add("invisible", "opacity-0");
  navBackdrop.classList.add("invisible", "opacity-0");
}
