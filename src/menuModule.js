import frogRamenImage from "./assets/img/frog_ramen.png"
import frogCupImage from "./assets/img/frog_cup.png"
import dessertImage from "./assets/img/cake.png"

export const menuPage = function () {

    const content = document.querySelector("#content");

    const firstBackground = document.createElement("div");
    firstBackground.classList.add("background");
    content.appendChild(firstBackground);

    const ramenHeader = document.createElement("h1");
    ramenHeader.textContent = "Ramen";
    firstBackground.appendChild(ramenHeader);

    const frogImg = document.createElement("img");
    frogImg.src = frogRamenImage;
    frogImg.alt = "ramen frog pixel image";
    firstBackground.appendChild(frogImg);

    createEntry(firstBackground, "Pixel Ramen", "$ 10", "Our baseline bowl — deceptively simple, dangerously addictive. Clear shoyu broth, springy noodles, and toppings placed with surgical precision, like your favorite retro game running at 60fps. No cheats, no frills, just pure umami-level design.");
    createEntry(firstBackground, "Midnight Debug Ramen", "$ 12", "Broth darker than your browser history, slow-cooked for 12 hours with a whisper of miso and a hint of existential dread. Best enjoyed at 2 a.m. when you should be sleeping, or rethinking life choices.");
    createEntry(firstBackground, "Spicy Stack Overflow", "$ 9", "A dangerously layered bowl of chili-infused tonkotsu, soft-boiled egg, and crispy pork belly. It starts as a challenge and ends as a therapy session.");

    const secondBackground = document.createElement("div");
    secondBackground.classList.add("background");
    content.appendChild(secondBackground);

    const drinkHeader = document.createElement("h1");
    drinkHeader.textContent = "Drinks";
    secondBackground.appendChild(drinkHeader);

    const cupImg = document.createElement("img");
    cupImg.src = frogCupImage;
    cupImg.alt = "cup frog pixel image";
    secondBackground.appendChild(cupImg);

    createEntry(secondBackground, "Matcha OverloadMatcha Overload", "$ 6", "Cold-brewed matcha with oat milk and just enough caffeine to question your career path. Smooth, earthy, and a little judgmental — like your cooler coworker.");
    createEntry(secondBackground,"Tokyo Drift Cola", "$ 8", "House-fermented cola with spices, lime, and enough fizz to make your phone vibrate. Non-alcoholic, but still questionable after two.");
    createEntry(secondBackground,"Water", "$ 3", "Still mineral water, sad.")

    const thirdBackground = document.createElement("div");
    thirdBackground.classList.add("background");
    content.appendChild(thirdBackground);

    const dessertHeader = document.createElement("h1");
    dessertHeader.textContent = "Desserts";
    thirdBackground.appendChild(dessertHeader);

    const dessertImg = document.createElement("img");
    dessertImg.src = dessertImage;
    dessertImg.alt = "cake pixel image";
    thirdBackground.appendChild(dessertImg);

    createEntry(thirdBackground, "Mochi Update Required", "$ 7", "Trio of chewy mochi in rotating seasonal flavors. Soft, sticky, and guaranteed to crash your ability to stop at one.");
    createEntry(thirdBackground, "Glitch Pudding", "$ 6", "Miso caramel custard topped with a shattering sugar disk. Sweet, salty, and slightly out of sync — just like your dating history.");
}

const createEntry = (section, name, price, description) => {
        const entry = document.createElement("div");
        entry.classList.add("entry");
        section.appendChild(entry);
    
        const entryName = document.createElement("h3");
        entryName.textContent = name;
        entry.appendChild(entryName);

        const entryPrice = document.createElement("h3");
        entryPrice.textContent = price;
        entry.appendChild(entryPrice);

        const entryDescription = document.createElement("p");
        entryDescription.textContent = description;
        entryDescription.classList.add("entry-description");
        section.appendChild(entryDescription);
    }