
import Jeddah from "./Jeddah.js";

const markup = (Jeddah) => {
    return `
    <div class="container" id="jeddah">
    <div class="row">
    <div class="col-lg">
        <h3>${Jeddah.city}</h3>
        <p> ${Jeddah.city} is located in the ${Jeddah.region} region of the  ${Jeddah.country}.
        The women are ${Jeddah.statusOfWomen}. The climate is ${Jeddah.climate} and the cusine is
        ${Jeddah.cuisine}. It's ${Jeddah.haveSubway} that ${Jeddah.city} has a subway system.</p>
        </div>    
        <hr class="tsLine">
        </div>
            <div class="row">
            <div class="col-lg-4">
            ${Jeddah.imageLeft}
            </div>
            <div class="col-lg-4">
            ${Jeddah.imageCenter}
            </div>  <div class="col-lg-4">
            ${Jeddah.imageRight}
            </div>
        </div>
        </div>    `
}

const main = document.createElement("main");
main.innerHTML = markup(Jeddah);
document.body.appendChild(main);