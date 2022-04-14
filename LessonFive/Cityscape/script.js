
import Cityscape from "./Cityscape.js";

const markup = (Cityscape) => {
    return `
    <div class="container" id="cityscape">
    <h1>${Cityscape.welcome}</h1>
    <p>${Cityscape.info}</p>
    <p id="links"></p>

    ${Cityscape.image}

  </div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Cityscape);
document.body.appendChild(main);