function homePage() {
  const main = document.getElementById("main");
  main.textContent = "";

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const tagline = document.createElement("h2");
  tagline.textContent = "World Famous Tacos!";

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.textContent = "Order Online";

  homeContainer.appendChild(tagline);
  homeContainer.appendChild(orderBtn);

  main.appendChild(homeContainer);
}

export default homePage;
