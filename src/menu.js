function menuPage() {
  const main = document.getElementById("main");
  main.textContent = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuPage = document.createElement("h2");
  menuPage.classList.add("menu-page-text");
  menuPage.textContent = "Menu Page";

  menuContainer.appendChild(menuPage);

  const menuItemsContainer = document.createElement("div");
  menuItemsContainer.classList.add("menu-items-container");

  // -----------------

  const cornTacosContainer = document.createElement("div");
  cornTacosContainer.classList.add("corn-tacos-container", "items-container");

  const cornTacosImg = document.createElement("img");
  cornTacosImg.classList.add("corn-tacos-img", "menu-img");
  cornTacosImg.src = "images/cornTacos.jpeg";

  const cornTacosText = document.createElement("h3");
  cornTacosText.textContent = "Elote (Mexican Street Corn) Tacos";

  cornTacosContainer.appendChild(cornTacosImg);
  cornTacosContainer.appendChild(cornTacosText);
  menuItemsContainer.appendChild(cornTacosContainer);

  // ---------------------------

  const alPastorTacosContainer = document.createElement("div");
  alPastorTacosContainer.classList.add(
    "alpastor-tacos-container",
    "items-container"
  );

  const alPastorTacosImg = document.createElement("img");
  alPastorTacosImg.classList.add("alpastor-tacos-img", "menu-img");
  alPastorTacosImg.src = "images/alpastor.jpg";

  const alPastorTacosText = document.createElement("h3");
  alPastorTacosText.textContent = "Tacos Al Pastor";

  alPastorTacosContainer.appendChild(alPastorTacosImg);
  alPastorTacosContainer.appendChild(alPastorTacosText);
  menuItemsContainer.appendChild(alPastorTacosContainer);

  // ---------------------

  const limeTacosContainer = document.createElement("div");
  limeTacosContainer.classList.add("lime-tacos-container", "items-container");

  const limeTacosImg = document.createElement("img");
  limeTacosImg.classList.add("lime-tacos-img", "menu-img");
  limeTacosImg.src = "images/chickenlimetacos.jpeg";

  const limeTacosText = document.createElement("h3");
  limeTacosText.textContent = "Tequila-Lime Chicken Tacos";

  limeTacosContainer.appendChild(limeTacosImg);
  limeTacosContainer.appendChild(limeTacosText);
  menuItemsContainer.appendChild(limeTacosContainer);

  // --------------------

  const porkTacosContainer = document.createElement("div");
  porkTacosContainer.classList.add("pork-tacos-container", "items-container");

  const porkTacosImg = document.createElement("img");
  porkTacosImg.classList.add("pork-tacos-img", "menu-img");
  porkTacosImg.src = "images/pulledporktacos.jpg";

  const porkTacosText = document.createElement("h3");
  porkTacosText.textContent = "Pulled Pork Tacos with Pineapple Slaw";

  porkTacosContainer.appendChild(porkTacosImg);
  porkTacosContainer.appendChild(porkTacosText);
  menuItemsContainer.appendChild(porkTacosContainer);

  // ---------------------

  const buffaloTacosContainer = document.createElement("div");
  buffaloTacosContainer.classList.add(
    "buffalo-tacos-container",
    "items-container"
  );

  const buffaloTacosImg = document.createElement("img");
  buffaloTacosImg.classList.add("buffalo-tacos-img", "menu-img");
  buffaloTacosImg.src = "images/buffalocauliflowertacos.jpg";

  const buffaloTacosText = document.createElement("h3");
  buffaloTacosText.textContent = "Buffalo Cauliflower Tacos";

  buffaloTacosContainer.appendChild(buffaloTacosImg);
  buffaloTacosContainer.appendChild(buffaloTacosText);
  menuItemsContainer.appendChild(buffaloTacosContainer);

  menuContainer.appendChild(menuItemsContainer);
  main.appendChild(menuContainer);
}

export default menuPage;
