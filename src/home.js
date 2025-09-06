export default function loadHome() {
    const content = document.getElementById('content');
  
    // Clear old page content (but keep header)
    content.innerHTML = '';
    content.appendChild(document.querySelector('header'));
  
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    homeDiv.textContent = "Welcome to Our Restaurant!";
    content.appendChild(homeDiv);
  }
  export default function loadHome() {
    const div = document.createElement("div");
    div.innerHTML = `
      <h1>Welcome to JavaScript Bistro</h1>
      <p>The finest code-infused meals in town!</p>
    `;
    return div;
  }
  