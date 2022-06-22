function homePage() {
  const main = document.getElementById("main");
  main.textContent = "";

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const tagline = document.createElement("h3");
  tagline.textContent = "World Famous Tacos!";

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.textContent = "Order Online";

  const tacoImg = document.createElement("img");
  tacoImg.classList.add("home-background");
  tacoImg.src = "images/tacos.jpg";

  homeContainer.appendChild(tagline);
  homeContainer.appendChild(orderBtn);
  homeContainer.appendChild(tacoImg);

  main.appendChild(homeContainer);
}

export default homePage;
