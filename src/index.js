import './style.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// document.addEventListener("DOMContentLoaded", () => {
//     loadHome(); // run when page loads
//   });
// Create header + nav dynamically
function createHeader() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const tabs = ['Home', 'Menu', 'Contact'];

  tabs.forEach(tabName => {
    const li = document.createElement('li');
    li.textContent = tabName;
    li.addEventListener('click', () => {
      if (tabName === 'Home') loadHome();
      if (tabName === 'Menu') loadMenu();
      if (tabName === 'Contact') loadContact();
    });
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  header.appendChild(nav);
  return header;
}

function initializeWebsite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  loadHome(); // default page
}

initializeWebsite();
