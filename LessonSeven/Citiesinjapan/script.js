
import CitiesInJapan from "./CitiesInJapan.js";



const markup = (CitiesInJapan) => {
    return `
    <div class="container" id="citiesInAsia">
    <h1>${CitiesInJapan.welcome}</h1>
    <p>${CitiesInJapan.info}</p>
    <p id="asianLinks"></p>

    ${CitiesInJapan.image}

  </div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(CitiesInJapan);
document.body.appendChild(main);