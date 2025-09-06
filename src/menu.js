export default function loadMenu() {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>Menu</h2>
      <ul>
        <li><b>Spaghetti Code</b> – $12</li>
        <li><b>Closure Curry</b> – $10</li>
        <li><b>Async Tacos</b> – $8</li>
      </ul>
    `;
    return div;
  }
  