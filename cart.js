// Quantity Adjustments
const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const numberInputs = document.querySelectorAll('.number');

minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let quantity = parseInt(numberInputs[index].value);
        if (quantity > 1) {
            quantity--;
            numberInputs[index].value = quantity;
        }
    });
});

plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let quantity = parseInt(numberInputs[index].value);
        quantity++;
        numberInputs[index].value = quantity;
    });
});


//Mobile Menu
const mobileMenuToggle = document.querySelector('.mobile .menuicon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('change', () => {
    mobileMenu.style.display = mobileMenuToggle.checked ? 'block' : 'none';
});

// Add event listeners to footer menu titles to toggle the corresponding menus.
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