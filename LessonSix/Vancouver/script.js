
import Vancouver from "./Vancouver.js";

const markup = (Vancouver) => {
    return `
    <div class="container" id="vancouver">
    <div class="row">
    <div class="col-lg">
        <h3>${Vancouver.city}</h3>
        <p> ${Vancouver.city} is located in ${Vancouver.province} in ${Vancouver.country}.
        The women are ${Vancouver.statusOfWomen}. The climate is ${Vancouver.climate} and the cusine is
        ${Vancouver.cuisine}. It's ${Vancouver.haveSubway} that ${Vancouver.city} has a subway system.</p>
    </div> <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-6">
        ${Vancouver.imageLeft}
        </div>
        <div class="col-lg-6">
        ${Vancouver.imageRight}
        </div>
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Vancouver);
document.body.appendChild(main);