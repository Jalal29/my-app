export function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>AMARA Beauty Parlour</h3>
          <p>Your destination for beauty and elegance</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Contact</h4>
          <p>Phone: +91 8100035223</p>
          <p>Email: info@amarabeauty.com</p>
          <p>Address: </p>
          <p><a href="https://share.google/7OcGFZlDU73p8bJZr" target="_blank" rel="noopener noreferrer">Open in Google Maps</a></p>
        </div>
        
        <div class="footer-section">
          <h4>Hours</h4>
          <p>Mon - Sat: 10:00 AM - 8:00 PM</p>
          <p>Sunday: 11:00 AM - 6:00 PM</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 AMARA Beauty Parlour. All rights reserved.</p>
      </div>
    </div>
  `;
  return footer;
}
