import menu1 from "../assets/menu1.png"
import menu2 from "../assets/menu2.png"
import menu3 from "../assets/menu3.png"
import menu4 from "../assets/menu4.png"

const MenuPage = () => {
  const menuContainer = document.createElement("div") as HTMLDivElement;
  menuContainer.classList.add("menu-container");

  menuContainer.innerHTML = `
       <div class="cards">
            <div class="card">
                <div class="img">
                    <img src=${menu1} class="img-card-menu"/>
                </div>
                <div class="details">
                    <p>Firecracker Chicken</p>
                    <p class="price">$ 99.00</p>
                    <button class="btn-menu-card">More</button>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src=${menu2} class="img-card-menu"/>
                </div>
                <div class="details">
                    <p>Firecracker Chicken</p>
                    <p class="price">$ 99.00</p>
                    <button class="btn-menu-card">More</button>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src=${menu3} class="img-card-menu"/>
                </div>
                <div class="details">
                    <p class="price">Firecracker Chicken</p>
                    <p>$ 99.00</p>
                    <button class="btn-menu-card">More</button>
                </div>
            </div>
            <div class="card">
                <div class="img">
                    <img src=${menu4} class="img-card-menu"/>
                </div>
                <div class="details">
                    <p>Firecracker Chicken</p>
                    <p class="price">$ 99.00</p>
                    <button class="btn-menu-card">More</button>
                </div>
            </div>
       </div>
    `;

  return menuContainer;
};

export default MenuPage;
