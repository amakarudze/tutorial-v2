document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.overlay');

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    overlay.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    toggle.setAttribute('aria-expanded', false);
  });
});