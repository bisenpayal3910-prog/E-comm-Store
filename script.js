// step 1 
// select important HTML Elements

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const cartButton = document.getElementById("cartButton")
const cartCount = document.getElementById("cartCount")
const categoryFilters = document.getElementById("categoryFilters")
const productGrid = document.getElementById("productGrid")
const sortSelect = document.getElementById("sortSelect")




// Product modal ke liye javascript
const productModal = document.getElementById("productModal")
const productDetails = document.getElementById("productDetails")
const closeModal = document.getElementById("closeModal")




// step 2 
// Initial project data 


const products = [

    // =================================
    // ELECTRONICS
    // =================================

    {
        id: 1,
        name: "Wireless Headphones",
        price: 1499,
        category: "electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=85"
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        category: "electronics",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85"
    },

    {
        id: 3,
        name: "Smartphone",
        price: 18999,
        category: "electronics",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=85"
    },

    {
        id: 4,
        name: "Bluetooth Speaker",
        price: 1999,
        category: "electronics",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&q=85"
    },

    {
        id: 5,
        name: "Digital Camera",
        price: 24999,
        category: "electronics",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85"
    },

    // =================================
    // FASHION
    // =================================

    {
        id: 6,
        name: "Running Sneakers",
        price: 1999,
        category: "fashion",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=85"
    },

    {
        id: 7,
        name: "Stylish Handbag",
        price: 1599,
        category: "fashion",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=85"
    },

    {
        id: 8,
        name: "Classic Sunglasses",
        price: 899,
        category: "fashion",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&q=85"
    },

    {
        id: 9,
        name: "Casual Denim Jacket",
        price: 1799,
        category: "fashion",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=900&q=85"
    },

    {
        id: 10,
        name: "Elegant Wrist Watch",
        price: 1299,
        category: "fashion",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=900&q=85"
    },

    // =================================
    // COMPUTER ACCESSORIES
    // =================================

    {
        id: 11,
        name: "Laptop",
        price: 45999,
        category: "computer",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&q=85"
    },

    {
        id: 12,
        name: "Mechanical Keyboard",
        price: 2499,
        category: "computer",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&q=85"
    },

    {
        id: 13,
        name: "Wireless Mouse",
        price: 799,
        category: "computer",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=900&q=85"
    },

    {
        id: 14,
        name: "Gaming Headset",
        price: 2299,
        category: "computer",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=900&q=85"
    },

    {
        id: 15,
        name: "Computer Monitor",
        price: 12999,
        category: "computer",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=900&q=85"
    },

    // =================================
    // HOME & LIVING
    // =================================

    {
        id: 16,
        name: "Modern Table Lamp",
        price: 1199,
        category: "home",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=85"
    },

    {
        id: 17,
        name: "Comfortable Chair",
        price: 4999,
        category: "home",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=900&q=85"
    },

    {
        id: 18,
        name: "Indoor Plant",
        price: 499,
        category: "home",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=900&q=85"
    },

    {
        id: 19,
        name: "Decorative Cushion",
        price: 699,
        category: "home",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=900&q=85"
    },

    {
        id: 20,
        name: "Modern Sofa",
        price: 18999,
        category: "home",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85"
    }

];


    



const CART_STORAGE_KEY = "ecomStoreCart"
const cart = (() => {
    try {
        const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]")
        return Array.isArray(savedCart)
            ? savedCart.filter(item => item && Number.isFinite(Number(item.id)) && Number.isFinite(Number(item.quantity)) && Number(item.quantity) > 0)
            : []
    } catch (error) {
        console.warn("Could not load saved cart:", error)
        return []
    }
})()

// helper function to escAPE HTML

function escapeHTML(value) {
 return String(value).replace(/[&<>"']/g,character => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }
    return entities[character]
 })

}

// Render Products

function renderProducts(productList) {
    // empty data check
    if(productList.length === 0) {
        productGrid.innerHTML = `
        <div class = "empty-message">
        <h3>No Product Data Found </h3>
        <p>Please check back later </p>

        </div>
        ` 
        return
    }

    // generates HTML For Every product

    let productsHTML = ""

    productList.forEach(product => {
        productsHTML += `
        <article class ="product-card">

        <div class="product-image">
        <img
           src="${escapeHTML(product.image)}"
           alt="${escapeHTML(product.name)}"
           style="width:100%; height:200px; object-fit: contain"
           loading="lazy"
        >
        <span class="product-rating">
        ${Number(product.rating).toFixed(1)}
        </span>
        </div>

        <div> 

        <p class="product-category"> 
        ${escapeHTML(product.category)}
        </p>

        <h3 class="product-name">
        ${escapeHTML(product.name)}
        </h3>

        <div class="product-bottom">

        <span class="product-price"> 
        ₹${Number(product.price).toLocaleString("en-IN")}
        </span>

        <button
        class="view-details-btn"
        data-product-id="${product.id}"
        >

        View Details
        </button>

        <button
        class="add-to-cart-btn"
        type="button"
        data-product-id="${Number(product.id)}"
        
        title="Cart funntionality coming on Day 6"
        >
        Add to cart
        </button>
        </div>
        </div>
        </article>
        `
    })

    productGrid.innerHTML = productsHTML



}

