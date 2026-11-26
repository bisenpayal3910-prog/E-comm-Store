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

    const sidebarShowingCount = document.getElementById("sidebarShowingCount")
    if (sidebarShowingCount) {
        sidebarShowingCount.textContent = String(productList.length)
    }

}

renderProducts(products)



// Apply Filters

let selectedCategory = "all"

function updateCategoryUI(category) {
    document.querySelectorAll("#categoryFilters .category-button").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category)
    })
    document.querySelectorAll("[data-sidebar-category]").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.sidebarCategory === category)
    })
}

function setCategory(category) {
    selectedCategory = category
    updateCategoryUI(category)
    applyFilters()
}


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
    setCategory(button.dataset.category)
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

    const sidebarCartBadge = document.getElementById("sidebarCartBadge")
    if (sidebarCartBadge) sidebarCartBadge.textContent = totaItems

    const profileCartCount = document.getElementById("profileCartCount")
    if (profileCartCount) profileCartCount.textContent = totaItems

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
        closeProfileModal()
        closeSidebarDrawer()
    }
})

// =================================
// SIDEBAR & FOOTER NAVIGATION
// =================================

const sidebar = document.getElementById("sidebar")
const sidebarToggle = document.getElementById("sidebarToggle")
const closeSidebar = document.getElementById("closeSidebar")
const sidebarBackdrop = document.getElementById("sidebarBackdrop")
const sidebarTopRatedBtn = document.getElementById("sidebarTopRatedBtn")
const sidebarCartBtn = document.getElementById("sidebarCartBtn")
const sidebarTotalCount = document.getElementById("sidebarTotalCount")
const footerOpenCart = document.getElementById("footerOpenCart")

if (sidebarTotalCount) {
    sidebarTotalCount.textContent = String(products.length)
}

function openSidebarDrawer() {
    sidebar.classList.add("open")
    sidebarBackdrop.classList.remove("hidden")
    sidebarToggle.setAttribute("aria-expanded", "true")
}

function closeSidebarDrawer() {
    sidebar.classList.remove("open")
    sidebarBackdrop.classList.add("hidden")
    sidebarToggle.setAttribute("aria-expanded", "false")
}

sidebarToggle.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) {
        closeSidebarDrawer()
    } else {
        openSidebarDrawer()
    }
})

closeSidebar.addEventListener("click", closeSidebarDrawer)
sidebarBackdrop.addEventListener("click", closeSidebarDrawer)

document.querySelectorAll("[data-sidebar-category]").forEach(button => {
    button.addEventListener("click", () => {
        setCategory(button.dataset.sidebarCategory)
        closeSidebarDrawer()
        document.getElementById("productSection")?.scrollIntoView({ behavior: "smooth" })
    })
})

sidebarTopRatedBtn.addEventListener("click", () => {
    sortSelect.value = "rating"
    setCategory("all")
    closeSidebarDrawer()
    document.getElementById("productSection")?.scrollIntoView({ behavior: "smooth" })
})

sidebarCartBtn.addEventListener("click", () => {
    closeSidebarDrawer()
    cartModal.classList.remove("hidden")
    updateCart()
})

document.querySelectorAll(".sidebar-anchor-link").forEach(link => {
    link.addEventListener("click", closeSidebarDrawer)
})

footerOpenCart.addEventListener("click", () => {
    cartModal.classList.remove("hidden")
    updateCart()
})

document.querySelectorAll("[data-footer-category]").forEach(button => {
    button.addEventListener("click", () => {
        setCategory(button.dataset.footerCategory)
        document.getElementById("productSection")?.scrollIntoView({ behavior: "smooth" })
    })
})

// =================================
// ACCOUNT AUTH (LOGIN / SIGNUP) & PROFILE
// =================================

const AUTH_STORAGE_KEY = "ecomStoreAuthAccount"
const USERS_STORAGE_KEY = "ecomStoreUsers"

try {
    localStorage.removeItem("ecomStoreAdminProfile")
} catch (error) {
    console.warn("Storage cleanup skipped:", error)
}

function loadRegisteredUsers() {
    try {
        const list = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]")
        return Array.isArray(list) ? list.filter(u => u && u.email && u.password) : []
    } catch (error) {
        console.warn("Could not load users:", error)
        return []
    }
}

function saveRegisteredUsers(users) {
    try {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
    } catch (error) {
        console.warn("Could not save users:", error)
    }
}

