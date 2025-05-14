import catImage from "./assets/img/ramen_bowl_cat.png"

export const firstPage = function () {
    const content = document.querySelector("#content");

    const firstBackground = document.createElement("div");
    firstBackground.classList.add("background");
    content.appendChild(firstBackground);

    const h1 = document.createElement("h1");
    h1.textContent = "Pixel Ramen";
    firstBackground.appendChild(h1);

    const catImg = document.createElement("img");
    catImg.src = catImage;
    catImg.alt = "ramen pixel image";
    firstBackground.appendChild(catImg);

    const heroParagraph = document.createElement("p");
    heroParagraph.textContent = "Welcome to Ramen.exe — a cozy little glitch in the system where tradition meets a mild identity crisis. Our broth doesn't scream for attention, it just quietly ruins you for all future meals. The noodles are handcrafted by someone who's definitely processing something, and the spice levels are calibrated to match your current level of emotional repression. No avocado, no rainbow rolls, no neon fusion nightmares — just ramen the way it was meant to be: slightly obsessive, quietly perfect, and best enjoyed while questioning all your life choices.";
    firstBackground.appendChild(heroParagraph);

    const secondBackground = document.createElement("div");
    secondBackground.classList.add("background");
    content.appendChild(secondBackground);

    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";
    secondBackground.appendChild(hoursHeader);

    const hours = ["Monday: closed", "Tuesday: closed", "Wednesday: 12:00 - 15:00", "Thursday: 12:00 - 15:00", "Friday: 12:00 - 15:00", "Saturday: 12:00 - 22:00", "Sunday: 12:00 - 22:00"]

    for (let i = 0; i < 7; i++) {
        const p = document.createElement("p");
        p.classList.add("hours");
        p.textContent = hours[i];
        secondBackground.appendChild(p);
    }

    const thirdBackground = document.createElement("div");
    thirdBackground.classList.add("background");
    content.appendChild(thirdBackground);

    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    thirdBackground.appendChild(locationHeader);

    const locationPara = document.createElement("p");
    locationPara.classList.add("location");
    locationPara.textContent = "404 Noodle Street, Lost in Translation District, Neo-Tokyo"
    thirdBackground.appendChild(locationPara);
}