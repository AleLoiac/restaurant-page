import "./styles.css";
import { firstPage } from "./firstLoad";

const content = document.querySelector("#content");
const btnHome = document.querySelector(".btn-home");
const btnMenu = document.querySelector(".btn-menu");
const btnAbout = document.querySelector(".btn-about");

firstPage();

btnHome.addEventListener("click", () => {
    content.innerHTML = "";
    firstPage();
});

btnMenu.addEventListener("click", () => {
    content.innerHTML = "";
});

btnAbout.addEventListener("click", () => {
    content.innerHTML = "";
});