function loadCurrentAccount() {
    try {
        const saved = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "null")
        if (saved && typeof saved === "object" && saved.name && saved.email) {
            return {
                memberId: String(saved.memberId || "#MBR-101"),
                name: String(saved.name),
                email: String(saved.email),
                phone: String(saved.phone || ""),
                location: String(saved.location || "")
            }
        }
    } catch (error) {
        console.warn("Could not load account:", error)
    }
    return null
}

let currentAccount = loadCurrentAccount()
let activeAuthTab = "login"

const profileModal = document.getElementById("profileModal")
const closeProfile = document.getElementById("closeProfile")
const authSection = document.getElementById("authSection")
const profileSection = document.getElementById("profileSection")
const authSubtitle = document.getElementById("authSubtitle")
const authOrProfileTitle = document.getElementById("authOrProfileTitle")

const loginForm = document.getElementById("loginForm")
const signupForm = document.getElementById("signupForm")
const loginError = document.getElementById("loginError")
const signupError = document.getElementById("signupError")

const headerAuthButtons = document.getElementById("headerAuthButtons")
const headerLoginBtn = document.getElementById("headerLoginBtn")
const headerSignupBtn = document.getElementById("headerSignupBtn")
const profileButton = document.getElementById("profileButton")

const sidebarAuthActions = document.getElementById("sidebarAuthActions")
const sidebarLoginBtn = document.getElementById("sidebarLoginBtn")
const sidebarSignupBtn = document.getElementById("sidebarSignupBtn")
const sidebarProfileBtn = document.getElementById("sidebarProfileBtn")

const footerOpenLogin = document.getElementById("footerOpenLogin")
const footerOpenSignup = document.getElementById("footerOpenSignup")
const footerOpenProfile = document.getElementById("footerOpenProfile")

const editProfileBtn = document.getElementById("editProfileBtn")
const cancelEditProfile = document.getElementById("cancelEditProfile")
const logoutBtn = document.getElementById("logoutBtn")
const profileDetailsView = document.getElementById("profileDetailsView")
const profileViewActions = document.getElementById("profileViewActions")
const profileEditForm = document.getElementById("profileEditForm")

function getInitials(name) {
    const parts = String(name || "M").trim().split(/\s+/).filter(Boolean)
    if (parts.length === 0) return "MB"
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function saveCurrentAccount() {
    try {
        if (currentAccount) {
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentAccount))
        } else {
            localStorage.removeItem(AUTH_STORAGE_KEY)
        }
    } catch (error) {
        console.warn("Could not save account state:", error)
    }
}

function clearAuthErrors() {
    loginError.textContent = ""
    loginError.classList.add("hidden")
    signupError.textContent = ""
    signupError.classList.add("hidden")
}

function showAuthError(el, message) {
    el.textContent = message
    el.classList.remove("hidden")
}

function setAuthTab(tab) {
    activeAuthTab = tab === "signup" ? "signup" : "login"
    clearAuthErrors()

    document.querySelectorAll("[data-auth-tab]").forEach(btn => {
        const isActive = btn.dataset.authTab === activeAuthTab
        btn.classList.toggle("active", isActive)
        btn.setAttribute("aria-selected", String(isActive))
    })

    const isSignup = activeAuthTab === "signup"
    loginForm.classList.toggle("hidden", isSignup)
    signupForm.classList.toggle("hidden", !isSignup)

    authOrProfileTitle.textContent = isSignup ? "Create your account" : "Welcome back"
    authSubtitle.textContent = isSignup
        ? "Sign up to save your profile details and manage your shopping experience."
        : "Login with your email and password to view your profile details."
}

