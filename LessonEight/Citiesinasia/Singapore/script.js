
import Singapore from "./Singapore.js";

const markup = (Singapore) => {
    return `
    <div class="container" id="Singapore">
    <div class="row">
    <div class="col-lg">
        <h3>${Singapore.city}</h3>
        <p> ${Singapore.city} is a city in the  ${Singapore.region} region in the city state of  ${Singapore.country}.
        The women are ${Singapore.statusOfWomen}. The climate is ${Singapore.climate} and the cusine is
        ${Singapore.cuisine}. It is ${Singapore.haveSubway} that ${Singapore.city} has a subway system.</p>
        </div> <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-6">
        ${Singapore.imageLeft}
        </div>
        <div class="col-lg-6">
        ${Singapore.imageRight}
        </div>
      
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Singapore);
document.body.appendChild(main);