function header() {
  const content = document.querySelector("#content");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const restName = document.createElement("h1");
  restName.textContent = "Tres Tacos";

  headerContainer.appendChild(restName);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => {
    content.removeChild(content.children[1]);
    content.appendChild(homePage());
  });

  buttonContainer.appendChild(homeBtn);

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", () => {
    content.removeChild(content.children[1]);
    content.appendChild(menuPage());
  });

  buttonContainer.appendChild(menuBtn);

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contact-btn");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", () => {
    content.removeChild(content.children[1]);
    content.appendChild(contactPage());
  });

  buttonContainer.appendChild(contactBtn);

  headerContainer.appendChild(buttonContainer);
  content.appendChild(headerContainer);

  //   return homeContainer;
}

export { header };
