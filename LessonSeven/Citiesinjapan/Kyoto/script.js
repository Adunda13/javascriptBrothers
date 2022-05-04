
import Kyoto from "./Kyoto.js";

const markup = (Kyoto) => {
    return `
    <div class="container" id="kyoto">
    <div class="row">
    <div class="col-lg">
        <h3>${Kyoto.city}</h3>
        <p> ${Kyoto.city} is located in  ${Kyoto.province} prefecture in ${Kyoto.country}.
        The women are ${Kyoto.statusOfWomen}. The climate is ${Kyoto.climate} and the cusine is
        ${Kyoto.cuisine}. It's ${Kyoto.haveSubway} that ${Kyoto.city} has a subway system.</p>
        </div>     
    <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg">
        ${Kyoto.image}
        </div>
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Kyoto);
document.body.appendChild(main);