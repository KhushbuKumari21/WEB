// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const scrollButtons = document.querySelectorAll('.scroll-button');

// Smooth scrolling when clicking on navigation links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Smooth scrolling when clicking on scroll buttons
scrollButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    const targetId = button.getAttribute('data-target');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle active class on navigation links based on scroll position
window.addEventListener('scroll', () => {
  const currentPosition = window.pageYOffset;
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      currentPosition >= sectionTop - 50 &&
      currentPosition < sectionTop + sectionHeight - 50
    ) {
      const targetId = `#${section.getAttribute('id')}`;
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
          link.classList.add('active');
        }
      });
    }
  });
});
