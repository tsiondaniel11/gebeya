
const paymentMethods = document.querySelectorAll('.payment-method');
const cardDetails = document.querySelector('.card-details');

paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');

        const methodData = method.dataset.method;
        if (methodData === 'card') {
            cardDetails.classList.add('active');
        } else {
            cardDetails.classList.remove('active');
        }
    });
});


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

function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.classList.toggle('active');
}
