import bgAboutImg from "../assets/bgAbout.png";

const AboutPage = () => {
    const aboutContainer = document.createElement("div")
    aboutContainer.classList.add("about-container")

    aboutContainer.innerHTML = `
        <div class="left-about">
            <div class="row">
                <div class="icon">
                    <i class="fa-solid fa-phone phone"></i>
                </div>
                <div class="info">                
                    <h3>Call Us</h3>
                    <p>+1 (123) 456-7890</p>
                    <p>Available: Mon–Sun | 10:00 AM – 10:00 PM</p>
                </div>
            </div>
            <div class="row">
                <div class="icon">
                    <i class="fa-solid fa-location-dot location"></i>
                </div>
                <div class="info">                
                    <h3>Visit Us</h3>
                    <p>BurgerHub</p>
                    <p>123 Flavor Street,Burger City, BC 45678</p>
                </div>
            </div>
            <div class="row">
                <div class="icon">
                    <i class="fa-solid fa-envelope emailus"></i>
                </div>
                <div class="info">
                    <h3>Email Us</h3>
                    <p>hello@burgerhub.com</p>
                    <p>We usually respond within 24 hours</p>
                </div>
            </div>
        </div>
        <div class="right-about">
            <img src=${bgAboutImg} />
        </div>
    `

    return aboutContainer
}

export default AboutPage