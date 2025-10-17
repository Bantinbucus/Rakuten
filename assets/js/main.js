const productList = document.querySelectorAll('.product-card');
const filterButtons = document.querySelectorAll('.filter-btn');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const floatingCartCount = document.getElementById('floating-cart-count');
let cartTotal = 0;

function setActiveFilter(button) {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
}

function filterProducts(category) {
    productList.forEach((product) => {
        const matches = category === 'tat-ca' || product.dataset.category === category;
        product.style.display = matches ? 'grid' : 'none';
    });
}

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        setActiveFilter(button);
        filterProducts(filter);
    });
});

function updateCart() {
    cartCount.textContent = cartTotal;
    floatingCartCount.textContent = cartTotal;
}

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        cartTotal += 1;
        updateCart();
        button.textContent = 'Đã thêm';
        button.disabled = true;
        button.classList.add('is-disabled');
        setTimeout(() => {
            button.textContent = 'Thêm';
            button.disabled = false;
            button.classList.remove('is-disabled');
        }, 1500);
    });
});

const ctaForm = document.querySelector('.cta__form');
if (ctaForm) {
    ctaForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = ctaForm.querySelector('input[type="email"]');
        if (!emailInput.value) {
            return;
        }

        emailInput.disabled = true;
        const submitBtn = ctaForm.querySelector('button');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang gửi...';

        setTimeout(() => {
            submitBtn.textContent = 'Đăng ký thành công!';
            submitBtn.classList.add('btn--ghost');
        }, 1200);
    });
}
