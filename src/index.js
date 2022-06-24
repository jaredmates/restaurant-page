import homePage from "./home";
import menuPage from "./menu";
import contactPage from "./contact";
import header from "./header";

function navEvents() {
  const homeBtn = document.querySelector(".home-btn");
  const menuBtn = document.querySelector(".food-menu-btn");
  const contactBtn = document.querySelector(".contact-btn");

  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activeButton(homeBtn);
    homePage();
  });

  menuBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activeButton(menuBtn);
    menuPage();
  });

  contactBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    activeButton(contactBtn);
    contactPage();
  });
}

function activeButton(button) {
  const buttons = document.querySelectorAll(".btn-nav");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function main() {
  const mainContent = document.createElement("main");
  mainContent.classList.add("main");
  mainContent.setAttribute("id", "main");
  return mainContent;
}

function initialize() {
  const content = document.getElementById("content");

  content.appendChild(header());
  content.appendChild(main());

  activeButton(document.querySelector(".btn-nav"));
  homePage();
  navEvents();
}

export default initialize;
