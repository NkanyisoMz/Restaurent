export default function loadContact() {
  const content = document.getElementById('content');
  while (content.lastChild !== document.querySelector('header')) {
    content.removeChild(content.lastChild);
  }
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');
  contactDiv.innerHTML = `
    <h2>Contact Us</h2>
    <p>Email: chef@jsbistro.com</p>
    <p>Phone: (076) 456-7890</p>
  `;
  content.appendChild(contactDiv);
}