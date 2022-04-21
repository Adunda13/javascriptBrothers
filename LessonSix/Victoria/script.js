
import Victoria from "./Victoria.js";

const markup = (Victoria) => {
    return `
    <div class="container" id="victoria">
    <div class="row">
    <div class="col-lg">
        <h3>${Victoria.city}</h3>
        <p> ${Victoria.city} is located in  ${Victoria.province} in ${Victoria.country}.
        The women are ${Victoria.statusOfWomen}. The climate is ${Victoria.climate} and the cusine is
        ${Victoria.cuisine}. It is ${Victoria.haveSubway} that ${Victoria.city} has a subway system.</p>
        </div> <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg">
        ${Victoria.image}
        </div>
    </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Victoria);
document.body.appendChild(main);