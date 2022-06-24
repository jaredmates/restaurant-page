function contactPage() {
  const main = document.getElementById("main");
  main.textContent = "";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactPage = document.createElement("h2");
  contactPage.classList.add("contact-page-text");
  contactPage.textContent = "Contact Page";

  contactContainer.appendChild(contactPage);

  const contactInfoContainer = document.createElement("div");
  contactInfoContainer.classList.add("contact-info-container");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  // -----------------

  const addressContainer = document.createElement("div");
  addressContainer.classList.add("info-container");

  const addressText = document.createElement("p");
  addressText.classList.add("address-text");
  addressText.textContent = "1875 S Centre City, Escondido, CA 92025";

  const addressIcon = document.createElement("i");
  addressIcon.classList.add("address-icon", "bx", "bxs-location-plus");

  addressContainer.appendChild(addressIcon);
  addressContainer.appendChild(addressText);
  textContainer.appendChild(addressContainer);

  // ---------------------------

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("info-container");

  const hoursText = document.createElement("p");
  hoursText.classList.add("hours-text");
  hoursText.textContent = "Mon-Sun: 8am-8pm";

  const hoursIcon = document.createElement("i");
  hoursIcon.classList.add("hours-icon", "bx", "bx-time");

  hoursContainer.appendChild(hoursIcon);
  hoursContainer.appendChild(hoursText);
  textContainer.appendChild(hoursContainer);

  // ---------------------------

  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("info-container");

  const phoneText = document.createElement("p");
  phoneText.classList.add("phone-text");
  phoneText.textContent = "(333) 444-5555";

  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("phone-icon", "bx", "bxs-phone");

  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phoneText);
  textContainer.appendChild(phoneContainer);

  contactInfoContainer.appendChild(textContainer);

  // ---------------------------

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-responsive");

  const map = document.createElement("iframe");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208.89557720467633!2d-117.07500470816025!3d33.100427250215574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf35634209a6b%3A0x48a13c5356c462db!2sChina%20bros!5e0!3m2!1sen!2sus!4v1656026988342!5m2!1sen!2sus"
  );
  map.setAttribute("width", "600");
  map.setAttribute("height", "450");
  map.setAttribute("style", "border:0");
  map.setAttribute("allowfullscreen", "");
  map.setAttribute("loading", "lazy");
  map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  map.setAttribute("aria-hidden", "false");
  map.setAttribute("tabindex", "0");

  mapContainer.appendChild(map);
  contactInfoContainer.appendChild(mapContainer);

  // ---------------------------

  contactContainer.appendChild(contactInfoContainer);
  main.appendChild(contactContainer);
}

export default contactPage;
