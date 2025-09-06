import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function createNav() {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.addEventListener("click", () => loadTab(loadHome));

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.addEventListener("click", () => loadTab(loadMenu));

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.addEventListener("click", () => loadTab(loadContact));

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function loadTab(tabFunction) {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.appendChild(tabFunction());
}

function init() {
  document.body.prepend(createNav());
  loadTab(loadHome); // default tab
}

init();