renderProducts(products)



// Search Function

function SearchProduct() {

    //step 1 : get search input
    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()


    // step 2 : filter matching products

    const filteredProducts = products.filter(product => {
        return product.name
               .toLowerCase()
               .includes(searchTerm)
    })

    // step 3 : Render Matching products

    renderProducts(filteredProducts)

// step 4 : show result in console  

console.log("Search term :",searchTerm)
console.log("matching Products :",filteredProducts.length)

}


// search button click

searchBtn.addEventListener("click",SearchProduct)

// search while typing

searchInput.addEventListener("input" , SearchProduct)

searchInput.addEventListener("keydown" , function(event) {
    if(event.key === "Enter") {
        SearchProduct()

    }
})




// Apply Filters

let selectedCategory = "all"


function applyFilters() {

    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()


    // search filter
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    )

    // category filter

    if(selectedCategory !== "all") {

        filteredProducts = filteredProducts.filter(product => {
            return product.category === selectedCategory
        })

    }

    // sorting

    const sortValue = sortSelect.value

    if(sortValue === "price-low") {
        filteredProducts.sort((a,b) => a.price - b.price)

    } else if (sortValue === "price-high") {
        filteredProducts.sort((a,b) => b.price - a.price)
    } else if (sortValue === "rating") {
        filteredProducts.sort((a,b) => b.rating - a.rating)
    }



    // update webpage
    renderProducts(filteredProducts)

    // console output

    console.log("Category :" , selectedCategory)
    console.log("Search :" , searchTerm)
    console.log("Sort ",sortValue)
    console.log("Matchig Products ",filteredProducts.length)

}

// search while typing
searchInput.addEventListener("input",applyFilters)

// search button click
searchBtn.addEventListener("click",applyFilters)

// press enter
searchInput.addEventListener("keydown" , function(event) {
    if(event.key === "Enter") {
        applyFilters()
    }
})


// category button

categoryFilters.addEventListener("click",function(event) {
    const button = event.target.closest("button[data-category]")

    if (!button) return
    selectedCategory = button.dataset.category

    applyFilters()
})

sortSelect.addEventListener("change" , applyFilters)







// Producat modal kaa function

function openProductModal(productId) {

    const product = products.find(item => {
        return String(item.id) === (productId)
    })

    if(!product) {
        console.log("Product Not found ",productId)
        return
    }


    productDetails.innerHTML = `

    <img
        class="modal-product-image"
        src="${escapeHTML(product.image)}"
        alt="${product.name}"
    >

    <h2 class="modal-product-name">
        ${escapeHTML(product.name)}
    </h2>

    <p> 
    Category: ${escapeHTML(product.category)}
    </p>
    <p> 
    Rating: ${escapeHTML(product.rating)}
    </p>
    <p class="modal-product-price"> 
        ₹${Number(product.price).toLocaleString("en-IN")}
    </p>

    <p class="modal-product-description"> 
        ${escapeHTML(
            product.name || 
            "Discover product at EcomStore"
        )}
    </p>

   `
   productModal.classList.remove("hidden")
   console.log("selected product :",product)

}

// handle clicks for view details  button

productGrid.addEventListener("click" , function(event) {
    const button = event.target.closest(".view-details-btn")
    if(!button) return

    const productId = button.dataset.productId
    openProductModal(productId)
})


// close modal using X button
closeModal.addEventListener("click" , function() {
    productModal.classList.add("hidden")
})

// close modal when clicking outside the content 

productModal.addEventListener("click" , function(event) {
    if(event.target === productModal) {
        productModal.classList.add("hidden")
    }
})

// close modal with escape key

document.addEventListener("keydown", function(event) {
    if(event.key === "Escape") {
        productModal.classList.add("hidden")
    }
})







//Shopping Cart Functionality Javascript

// const cartButton = document.getElementById("cartButton")

const cartModal = document.getElementById("cartModal")
const closeCart = document.getElementById("closeCart")
const cartItemsContainer = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const clearCartButton = document.getElementById("clearCart")
const checkoutModal = document.getElementById("checkoutModal")
const checkoutButton = document.getElementById("checkoutButton")
const closeCheckout = document.getElementById("closeCheckout")
const checkoutForm = document.getElementById("checkoutForm")
const checkoutItems = document.getElementById("checkoutItems")
const checkoutTotal = document.getElementById("checkoutTotal")
const successModal = document.getElementById("successModal")
const successMessage = document.getElementById("successMessage")
const continueShopping = document.getElementById("continueShopping")

// cart data


// Add product to cart

function addTocart(productId) {
    const product = products.find(item => {
        return String(item.id) === String(productId)
    })

    if(!product) return

    const existingItem = cart.find(item => {
        return String(item.id) === String(productId)
    })

    if(existingItem) {
        existingItem.quantity++
    } else {
        cart.push({
            ...product,
            quantity: 1
        })
    }

    updateCart()
}

