export function createServiceCard(service) {
  const whatsappMessage = encodeURIComponent(`Hi, I would like to book ${service.name}${service.price ? ` (₹${service.price})` : ''}`);
  const whatsappUrl = `https://wa.me/918100035223?text=${whatsappMessage}`;
  
  return `
    <div class="service-card">
      <div class="service-card-top">
        <h4 class="service-name">${service.name}</h4>
      </div>
      <div class="service-details">
        ${service.price ? `<span class="price">₹${service.price}</span>` : ''}
        ${service.duration ? `<span class="duration">${service.duration}</span>` : ''}
      </div>
      ${service.description ? `<p class="service-desc">${service.description}</p>` : ''}
      <div class="card-actions">
        <a href="${whatsappUrl}" target="_blank" class="book-btn">BOOK NOW</a>
        <a href="#" class="more-link">MORE DETAILS</a>
      </div>
    </div>
  `;
}

function createFeaturedPackage(category) {
  return `
    <div class="featured-package minimal">
      <div class="featured-content">
        <button type="button" class="category-toggle" aria-expanded="false">${category.name}</button>
        <div class="category-content" hidden>
          <div class="featured-meta">
            <span class="featured-price">From ₹${category.price}</span>
            <span class="featured-duration">${category.duration}</span>
          </div>
          ${category.description ? `<p class="featured-desc">${category.description}</p>` : ''}
        </div>
      </div>
    </div>
  `;
}

