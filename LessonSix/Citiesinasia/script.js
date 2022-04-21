
import CitiesInAsia from "./CitiesInAsia.js";



const markup = (CitiesInAsia) => {
    return `
    <div class="container" id="citiesInAsia">
    <h1>${CitiesInAsia.welcome}</h1>
    <p>${CitiesInAsia.info}</p>
    <p id="asianLinks"></p>

    ${CitiesInAsia.image}

  </div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(CitiesInAsia);
document.body.appendChild(main);