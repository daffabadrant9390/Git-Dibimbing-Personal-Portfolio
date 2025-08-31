// Smooth scroll function for navigation
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add any additional JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio website loaded successfully!');
  
  // You can add more interactive features here
  // For example: form handling, animations, etc.
});
