
import Seoul from "./Seoul.js";

const markup = (Seoul) => {
    return `
    <div class="container" id="seoul">
    <div class="row">
    <div class="col-lg">
        <h3>${Seoul.city}</h3>
        <p> ${Seoul.city} is a  ${Seoul.province} of ${Seoul.country}.
        The women are ${Seoul.statusOfWomen}. The climate is ${Seoul.climate} and the cusine is
        ${Seoul.cuisine}. It is ${Seoul.haveSubway} that ${Seoul.city} has a subway system.</p>
        <p id="links"></p>
        </div> <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-6">
        ${Seoul.imageLeft}
        </div>
        <div class="col-lg-6">
        ${Seoul.imageRight}
        </div>
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Seoul);
document.body.appendChild(main);