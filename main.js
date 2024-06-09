document.addEventListener('DOMContentLoaded', () => {
    // Add visible class to fade-in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    fadeElements.forEach(element => {
      observer.observe(element);
    });
  
    // Animate elements on page load
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, 500 * (index + 1));
    });
  });
  