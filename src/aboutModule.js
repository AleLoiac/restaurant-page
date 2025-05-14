import shopImage from "./assets/img/ramen_pixel_shop.png"

export const aboutPage = function () {
    const content = document.querySelector("#content");

    const firstBackground = document.createElement("div");
    firstBackground.classList.add("background");
    content.appendChild(firstBackground);

    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "About Us";
    firstBackground.appendChild(aboutHeader);
    
    const shopImg = document.createElement("img");
    shopImg.classList.add("shop");
    shopImg.src = shopImage;
    shopImg.alt = "pixel ramen shop image";
    firstBackground.appendChild(shopImg);

    const aboutDescription = document.createElement("p");
    aboutDescription.textContent = "We’re not your grandmother’s ramen shop (unless she was borderline obsessive). Pixel Ramen was born from a love of Japanese tradition, a childhood spent in front of glowing screens, and a complete lack of chill when it comes to flavor. We serve handcrafted bowls in a space that feels like a glitch in the simulation. No gimmicks, no fusion disasters, just real ramen, real ingredients, and the occasional existential spiral. We believe food should hit you in the soul, not just the stomach. So come in, slurp loud, sit weird, and stay until you forget what year it is.";
    firstBackground.appendChild(aboutDescription);
}