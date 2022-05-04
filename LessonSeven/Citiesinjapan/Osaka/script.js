
import Osaka from "./Osaka.js";

const markup = (Osaka) => {
    return `
    <div class="container" id="Osaka">
    <div class="row">
    <div class="col-lg">
        <h3>${Osaka.city}</h3>
        <p> ${Osaka.city} is located in  ${Osaka.province} prefecture in ${Osaka.country}.
        The women are ${Osaka.statusOfWomen}. The climate is ${Osaka.climate} and the cusine is
        ${Osaka.cuisine}. It's ${Osaka.haveSubway} that ${Osaka.city} has a subway system.</p>
        <p id="links"></p>
        </div>     
    <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-4">
        ${Osaka.imageLeft}
        </div>
        <div class="col-lg-4">
        ${Osaka.imageCenter}
        </div>
        <div class="col-lg-4">
        ${Osaka.imageRight}
        </div>
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Osaka);
document.body.appendChild(main);