document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('#category-list li');
    const productList = document.getElementById('product-list');
    const productDetails = document.getElementById('product-details');

    const productsData = {
        electronics: [
            { id: 1, name: 'Смартфон', price: 500 },
            { id: 2, name: 'Ноутбук', price: 1000 },
            { id: 3, name: 'Планшет', price: 300 },
        ],
        clothing: [
            { id: 4, name: 'Футболка', price: 20 },
            { id: 5, name: 'Джинси', price: 50 },
            { id: 6, name: 'Жилетка', price: 100 },
        ],
        books: [
            { id: 7, name: 'Казки для дiтей', price: 30 },
            { id: 8, name: 'Роман', price: 25 },
            { id: 9, name: 'Вiршi', price: 35 },
        ]
    };

    function displayProducts(category) {
        productList.innerHTML = '';
        productsData[category].forEach(product => {
            const li = document.createElement('li');
            li.textContent = product.name;
            li.addEventListener('click', () => {
                displayProductDetails(product);
            });
            productList.appendChild(li);
        });
    }

    function displayProductDetails(product) {
        productDetails.innerHTML = `
            <h3>${product.name}</h3>
            <p>Цiна: $${product.price}</p>
            <button id="buy-btn">Купити</button>
        `;
        document.getElementById('buy-btn').addEventListener('click', () => {
            alert('Покупка успiшна!');
            productDetails.innerHTML = '';
            productList.innerHTML = '';
        });
    }

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.getAttribute('data-category');
            displayProducts(selectedCategory);
        });
    });
});
