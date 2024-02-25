document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add code here to handle form submission (e.g., sending data to a server)
    alert('Message sent!'); // Placeholder for actual functionality
  });
  const galleryImages = document.querySelectorAll('#gallery .gallery-container img');

  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
  
      const enlargedImg = document.createElement('img');
      enlargedImg.src = this.src;
      enlargedImg.classList.add('enlarged-img');
  
      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);
  
      overlay.addEventListener('click', function() {
        document.body.removeChild(overlay);
      });
    });
  });
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const sectionId = this.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Placeholder for actual form submission handling (e.g., sending data to a server)
    alert('Message sent successfully!'); // Change this for actual functionality
  });
        