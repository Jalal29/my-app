export function createGallerySection() {
  const section = document.createElement('section');
  section.id = 'gallery';
  section.className = 'gallery-section';
  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">Gallery</h2>
      <div class="gallery-grid">
        <div class="gallery-item" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
          <p>Bridal Makeup</p>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">
          <p>Hair Styling</p>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
          <p>Spa Services</p>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
          <p>Nail Art</p>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
          <p>Facial Treatments</p>
        </div>
        <div class="gallery-item" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">
          <p>Party Makeup</p>
        </div>
      </div>
      <p class="gallery-note">*Add your own images to public/images/gallery/</p>
    </div>
  `;
  return section;
}
