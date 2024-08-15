
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-5px)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });

const featureItems = document.querySelectorAll('.feature-item');
window.addEventListener('scroll', () => {
  featureItems.forEach((item) => {
    const position = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    if (position < screenPosition) {
      item.style.transform = 'translateY(0)';
      item.style.opacity = '1';
    }
  });
});

document.querySelectorAll('.explore-link').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
  });
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
        