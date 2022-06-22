function homePage() {
  // const content = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const tagline = document.createElement("h3");
  tagline.textContent = "World Famous Tacos!";

  homeContainer.appendChild(tagline);

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.textContent = "Order Online";

  homeContainer.appendChild(orderBtn);

  // const tacoImg = document.createElement("img");
  // tacoImg.classList.add("home-background");
  // tacoImg.src = "images/tacos.jpg";

  // homeContainer.appendChild(tacoImg);

  // content.appendChild(homeContainer);

  return homeContainer;
}

export { homePage };
