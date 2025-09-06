export default function loadContact() {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>Contact Us</h2>
      <p>Email: chef@jsbistro.com</p>
      <p>Phone: (123) 456-7890</p>
    `;
    return div;
  }
  