export function createHeroSection() {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero';
  section.innerHTML = `
    <div class="container">
      <div class="hero-content">
        <h1>Welcome to AMARA Beauty Parlour</h1>
        <p>Experience Premium Beauty Services</p>
        <button class="cta-button">Book Appointment</button>
      </div>
    </div>
  `;

  // Add click handler for CTA button
  const ctaButton = section.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });

  return section;
}
