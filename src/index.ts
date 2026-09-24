import HomePage from "./pages/homePage"
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

    return {loadPage}
})()

pages.loadPage(HomePage())