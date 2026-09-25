import burgerHome from "../assets/burger.png"

const HomePage = () => {
    const homeContainer = document.createElement("div") as HTMLDivElement
    homeContainer.classList.add("home-container")

    homeContainer.innerHTML = `
        <div class="home-content">
            <div class="top">
                <h1>Sunrise Burger</h1>
                <h3>Beef or chicken patty topped with a fried egg, crispy bacon, hash brown, and creamy cheese sauce.</h3>
                <p>Breakfast meets burger – all day long.</p>
            </div>
            <div class="bottom">
                <button class="view-menu">View Menu</button>
                <button class="order-now">Order Now</button>
            </div>
        </div>
        <div class="home-image">
            <img src=${burgerHome} alt="Burger" />
        </div>
    `
    
    return homeContainer
}
export default HomePage