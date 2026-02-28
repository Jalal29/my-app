// Import styles
import './styles/globals.css'
import './styles/components/header.css'
import './styles/components/footer.css'
import './styles/components/services.css'

// Import components
import { createHeader } from './components/header.js'
import { createFooter } from './components/footer.js'
import { createHeroSection } from './components/hero.js'
import { createServicesSection } from './components/services.js'
import { createAboutSection } from './components/about.js'
import { createGallerySection } from './components/gallery.js'
import { createContactSection } from './components/contact.js'

// Build the application
async function buildApp() {
  const app = document.querySelector('#app')
  app.innerHTML = '' // Clear existing content

  // Add all sections
  app.appendChild(createHeader())
  app.appendChild(createHeroSection())
  app.appendChild(await createServicesSection())
  app.appendChild(createAboutSection())
  app.appendChild(createGallerySection())
  app.appendChild(createContactSection())
  app.appendChild(createFooter())
}

// Initialize the app
buildApp()
