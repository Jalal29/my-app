export function createAboutSection() {
  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about-section';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">About Us</h2>
      <div class="about-content">
        <h3 class="about-hello">Hello from AMARA!</h3>
        <p class="about-lead">Dear Beautiful Ladies, welcome to a world where luxury meets affordability.</p>

        <div class="about-text">
          <p><strong>WHY AMARA?</strong><br>
          AMARA means “Eternal” in several popular languages including Sanskrit and Arabic. We believe beauty is timeless — every lady is eternally beautiful. Our name reflects our commitment to celebrating and enhancing that timeless beauty.</p>

          <p><strong>WHAT WE OFFER</strong><br>
          At AMARA, we are dedicated to providing the best in skin and hair care so you bloom with confidence. We offer a carefully curated range of professional and organic skin, hair and spa services. Each treatment is designed to relax, rejuvenate, and refresh you, delivered by our team of skilled and experienced professionals.</p>

          <p><strong>OUR TAGLINE</strong><br>
          Since our focus is to nurture and cherish your natural beauty — not to change it — our tagline is: <em>Beauty Redefined</em>. Come onboard, celebrate yourself, and experience beauty in a new language.</p>

          <div class="about-cta">
            <button class="cta-button">Book an Appointment</button>
          </div>
        </div>
        
        <div class="features-grid">
          <div class="feature">
            <h3>Expert Professionals</h3>
            <p>Certified and experienced beauty experts focused on results and care.</p>
          </div>
          <div class="feature">
            <h3>Premium & Organic Products</h3>
            <p>We use high-quality, carefully selected products for safe, lasting results.</p>
          </div>
          <div class="feature">
            <h3>Luxury Experience</h3>
            <p>Relax in a serene environment created for your comfort and rejuvenation.</p>
          </div>
          <div class="feature">
            <h3>Personalized Care</h3>
            <p>Treatments tailored to your unique needs and preferences.</p>
          </div>
        </div>
      </div>
    </div>
  `;
  return section;
}
