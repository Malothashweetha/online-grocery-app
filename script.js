document.addEventListener('DOMContentLoaded', () => {

    // --- Exchange Rate Constant ---
    // Using a common approximate rate.
    // For production, consider fetching this from a reliable API daily.
    const USD_TO_INR_RATE = 86.38; // As of July 26, 2024 (Corrected year for realism)

    // --- 1. Product Data ---
    // Process products to include INR prices
    const products = [
        {
            id: 'p01',
            name: 'Fresh Red Apples',
            price: 1.7,
            image: 'images/apples.webp',
            description: 'Crisp, sweet, and juicy red apples, perfect for snacking.',
            category: 'fruits'
        },
        {
            id: 'p02',
            name: 'Ripe Yellow Bananas',
            price: 0.5, // Assuming USD
            image: 'images/bananas.webp',
            description: 'Naturally sweet and energy-rich bananas.',
            category: 'fruits'
        },
        {
            id: 'p03',
            name: 'Assorted Biscuits Pack',
            price: 0.2, // Assuming USD
            image: 'images/biscuits.webp',
            description: 'A delightful pack of various crunchy biscuits.',
            category: 'snacks'
        },
        {
            id: 'p04',
            name: 'Whole Wheat Bread',
            price: 0.3, // Assuming USD
            image: 'images/bread.webp',
            description: 'Freshly baked whole wheat bread, ideal for sandwiches.',
            category: 'bakery'
        },
        {
            id: 'p05',
            name: 'Dairy Butter',
            price: 1.5, // Assuming USD
            image: 'images/butter.webp',
            description: 'Rich and creamy dairy butter for cooking and spreading.',
            category: 'dairy'
        },
        {
            id: 'p06',
            name: 'Green Cabbage',
            price: 0.5, // Assuming USD
            image: 'images/cabbage.webp',
            description: 'Fresh and firm green cabbage, great for salads or curries.',
            category: 'vegetables'
        },
        {
            id: 'p07',
            name: 'Farm Fresh Carrots',
            price: 0.4, // Assuming USD
            image: 'images/carrots.webp',
            description: 'Sweet and crunchy carrots, packed with vitamins.',
            category: 'vegetables'
        },
        {
            id: 'p08',
            name: 'cup cakes',
            price: 0.7, // Assuming USD
            image: 'images/cupcakes.webp',
            description: 'Sweet and homemade cakes',
            category: 'bakery'
        },
        {
            id: 'p09',
            name: 'Farm Eggs',
            price: 1.2, // Assuming USD
            image: 'images/eggs.webp',
            description: 'farm fresh eggs',
            category: 'dairy'
        },
        {
            id: 'p10',
            name: 'Green Chillies (100g)',
            price: 0.2, // Assuming USD
            image: 'images/green chillies.webp',
            description: 'Spicy green chillies to add heat to your dishes.',
            category: 'vegetables'
        },
        {
            id: 'p11',
            name: 'Orange Juice (1L)',
            price: 0.8, // Assuming USD
            image: 'images/juice.webp',
            description: '100% pure squeezed orange juice, no added sugar.',
            category: 'beverages'
        },
        {
            id: 'p12',
            name: 'Fresh Dairy Milk (1 Liter)',
            price: 1.6, // This one was explicitly low, so definitely USD
            image: 'images/milk.webp',
            description: 'Pasteurized and homogenized fresh cow milk.',
            category: 'dairy'
        },
        {
            id: 'p13',
            name: 'Red Onions (1kg)',
            price: 1.50, // This one was explicitly low, so definitely USD
            image: 'images/onions.webp',
            description: 'Pungent red onions, essential for many recipes.',
            category: 'vegetables'
        },
        {
            id: 'p14',
            name: 'Farm Mangoes',
            price: 1.9, // Assuming USD
            image: 'images/mangoes.webp',
            description: 'farm fresh sweet mangoes.',
            category: 'fruits'
        },
        {
            id: 'p15',
            name: 'Potatoes (2kg Bag)',
            price: 0.5, // Assuming USD
            image: 'images/potatoes.webp',
            description: 'Versatile potatoes, great for mashing, frying, or roasting.',
            category: 'vegetables'
        },
        {
            id: 'p16',
            name: 'Shampoo (250ml)',
            price: 1.9, // Assuming USD
            image: 'images/shampoo.webp',
            description: 'Nourishing shampoo for healthy and shiny hair.',
            category: 'personal_care'
        },
        {
            id: 'p17',
            name: 'Fresh Spinach',
            price: 0.2, // Assuming USD
            image: 'images/spinach.webp',
            description: 'Pre-washed fresh spinach, ready to cook.',
            category: 'vegetables'
        },
        {
            id: 'p18',
            name: 'Ripe Tomatoes',
            price: 0.5, // Assuming USD
            image: 'images/tomatoes.webp',
            description: 'Juicy and ripe red tomatoes, perfect for salads and sauces.',
            category: 'vegetables'
        },
        {
            id: 'p19',
            name: 'Adult Toothbrush (Pack of 2)',
            price: 0.3, // Assuming USD
            image: 'images/toothbrush.jpeg',
            description: 'Pack of two ergonomic toothbrushes for effective cleaning.',
            category: 'personal_care'
        },
        {
            id: 'p20',
            name: 'Mixed Fruit Yogurt',
            price: 0.9, // Assuming USD
            image: 'images/yogurt.jpg',
            description: 'Creamy yogurt with real fruit pieces.',
            category: 'dairy'
        },
        {
            id: 'p21',
            name: 'staberry',
            price: 1.4, // Assuming USD
            image: 'images/staberries.webp',
            description: 'A refreshing case of sparkling water.',
            category: 'fruits'
        },
        {
            id: 'p22',
            name: 'soaps',
            price: 1.2, // Assuming USD
            image: 'images/soaps.jpg',
            description: 'body soaps .',
            category: 'personal care'
        },
        {
            id: 'p23',
            name: 'Paneer',
            price: 1.6, // Assuming USD
            image: 'images/paneer.jpg',
            description: ' Rich and creamy dairy Paneer for cooking .',
            category: 'dairy'
        },
        {
            id: 'p24',
            name: 'Pine apple',
            price: 0.9, // Assuming USD
            image: 'images/pineapple.webp',
            description: ' fresh and sweet fruit .',
            category: 'fruits'
        }
    ].map(product => {
        // Convert USD price to INR and add a new property
        return {
            ...product,
            priceINR: parseFloat((product.price * USD_TO_INR_RATE).toFixed(2)) // Store as number
        };
    });


    // --- 2. DOM Elements ---
    const productGrid = document.getElementById('productGrid');
    const cartIcon = document.getElementById('cartIcon');
    const cartCount = document.getElementById('cartCount');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const searchInput = document.getElementById('searchInput');
    const categoryButtonsContainer = document.getElementById('categoryButtons');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const paymentModalOverlay = document.getElementById('paymentModalOverlay');
    const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');
    const paymentModalTotal = document.getElementById('paymentModalTotal');
    const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

    // Cart array will now store products with their priceINR property
    let cart = [];

    // --- 3. Local Storage Persistence ---
    const saveCart = () => {
        localStorage.setItem('groceryCart', JSON.stringify(cart));
    };

    const loadCart = () => {
        const storedCart = localStorage.getItem('groceryCart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
            // Re-map cart items to ensure they have the latest priceINR if your initial products array changes
            // This is crucial for consistent pricing if you refresh and the exchange rate logic updates.
            cart = cart.map(cartItem => {
                const product = products.find(p => p.id === cartItem.id);
                // Ensure price and priceINR are updated in cart items from the current products list
                return product ? { ...cartItem, price: product.price, priceINR: product.priceINR } : cartItem;
            });
            updateCartDisplay();
        }
    };

    // --- 4. Render Products ---
    const renderProducts = (filteredProducts = products) => {
        productGrid.innerHTML = ''; // Clear existing products
        if (filteredProducts.length === 0) {
            productGrid.innerHTML = '<p style="text-align: center; width: 100%; color: #666; font-size: 1.2rem;">No products found matching your criteria.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            // Display priceINR here
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="product-price">₹${product.priceINR.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    };

    // --- 5. Shopping Cart Functions ---

    const addToCart = (productId) => {
        const existingItemIndex = cart.findIndex(item => item.id === productId);
        // Find the product with its INR price
        const productToAdd = products.find(product => product.id === productId);

        if (!productToAdd) return; // Product not found

        if (existingItemIndex > -1) {
            // Item exists, increment quantity
            cart[existingItemIndex].quantity++;
        } else {
            // Item does not exist, add new. Use productToAdd which already has priceINR.
            // When adding to cart, include price, priceINR, and quantity.
            cart.push({ ...productToAdd, quantity: 1 });
        }
        updateCartDisplay();
        saveCart();
    };

    const removeFromCart = (productId) => {
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
        saveCart();
    };

    const updateQuantity = (productId, change) => {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;
            if (cart[itemIndex].quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCartDisplay();
                saveCart();
            }
        }
    };

    const calculateCartTotal = () => {
        // Calculate total using priceINR
        return cart.reduce((total, item) => total + (item.priceINR * item.quantity), 0);
    };

    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                // Display priceINR here
                cartItemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p class="price">₹${item.priceINR.toFixed(2)}</p>
                        <div class="item-quantity-controls">
                            <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });
        }

        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        // Display total in INR
        cartTotalElement.textContent = "₹${calculateCartTotal().toFixed(2)}";
    };

    // --- 6. Search and Filter Functions ---
    const filterProducts = (searchTerm, category) => {
        let filtered = products;

        if (category && category !== 'all') {
            filtered = filtered.filter(product => product.category === category);
        }

        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                product.description.toLowerCase().includes(lowerCaseSearchTerm) ||
                (product.category && product.category.toLowerCase().includes(lowerCaseSearchTerm))
            );
        }
        renderProducts(filtered);
    };

    // --- 7. Event Listeners ---

    // Open/Close Cart Sidebar
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cartSidebar.classList.remove('open');
    });

    // Add to Cart button click (Delegation for dynamic buttons)
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productId = event.target.dataset.id;
            addToCart(productId);
        }
    });

    // Cart item quantity and remove buttons (Delegation)
    cartItemsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('remove-item-btn')) {
            const productId = target.dataset.id;
            removeFromCart(productId);
        } else if (target.classList.contains('quantity-btn')) {
            const productId = target.dataset.id;
            const change = target.classList.contains('increase') ? 1 : -1;
            updateQuantity(productId, change);
        }
    });

    // Search input event
    searchInput.addEventListener('input', (event) => {
        const currentCategoryBtn = document.querySelector('.filter-btn.active');
        const currentCategory = currentCategoryBtn ? currentCategoryBtn.dataset.category : 'all';
        filterProducts(currentSearchTerm, currentCategory);
    });

    // Category filter buttons
    categoryButtonsContainer.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');

            const selectedCategory = target.dataset.category;
            const currentSearchTerm = searchInput.value.trim();
            filterProducts(currentSearchTerm, selectedCategory);
        }
    });

    // --- Payment Modal Event Listeners ---

    // Proceed to Checkout button click
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before proceeding to checkout.');
            return;
        }
        cartSidebar.classList.remove('open');
        paymentModalOverlay.classList.add('open');
        // Display total in INR in modal
        paymentModalTotal.textContent = "₹${calculateCartTotal().toFixed(2)}";
    });

    // Close Payment Modal button click
    closePaymentModalBtn.addEventListener('click', () => {
        paymentModalOverlay.classList.remove('open');
    });

    // Confirm Payment button click (Basic simulation)
    confirmPaymentBtn.addEventListener('click', () => {
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');

        if (selectedPaymentMethod) {
            const paymentMethodName = selectedPaymentMethod.labels[0].textContent.trim();
            alert(`Payment confirmed!
            Method: ${paymentMethodName}
            Order Total: ₹${calculateCartTotal().toFixed(2)}
            Thank you for your purchase from FreshMart!`);

            cart = [];
            saveCart();
            updateCartDisplay();
            paymentModalOverlay.classList.remove('open');
        } else {
            alert('Please select a payment method to proceed.');
        }
    });

    // --- Initial load ---
    loadCart(); // Load cart from local storage on page load
    renderProducts(); // Display all products initially
});


