function contactPage() {
  const main = document.getElementById("main");
  main.textContent = "";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactPage = document.createElement("h1");
  contactPage.textContent = "Contact Page";

  contactContainer.appendChild(contactPage);

  main.appendChild(contactContainer);
}

export default contactPage;
