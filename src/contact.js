function contactPage() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactPage = document.createElement("h1");
  contactPage.textContent = "Contact Page";

  contactContainer.appendChild(contactPage);

  return contactContainer;
}

export { contactPage };
