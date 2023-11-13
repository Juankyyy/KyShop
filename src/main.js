const btnCart = document.querySelector(".navbar-cart-icon")
const contentCart = document.querySelector(".cart-content")


btnCart.addEventListener("click", () => {
    contentCart.classList.toggle("hidden-cart")
})