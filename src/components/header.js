import logoImg from '../data/images/amara_logo.png';

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <img src="${logoImg}" alt="AMARA Beauty Parlour" class="logo-img">
        </div>
        
        <button class="menu-toggle" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  `;

  // Add mobile menu toggle functionality
  const menuToggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.nav');
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = header.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  return header;
}
