const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const iconCart = document.querySelector('.navbar-shopping-cart');
const myOrderMenu = document.querySelector('.product-detail');

emailMenu.addEventListener('click', toggleDesktopMenu);
iconMobileMenu.addEventListener('click', toggleMobileMenu);
iconCart.addEventListener('click', toggleMyOrderMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');

    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrderMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    myOrderMenu.classList.toggle('inactive');
}