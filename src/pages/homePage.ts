const HomePage = () => {
    const homeContainer = document.createElement("div") as HTMLDivElement
    homeContainer.classList.add("home-container")

    const heading = document.createElement("h1") as HTMLHeadingElement
    heading.textContent = "Hello in Restaurant"

    homeContainer.appendChild(heading)
    
    return homeContainer
}
export default HomePage