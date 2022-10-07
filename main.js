const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const iconCart = document.querySelector('.navbar-shopping-cart');
const myOrderMenu = document.querySelector('.product-detail');
const myOrderBackIcon = document.querySelector('.title-container img');
const cardsContainer = document.querySelector('.cards-container');
const productDescription = document.querySelector('.product-description');
const productDescriptionClose = document.querySelector('.product-description-close');

emailMenu.addEventListener('click', toggleDesktopMenu);
iconMobileMenu.addEventListener('click', toggleMobileMenu);
iconCart.addEventListener('click', toggleMyOrderMenu);
myOrderBackIcon.addEventListener('click', closeMyOrderMenu);
productDescriptionClose.addEventListener('click', closeProductDescription)

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Motorcycle',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Car',
    price: 720,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

renderProducts(productList);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');
    const isProductDescriptionClosed = productDescription.classList.contains('inactive');
    
    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }
    if (!isProductDescriptionClosed) {
        productDescription.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrderMenu () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDescriptionClosed = productDescription.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDescriptionClosed) {
        productDescription.classList.add('inactive');
    }

    myOrderMenu.classList.toggle('inactive');
}

function closeMyOrderMenu () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    myOrderMenu.classList.add('inactive');
}

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts (productArray) {
    for (product of productArray) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // createElement se utiliza para crear cualquier elemento exitente en HTML.

        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.addEventListener('click', openProductDescription)
        // setAtribute se utiliza para agregar cualquier atributo existente a un elemento de HTML.
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const figureCart = document.createElement('figure');
        
        const imgAddCart = document.createElement('img');
        imgAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        figureCart.appendChild(imgAddCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figureCart);

        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

function openProductDescription () {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }
    
    productDescription.classList.remove('inactive');
}

function closeProductDescription () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDescription.classList.add('inactive');
}