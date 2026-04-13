// ================= Smooth Scrolling =================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ================= Navbar Scroll Effect =================
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = '#111';
    navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
  } else {
    navbar.style.background = '#222';
    navbar.style.boxShadow = 'none';
  }
});

// ================= Expand/Collapse Course Cards =================
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});