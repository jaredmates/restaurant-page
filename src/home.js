function homePage() {
  const content = document.querySelector("#content");

  const restName = document.createElement("h1");
  restName.textContent = "Jared's Tacos";

  const tagline = document.createElement("h3");
  tagline.textContent = "Where Men's Dreams Come True!";

  const description = document.createElement("p");
  description.textContent =
    "Come eat my tacos. Super cheap and you're guaranteed to leave with a smile!";

  const tacoImg = document.createElement("img");
  tacoImg.src = "images/tacos.jpg";

  content.appendChild(restName);
  content.appendChild(tagline);
  content.appendChild(description);
  content.appendChild(tacoImg);
}

export { homePage };