// update cart


function updateCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
    } catch (error) {
        console.warn("Could not save cart:", error)
    }
    const totaItems = cart.reduce(
        (total,item) => total + item.quantity,
        0
    )

    cartCount.textContent = totaItems

    cartItemsContainer.innerHTML = ""

    if(cart.length === 0) {
        cartItemsContainer.textContent = "Your Cart Is Empty. "
    }

    let totalPrice = 0

    cart.forEach(item => {
        totalPrice += item.price * item.quantity

        const cartItem = document.createElement("div")
        cartItem.className = "cart-item"

        const name = document.createElement("h4")
        name.textContent = item.name

        const price = document.createElement("p")
        price.textContent = 
        `₹${item.price.toLocaleString("en-IN")} * ${item.quantity}`


        const decreaseButton = document.createElement("button")
        decreaseButton.textContent = "-"
        decreaseButton.dataset.action = "decrease"
        decreaseButton.dataset.productId = item.id

        const quantity = document.createElement("span")
        quantity.textContent = `${item.quantity}`


        const increaseButton = document.createElement("button")
        increaseButton.textContent = "+"
        increaseButton.dataset.action = "increase"
        increaseButton.dataset.productId = item.id

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"
        removeButton.dataset.action = "remove"
        removeButton.dataset.productId = item.id

        cartItem.append(
            name,
            price,
            decreaseButton,
            quantity,
            increaseButton,
            removeButton
        )

        cartItemsContainer.appendChild(cartItem)
    })
    cartTotal.textContent = 
    `Total: ₹${totalPrice.toLocaleString("en-IN")}`
}
// Listen for add to cart

productGrid.addEventListener("click" , function(event) {
    const button = event.target.closest(".add-to-cart-btn")
    if(!button) return
    addTocart(button.dataset.productId)
})

// Open Cart
cartButton.addEventListener("click" , function() {
    cartModal.classList.remove("hidden")
    updateCart()
})

// close cart

closeCart.addEventListener("click" , function() {
    cartModal.classList.add("hidden")
})


// increase , decrease or rmeove products

cartItemsContainer.addEventListener("click" , function(event) {
    const button = event.target.closest("button[data-action]")

    if (!button) return

    const productId = button.dataset.productId
    const action = button.dataset.action


    const itemIndex = cart.findIndex(item => 
        String(item.id) === String(productId)
    )

    if(itemIndex === -1) return

    if(action === "increase") {
        cart[itemIndex].quantity++
    }

    if(action === "decrease") {
        cart[itemIndex].quantity--

        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex,1)
        }
    }

    if(action === "remove") {
        cart.splice(itemIndex,1)
    }

    updateCart()
})





// clear complete cart

clearCartButton.addEventListener("click" , function() {
    cart.length = 0
    updateCart()
})

function formatPrice(amount) {
    return `₹${Number(amount).toLocaleString("en-IN")}`
}

function openCheckout() {
    if (cart.length === 0) {
        alert("Add an item to your cart before checking out.")
        return
    }
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${escapeHTML(item.name)} <small>× ${Number(item.quantity)}</small></span>
            <strong>${formatPrice(Number(item.price) * Number(item.quantity))}</strong>
        </div>
    `).join("")
    checkoutTotal.textContent = formatPrice(cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0))
    cartModal.classList.add("hidden")
    checkoutModal.classList.remove("hidden")
    checkoutModal.setAttribute("aria-hidden", "false")
    checkoutModal.querySelector("input")?.focus()
}

checkoutButton.addEventListener("click", openCheckout)
closeCheckout.addEventListener("click", () => {
    checkoutModal.classList.add("hidden")
    checkoutModal.setAttribute("aria-hidden", "true")
})
checkoutModal.addEventListener("click", event => {
    if (event.target === checkoutModal) closeCheckout.click()
})

checkoutForm.addEventListener("submit", event => {
    event.preventDefault()
    if (!checkoutForm.reportValidity() || cart.length === 0) return
    const orderId = `EC-${Date.now().toString().slice(-8)}`
    const customerName = checkoutForm.elements.name.value.trim()
    successMessage.textContent = `Order ${orderId} is confirmed for ${customerName}. This was a demo payment; no charge was made.`
    checkoutForm.reset()
    cart.length = 0
    updateCart()
    checkoutModal.classList.add("hidden")
    checkoutModal.setAttribute("aria-hidden", "true")
    successModal.classList.remove("hidden")
    successModal.setAttribute("aria-hidden", "false")
    continueShopping.focus()
})

continueShopping.addEventListener("click", () => {
    successModal.classList.add("hidden")
    successModal.setAttribute("aria-hidden", "true")
})
successModal.addEventListener("click", event => {
    if (event.target === successModal) continueShopping.click()
})
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        checkoutModal.classList.add("hidden")
        checkoutModal.setAttribute("aria-hidden", "true")
        successModal.classList.add("hidden")
        successModal.setAttribute("aria-hidden", "true")
    }
})

// initial cart display

updateCart()