function renderAccountUI() {
    const footerStatus = document.getElementById("footerAccountStatus")
    const isLoggedIn = Boolean(currentAccount)

    headerAuthButtons.classList.toggle("hidden", isLoggedIn)
    profileButton.classList.toggle("hidden", !isLoggedIn)

    sidebarAuthActions.classList.toggle("hidden", isLoggedIn)
    sidebarProfileBtn.classList.toggle("hidden", !isLoggedIn)

    footerOpenLogin.classList.toggle("hidden", isLoggedIn)
    footerOpenSignup.classList.toggle("hidden", isLoggedIn)
    footerOpenProfile.classList.toggle("hidden", !isLoggedIn)

    if (!isLoggedIn) {
        document.getElementById("sidebarAvatar").textContent = "👤"
        document.getElementById("sidebarProfileName").textContent = "Guest Visitor"
        document.getElementById("sidebarProfileRole").textContent = "Not signed in"
        document.getElementById("sidebarProfileEmail").textContent = "Login or sign up to view your profile details."

        footerStatus.textContent = "Guest Session · "
        const guestStrong = document.createElement("strong")
        guestStrong.id = "footerAdminName"
        guestStrong.textContent = "Login or Sign Up to continue"
        footerStatus.appendChild(guestStrong)

        document.getElementById("footerAdminEmail").textContent = "support@ecomstore.in"
        document.getElementById("footerAdminPhone").textContent = "+91 98765 43210"
        document.getElementById("footerAdminLocation").textContent = "Indore, Madhya Pradesh"
        return
    }

    const initials = getInitials(currentAccount.name)
    const firstName = currentAccount.name.trim().split(/\s+/)[0] || "Account"

    document.getElementById("headerProfileAvatar").textContent = initials
    document.getElementById("headerProfileName").textContent = firstName

    document.getElementById("sidebarAvatar").textContent = initials
    document.getElementById("sidebarProfileName").textContent = currentAccount.name
    document.getElementById("sidebarProfileRole").textContent = `Member · ${currentAccount.memberId}`
    document.getElementById("sidebarProfileEmail").textContent = currentAccount.email

    document.getElementById("profileAvatar").textContent = initials
    document.getElementById("profileRoleBadge").textContent = "Verified Member"
    document.getElementById("profileTitle").textContent = currentAccount.name
    document.getElementById("profileLocationText").textContent = `${currentAccount.location} · ID: ${currentAccount.memberId}`
    document.getElementById("profileTotalProducts").textContent = String(products.length)

    document.getElementById("detailName").textContent = currentAccount.name
    document.getElementById("detailMemberId").textContent = currentAccount.memberId
    document.getElementById("detailEmail").textContent = currentAccount.email
    document.getElementById("detailPhone").textContent = currentAccount.phone
    document.getElementById("detailLocation").textContent = currentAccount.location

    footerStatus.textContent = "Signed in as "
    const accountStrong = document.createElement("strong")
    accountStrong.id = "footerAdminName"
    accountStrong.textContent = currentAccount.name
    footerStatus.appendChild(accountStrong)
    footerStatus.append(` · ${currentAccount.memberId}`)

    document.getElementById("footerAdminEmail").textContent = currentAccount.email
    document.getElementById("footerAdminPhone").textContent = currentAccount.phone
    document.getElementById("footerAdminLocation").textContent = currentAccount.location
}

function showProfileEditMode(isEditing) {
    profileDetailsView.classList.toggle("hidden", isEditing)
    profileViewActions.classList.toggle("hidden", isEditing)
    profileEditForm.classList.toggle("hidden", !isEditing)

    if (isEditing && currentAccount) {
        document.getElementById("editProfileName").value = currentAccount.name
        document.getElementById("editProfileEmail").value = currentAccount.email
        document.getElementById("editProfilePhone").value = currentAccount.phone
        document.getElementById("editProfileLocation").value = currentAccount.location
        document.getElementById("editProfileName").focus()
    }
}

function syncModalView(preferredTab = "login") {
    const isLoggedIn = Boolean(currentAccount)
    authSection.classList.toggle("hidden", isLoggedIn)
    profileSection.classList.toggle("hidden", !isLoggedIn)

    if (isLoggedIn) {
        showProfileEditMode(false)
    } else {
        setAuthTab(preferredTab)
    }
}

function openAuthOrProfileModal(preferredTab = "login") {
    closeSidebarDrawer()
    renderAccountUI()
    syncModalView(preferredTab)
    profileModal.classList.remove("hidden")
    profileModal.setAttribute("aria-hidden", "false")

    if (!currentAccount) {
        const focusId = activeAuthTab === "signup" ? "signupName" : "loginEmail"
        document.getElementById(focusId)?.focus()
    }
}

function closeProfileModal() {
    profileModal.classList.add("hidden")
    profileModal.setAttribute("aria-hidden", "true")
    showProfileEditMode(false)
    clearAuthErrors()
}