function createBleachCard(sub) {
  const rowsHTML = sub.rows.map(r => `
    <tr>
      <td class="bleach-area">${r.area}</td>
      <td class="bleach-price">${r.price}</td>
    </tr>
  `).join('');

  return `
    <div class="bleach-card service-card">
      <div class="bleach-card-top">
        <button type="button" class="bleach-toggle" aria-expanded="false">${sub.name}</button>
      </div>
      <p class="bleach-summary">Specialized bleaching treatments to brighten and lighten fine hair and pigmentation across face, neck and body. Click to view area-wise pricing below.</p>
      <div class="bleach-card-body" style="display:none; margin-top:1rem;">
        <table class="bleach-table">
          <thead>
            <tr>
              <th>AREA</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function createCategoryCard(category) {
  return `
    <div class="category-card">
      <div class="category-icon">${category.icon || '✨'}</div>
      <h3 class="category-card-title">${category.name}</h3>
      <p class="category-card-desc">${category.shortDesc || ''}</p>
      <button type="button" class="explore-btn" data-category-id="${category.id}">Explore Services</button>
    </div>
  `;
}

export function createServiceCategory(category, isMainCategory = false) {
  const servicesArr = Array.isArray(category.services) ? category.services : [];
  const servicesHTML = servicesArr.map(service => createServiceCard(service)).join('');
  const mainClass = isMainCategory ? 'main' : '';

  return `
    <div class="service-category" data-category-id="${category.id}">
      <button type="button" class="category-toggle ${mainClass}" aria-expanded="false">${category.name}</button>
      <div class="category-content" hidden>
        <div class="services-grid">
          ${servicesHTML}
        </div>
      </div>
    </div>
  `;
}

export async function createServicesSection() {
  const section = document.createElement('section');
  section.id = 'services';
  section.className = 'services-section';
  
  try {
    const response = await fetch('/data/services.json');
    if (!response.ok) {
      throw new Error(`Failed to load services data (${response.status})`);
    }
    const data = await response.json();
    
    // Render featured package first (if present)
    const featured = data.categories.find(c => c.id === 'timeless-beauty');
    const otherCategories = data.categories.filter(c => c.id !== 'timeless-beauty');

    const featuredHTML = featured ? createFeaturedPackage(featured) : '';

    const categoriesHTML = otherCategories.map(category => {
      // if category has subcategories render them under the main category heading
      if (category.subcategories && Array.isArray(category.subcategories)) {
        // helper to render a sub (handles services, rows (bleach), or nested subcategories)
        const renderSub = (sub) => {
          if (sub.rows && Array.isArray(sub.rows)) return createBleachCard(sub);
          if (sub.services && Array.isArray(sub.services)) return createServiceCategory(sub);
            if (sub.subcategories && Array.isArray(sub.subcategories)) {
            // render nested subcategories (e.g., Bleach -> Glow/Diamond)
            const nested = sub.subcategories.map(s => {
              if (s.rows && Array.isArray(s.rows)) return createBleachCard(s);
              if (s.services && Array.isArray(s.services)) return createServiceCategory(s);
              return '';
            }).join('');
            return `
              <div class="service-subgroup">
                <button type="button" class="subgroup-toggle" aria-expanded="false">${sub.name}</button>
                <div class="subgroup-content" hidden>
                  ${nested}
                </div>
              </div>
            `;
          }
          return '';
        };

        const subs = category.subcategories.map(renderSub).join('');

        return `
          <div class="service-category-group" data-category-id="${category.id}">
            <button type="button" class="category-toggle main" aria-expanded="false">${category.name}</button>
            <div class="category-content" hidden>
              <div class="subcategory-list">${subs}</div>
            </div>
          </div>
        `;
      }

      return createServiceCategory(category, true);
    }).join('');

    // Render category cards
    const categoryCardsHTML = otherCategories.map(cat => createCategoryCard(cat)).join('');

    section.innerHTML = `
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        ${featuredHTML}
        <div class="category-cards-grid">
          ${categoryCardsHTML}
        </div>
        <div class="category-details" style="display:none;">
          <button type="button" class="back-btn">← Back to All Services</button>
          <div class="category-details-content">
            ${categoriesHTML}
          </div>
        </div>
      </div>
    `;
    // helper: slide up/down animation for panels
    function slideDown(el, duration = 300) {
      el.removeAttribute('hidden');
      el.style.overflow = 'hidden';
      el.style.display = 'block';
      const height = el.scrollHeight;
      el.style.maxHeight = '0px';
      el.style.opacity = '0';
      el.style.transition = `max-height ${duration}ms ease, opacity ${Math.round(duration*0.8)}ms ease`;
      // force reflow
      void el.offsetHeight;
      el.style.maxHeight = height + 'px';
      el.style.opacity = '1';
      const cleanup = () => {
        el.style.maxHeight = '';
        el.style.overflow = '';
        el.style.transition = '';
        el.style.display = '';
        el.style.opacity = '';
        el.removeEventListener('transitionend', cleanup);
      };
      el.addEventListener('transitionend', cleanup);
    }

    function slideUp(el, duration = 300) {
      el.style.overflow = 'hidden';
      const height = el.scrollHeight;
      el.style.maxHeight = height + 'px';
      el.style.opacity = '1';
      el.style.transition = `max-height ${duration}ms ease, opacity ${Math.round(duration*0.8)}ms ease`;
      // force reflow
      void el.offsetHeight;
      el.style.maxHeight = '0px';
      el.style.opacity = '0';
      const cleanup = () => {
        el.setAttribute('hidden', '');
        el.style.maxHeight = '';
        el.style.overflow = '';
        el.style.transition = '';
        el.style.display = '';
        el.style.opacity = '';
        el.removeEventListener('transitionend', cleanup);
      };
      el.addEventListener('transitionend', cleanup);
    }

    function slideToggle(el, show, duration = 300) {
      if (show) slideDown(el, duration);
      else slideUp(el, duration);
    }

    // Handle category card clicks
    const categoryCardsGrid = section.querySelector('.category-cards-grid');
    const categoryDetails = section.querySelector('.category-details');
    const backBtn = section.querySelector('.back-btn');

    categoryCardsGrid?.addEventListener('click', (e) => {
      const exploreBtn = e.target.closest('.explore-btn');
      if (!exploreBtn) return;
      
      const categoryId = exploreBtn.dataset.categoryId;
      // Search for both service-category-group and service-category
      const categoryGroup = section.querySelector(`.service-category-group[data-category-id="${categoryId}"], .service-category[data-category-id="${categoryId}"]`);
      
      if (categoryGroup) {
        // Hide cards, show details
        categoryCardsGrid.style.display = 'none';
        categoryDetails.style.display = 'block';
        
        // Open the selected category
        const toggle = categoryGroup.querySelector('.category-toggle');
        const content = categoryGroup.querySelector('.category-content');
        if (toggle && content && content.hasAttribute('hidden')) {
          slideDown(content, 320);
          toggle.setAttribute('aria-expanded', 'true');
          
          // Auto-expand first subcategory if this is a category-group
          if (categoryGroup.classList.contains('service-category-group')) {
            setTimeout(() => {
              const firstSubToggle = content.querySelector('.category-toggle, .subgroup-toggle');
              const firstSubContent = firstSubToggle?.nextElementSibling;
              if (firstSubToggle && firstSubContent && firstSubContent.hasAttribute('hidden')) {
                slideDown(firstSubContent, 320);
                firstSubToggle.setAttribute('aria-expanded', 'true');
              }
            }, 100);
          }
        }
        
        // Scroll to the category
        categoryGroup.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    backBtn?.addEventListener('click', () => {
      categoryCardsGrid.style.display = 'grid';
      categoryDetails.style.display = 'none';
      
      // Close all categories and subcategories
      const allContents = section.querySelectorAll('.category-content, .subgroup-content');
      allContents.forEach(c => {
        if (!c.hasAttribute('hidden')) {
          slideUp(c, 220);
          const prev = c.previousElementSibling;
          if (prev && (prev.classList.contains('category-toggle') || prev.classList.contains('subgroup-toggle'))) {
            prev.setAttribute('aria-expanded', 'false');
          }
        }
      });
      
      // Scroll to top of services section
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // descriptions are shown by default; set up bleach card expand/collapse toggles
    const bleachCards = section.querySelectorAll('.bleach-card');
    bleachCards.forEach(card => {
      card.style.cursor = 'pointer';
      const body = card.querySelector('.bleach-card-body');
      const header = card.querySelector('.bleach-card-top');
      const toggleBtn = card.querySelector('.bleach-toggle');
      const toggleHandler = () => {
        const isOpen = card.classList.toggle('open');
        if (isOpen) {
          if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
          slideDown(body, 260);
        } else {
          if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
          slideUp(body, 220);
        }
      };
      if (toggleBtn) toggleBtn.addEventListener('click', toggleHandler);
      else if (header) header.addEventListener('click', toggleHandler);
      // start collapsed
      body.setAttribute('hidden', '');
    });
    // featured package is rendered as header-only (no items)
    // set up category toggle behavior (accordion for main headings)
    section.addEventListener('click', (e) => {
      // handle category toggles and subgroup toggles
      const btn = e.target.closest('.category-toggle, .subgroup-toggle');
      if (!btn) return;
      const content = btn.nextElementSibling;
      if (!content) return;

      const willOpen = content.hasAttribute('hidden');

      // If this is a main category, close other main category contents (accordion)
      if (btn.classList.contains('main')) {
        const allMainContents = section.querySelectorAll('.service-category-group > .category-content, .service-category > .category-content, .featured-package > .category-content');
        allMainContents.forEach(c => {
          if (c !== content && !c.hasAttribute('hidden')) {
            // Only close if the toggle has 'main' class
            const toggleBtn = c.previousElementSibling;
            if (toggleBtn && toggleBtn.classList.contains('main')) {
              slideUp(c, 220);
              toggleBtn.setAttribute('aria-expanded', 'false');
            }
          }
        });
      }

      // Toggle the clicked content with animation
      if (willOpen) slideDown(content, 320);
      else slideUp(content, 260);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  } catch (error) {
    console.error('Error loading services:', error);
    section.innerHTML = `
      <div class="container">
        <h2 class="section-title">Our Services</h2>
        <p>Unable to load services. Please try again later.</p>
      </div>
    `;
  }
  
  return section;
}
