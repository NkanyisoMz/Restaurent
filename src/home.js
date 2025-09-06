export default function loadHome() {
    const content = document.getElementById('content');
  
    // Clear old page content (but keep header)
    content.innerHTML = '';
    content.appendChild(document.querySelector('header'));
  
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");
    homeDiv.textContent = "Welcome to Our Restaurant!";
    content.appendChild(homeDiv);
  }
  