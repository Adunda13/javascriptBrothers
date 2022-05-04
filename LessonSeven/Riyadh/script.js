
import Riyadh from "./Riyadh.js";

const markup = (Riyadh) => {
    return `
    <div class="container" id="nyc">
    <div class="row">
    <div class="col-lg">
        <h3>${Riyadh.city}</h3>
        <p> ${Riyadh.city} is located in the ${Riyadh.region} region of ${Riyadh.country}.
        The women are ${Riyadh.statusOfWomen}. The climate is ${Riyadh.climate} and the cusine is
        ${Riyadh.cuisine}. It's ${Riyadh.haveSubway} that ${Riyadh.city} has a subway system.</p>
        <p id="links"></p>
        </div>    <hr class="tsLine">
        </div>
            <div class="row">
            <div class="col-lg-4">
            ${Riyadh.imageLeft}
            </div>
            <div class="col-lg-4">
            ${Riyadh.imageCenter}
            </div>  
            <div class="col-lg-4">
            ${Riyadh.imageRight}
            </div>
        </div>
        </div>    `
}

const main = document.createElement("main");
main.innerHTML = markup(Riyadh);
document.body.appendChild(main);