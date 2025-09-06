export default function loadMenu() {
  const content = document.getElementById('content');
  while (content.lastChild !== document.querySelector('header')) {
    content.removeChild(content.lastChild);
  }
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  menuDiv.innerHTML = `
    <h2>Menu</h2>
    <ul>
      <li><b>Spaghetti Code</b> – $12</li>
      <li><b>Closure Curry</b> – $10</li>
      <li><b>Async Tacos</b> – $8</li>
    </ul>
  `;
  content.appendChild(menuDiv);
}
