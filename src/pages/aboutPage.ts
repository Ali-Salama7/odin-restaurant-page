const AboutPage = () => {
    const aboutContainer = document.createElement("div")
    aboutContainer.classList.add("about-container")

    aboutContainer.innerHTML = `
        <h1>About</h1>
    `

    return aboutContainer
}

export default AboutPage