const MenuPage = () => {
    const menuContainer = document.createElement("div") as HTMLDivElement
    menuContainer.classList.add("menu-container")

    menuContainer.innerHTML = `
        <h1>Menu</h1>
    `

    return menuContainer
}

export default MenuPage