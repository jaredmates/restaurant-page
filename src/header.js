function header() {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const restName = document.createElement("h1");
  restName.classList.add("restaurant-name");
  restName.textContent = "Tres Tacos";

  headerContainer.appendChild(restName);
  headerContainer.appendChild(nav());

  return headerContainer;
}

function nav() {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn", "btn-nav");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("button");
  menuBtn.classList.add("menu-btn", "btn-nav");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("button");
  contactBtn.classList.add("contact-btn", "btn-nav");
  contactBtn.textContent = "Contact";

  buttonContainer.appendChild(homeBtn);
  buttonContainer.appendChild(menuBtn);
  buttonContainer.appendChild(contactBtn);

  return buttonContainer;
}

export default header;
