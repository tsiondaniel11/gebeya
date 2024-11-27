function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.classList.toggle('active');
}

const mobileMenuToggle = document.querySelector('.mobile .menuicon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('change', () => {
  mobileMenu.style.display = mobileMenuToggle.checked ? 'block' : 'none';
});


const footerTitles = document.querySelectorAll('.footer-title');
footerTitles.forEach(title => {
title.addEventListener('click', () => {
  const menuId = title.nextElementSibling.id;
  toggleMenu(menuId);
});
});