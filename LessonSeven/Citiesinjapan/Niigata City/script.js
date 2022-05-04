
import NiigataCity from "./NiigataCity.js";

const markup = (NiigataCity) => {
    return `
    <div class="container" id="NiigataCity">
    <div class="row">
    <div class="col-lg">
        <h3>${NiigataCity.city}</h3>
        <p> ${NiigataCity.city} is located in  ${NiigataCity.province} prefecture in ${NiigataCity.country}.
        The women are ${NiigataCity.statusOfWomen}. The climate is ${NiigataCity.climate} and the cusine is
        ${NiigataCity.cuisine}. It's ${NiigataCity.haveSubway} that ${NiigataCity.city} has a subway system.</p>
        </div>     
    <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-4">
        ${NiigataCity.imageLeft}
        </div>
        <div class="col-lg-4">
        ${NiigataCity.imageCenter}
        </div>
        <div class="col-lg-4">
        ${NiigataCity.imageRight}
        </div>
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(NiigataCity);
document.body.appendChild(main);