import AboutPage from "./pages/aboutPage"
import HomePage from "./pages/homePage"
import MenuPage from "./pages/menuPage"
import "./style.css"


const pages = (() => {
    const loadPage = (pageContent: HTMLElement) => {
        const contentDiv = document.querySelector(".content")
        if(contentDiv){
            contentDiv.innerHTML = ""
            contentDiv.appendChild(pageContent)
        }
    }

    const navHomeButton = document.querySelector(".nav-home") as HTMLButtonElement
    const navMenuButton = document.querySelector(".nav-menu") as HTMLButtonElement
    const navAboutButton = document.querySelector(".nav-about") as HTMLButtonElement
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const currentActive = document.querySelector(".btn.active")
            if(currentActive){
                currentActive.classList.remove("active")
            }
            button.classList.add("active")
        })
    })


    navHomeButton.addEventListener("click", () => {
        loadPage(HomePage())
    })

    navMenuButton.addEventListener("click", () => {
        loadPage(MenuPage())
    })

    navAboutButton.addEventListener("click", () => {
        loadPage(AboutPage())
    })

    return {loadPage}
})()

pages.loadPage(HomePage())