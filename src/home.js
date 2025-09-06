export default function loadHome() {
  const content = document.getElementById('content');
  // Remove all children except header
  while (content.lastChild !== document.querySelector('header')) {
    content.removeChild(content.lastChild);
  }
  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');
  homeDiv.textContent = 'Welcome to Our Restaurant!';
  content.appendChild(homeDiv);
}
  