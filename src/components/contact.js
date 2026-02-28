export function createContactSection() {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'contact-section';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <div class="contact-content">
        <div class="contact-chat">
          <p class="contact-lead">Prefer quick replies? Chat with us on WhatsApp for appointments and enquiries.</p>
          <a class="cta-button whatsapp" href="https://wa.me/918100035223?text=Hello%20AMARA%20Beauty%20Parlour%2C%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer">
            <span class="whatsapp-icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.373 0 .01 5.373.01 12.001c0 2.112.552 4.182 1.6 6.004L0 24l6.2-1.6A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.9c-1.86 0-3.68-.5-5.24-1.44l-.37-.22-3.68.95.98-3.58-.24-.37A9.87 9.87 0 0 1 2.1 12C2.1 6.06 6.06 2.1 12 2.1c2.64 0 5.12 1.03 6.98 2.9A9.792 9.792 0 0 1 21.9 12c0 5.94-3.96 9.9-9.9 9.9z"/></svg>
            </span>
            Chat on WhatsApp
          </a>
        </div>
        
        <div class="contact-info">
          <div class="info-card">
            <h3>📞 Call Us</h3>
            <p>+91 8100035223</p>
          </div>
          <div class="info-card">
            <h3>✉️ Email</h3>
            <p>info@amarabeauty.com</p>
          </div>
          <div class="info-card">
            <h3>📍 Visit Us</h3>
            <p>
              Emergency Gate, 23/C, Ekbalpore Ln,<br>
              across THE CALCUTTA MEDICAL RESEARCH INSTITUTE,<br>
              opposite Netaji Nursing Home, Naptani Bagan,<br>
              Khidirpur, Kolkata, West Bengal 700023, India
            </p>
            <p>
              <a href="https://share.google/7OcGFZlDU73p8bJZr" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </p>
          </div>
          <div class="info-card">
            <h3>⏰ Opening Hours</h3>
            <p>Mon-Sat: 10AM - 8PM<br>Sunday: 11AM - 6PM</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // No local contact form — users should use WhatsApp or call/email

  return section;
}
