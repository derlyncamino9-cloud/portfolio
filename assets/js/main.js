const sections = document.querySelectorAll('#about, #services, #portfolio, #contact');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('text-yellow');
    item.classList.add('text-white');

    if (item.dataset.section === current) {
      item.classList.remove('text-white');
      item.classList.add('text-yellow');
    }
  });
});