document.querySelectorAll("[data-auth-tab]").forEach(btn => {
    btn.addEventListener("click", () => setAuthTab(btn.dataset.authTab))
})

headerLoginBtn.addEventListener("click", () => openAuthOrProfileModal("login"))
headerSignupBtn.addEventListener("click", () => openAuthOrProfileModal("signup"))
sidebarLoginBtn.addEventListener("click", () => openAuthOrProfileModal("login"))
sidebarSignupBtn.addEventListener("click", () => openAuthOrProfileModal("signup"))
footerOpenLogin.addEventListener("click", () => openAuthOrProfileModal("login"))
footerOpenSignup.addEventListener("click", () => openAuthOrProfileModal("signup"))

profileButton.addEventListener("click", () => openAuthOrProfileModal())
sidebarProfileBtn.addEventListener("click", () => openAuthOrProfileModal())
footerOpenProfile.addEventListener("click", () => openAuthOrProfileModal())
closeProfile.addEventListener("click", closeProfileModal)

profileModal.addEventListener("click", event => {
    if (event.target === profileModal) closeProfileModal()
})

signupForm.addEventListener("submit", event => {
    event.preventDefault()
    clearAuthErrors()
    if (!signupForm.reportValidity()) return

    const name = document.getElementById("signupName").value.trim()
    const email = document.getElementById("signupEmail").value.trim().toLowerCase()
    const phone = document.getElementById("signupPhone").value.trim()
    const location = document.getElementById("signupLocation").value.trim()
    const password = document.getElementById("signupPassword").value

    const users = loadRegisteredUsers()
    const alreadyExists = users.some(u => u.email.toLowerCase() === email)
    if (alreadyExists) {
        showAuthError(signupError, "An account with this email already exists. Please login instead.")
        return
    }

    const newUser = {
        memberId: `#MBR-${101 + users.length}`,
        name,
        email,
        phone,
        location,
        password
    }

    users.push(newUser)
    saveRegisteredUsers(users)

    currentAccount = {
        memberId: newUser.memberId,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        location: newUser.location
    }

    saveCurrentAccount()
    signupForm.reset()
    renderAccountUI()
    syncModalView()
    updateCart()
})

loginForm.addEventListener("submit", event => {
    event.preventDefault()
    clearAuthErrors()
    if (!loginForm.reportValidity()) return

    const email = document.getElementById("loginEmail").value.trim().toLowerCase()
    const password = document.getElementById("loginPassword").value

    const users = loadRegisteredUsers()
    const matched = users.find(u => u.email.toLowerCase() === email && u.password === password)

    if (!matched) {
        showAuthError(
            loginError,
            users.length === 0
                ? "No account found yet. Please click Sign Up to create your account first."
                : "Invalid email or password. Please check your credentials or Sign Up."
        )
        return
    }

    currentAccount = {
        memberId: matched.memberId || "#MBR-101",
        name: matched.name,
        email: matched.email,
        phone: matched.phone,
        location: matched.location
    }

    saveCurrentAccount()
    loginForm.reset()
    renderAccountUI()
    syncModalView()
    updateCart()
})

logoutBtn.addEventListener("click", () => {
    currentAccount = null
    saveCurrentAccount()
    loginForm.reset()
    signupForm.reset()
    renderAccountUI()
    syncModalView("login")
})

editProfileBtn.addEventListener("click", () => showProfileEditMode(true))
cancelEditProfile.addEventListener("click", () => showProfileEditMode(false))

profileEditForm.addEventListener("submit", event => {
    event.preventDefault()
    if (!profileEditForm.reportValidity() || !currentAccount) return

    const oldEmail = currentAccount.email.toLowerCase()
    const updated = {
        memberId: currentAccount.memberId,
        name: document.getElementById("editProfileName").value.trim() || currentAccount.name,
        email: document.getElementById("editProfileEmail").value.trim().toLowerCase() || currentAccount.email,
        phone: document.getElementById("editProfilePhone").value.trim() || currentAccount.phone,
        location: document.getElementById("editProfileLocation").value.trim() || currentAccount.location
    }

    const users = loadRegisteredUsers().map(u =>
        u.email.toLowerCase() === oldEmail ? { ...u, ...updated } : u
    )
    saveRegisteredUsers(users)

    currentAccount = updated
    saveCurrentAccount()
    renderAccountUI()
    showProfileEditMode(false)
})

// initial display

renderAccountUI()
updateCart()