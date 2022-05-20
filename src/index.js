import { homePage } from "./home";
import { menuPage } from "./menu";
import { contactPage } from "./contact";

const content = document.querySelector("#content");

function navBar() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => {
    content.removeChild(content.children[1]);
    content.appendChild(homePage());
  });

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", () => {
    content.removeChild(content.children[1]);
    content.appendChild(menuPage());
  });

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", () => {
    content.removeChild(content.children[1]);
    content.appendChild(contactPage());
  });

  buttonContainer.appendChild(homeBtn);
  buttonContainer.appendChild(menuBtn);
  buttonContainer.appendChild(contactBtn);

  return buttonContainer;
}

content.appendChild(navBar());
content.appendChild(homePage());
