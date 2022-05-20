function menuPage() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuPage = document.createElement("h1");
  menuPage.textContent = "Menu Page";

  menuContainer.appendChild(menuPage);

  return menuContainer;
}

export { menuPage };
