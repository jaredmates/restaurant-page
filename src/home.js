function homePage() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const restName = document.createElement("h1");
  restName.textContent = "Jared's Tacos";

  const tagline = document.createElement("h3");
  tagline.textContent = "Where Men's Dreams Come True!";

  const description = document.createElement("p");
  description.textContent =
    "Come eat my tacos. Super cheap and you're guaranteed to leave with a smile!";

  const tacoImg = document.createElement("img");
  tacoImg.src = "images/tacos.jpg";

  homeContainer.appendChild(restName);
  homeContainer.appendChild(tagline);
  homeContainer.appendChild(description);
  homeContainer.appendChild(tacoImg);

  return homeContainer;
}

export { homePage };
