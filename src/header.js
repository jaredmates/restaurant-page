function header() {
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const restName = document.createElement("h1");
  restName.classList.add("restaurant-name");
  restName.textContent = "Très Tacos";

  const dropDownMenu = document.createElement("input");
  dropDownMenu.setAttribute("id", "menu-btn");
  dropDownMenu.setAttribute("class", "menu-btn");
  dropDownMenu.setAttribute("type", "checkbox");

  const dropDownMenuLabel = document.createElement("label");
  dropDownMenuLabel.setAttribute("for", "menu-btn");
  dropDownMenuLabel.setAttribute("class", "menu-icon");

  const dropDownMenuSpan = document.createElement("span");
  dropDownMenuSpan.setAttribute("class", "navicon");

  dropDownMenuLabel.appendChild(dropDownMenuSpan);
  headerContainer.appendChild(restName);
  headerContainer.appendChild(dropDownMenu);
  headerContainer.appendChild(dropDownMenuLabel);
  headerContainer.appendChild(nav());

  return headerContainer;
}

function nav() {
  const buttonContainer = document.createElement("ul");
  buttonContainer.classList.add("button-container");

  const homeBtn = document.createElement("li");
  homeBtn.classList.add("home-btn", "btn-nav");
  homeBtn.textContent = "Home";

  const menuBtn = document.createElement("li");
  menuBtn.classList.add("food-menu-btn", "btn-nav");
  menuBtn.textContent = "Menu";

  const contactBtn = document.createElement("li");
  contactBtn.classList.add("contact-btn", "btn-nav");
  contactBtn.textContent = "Contact";

  buttonContainer.appendChild(homeBtn);
  buttonContainer.appendChild(menuBtn);
  buttonContainer.appendChild(contactBtn);

  return buttonContainer;
}

export default header;
