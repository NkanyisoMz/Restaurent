export default function loadHome() {
    const div = document.createElement("div");
    div.innerHTML = `
      <h1>Welcome to JavaScript Bistro</h1>
      <p>The finest code-infused meals in town!</p>
    `;
    return div;
  }
  