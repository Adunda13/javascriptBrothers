
import NewYorkCity from "./NewYorkCity.js";

const markup = (NewYorkCity) => {
    return `
    <div class="container" id="nyc">
    <div class="row">
    <div class="col-lg">
        <h3>${NewYorkCity.city}</h3>
        <p> ${NewYorkCity.city} is located in the state of  ${NewYorkCity.state} in the ${NewYorkCity.country}.
        The women are ${NewYorkCity.statusOfWomen}. The climate is ${NewYorkCity.climate} and the cusine is
        ${NewYorkCity.cuisine}. It's ${NewYorkCity.haveSubway} that ${NewYorkCity.city} has a subway system.</p>
        </div>    <hr class="tsLine">
        </div>
            <div class="row">
            <div class="col-lg">
            ${NewYorkCity.image}
            </div>
        </div>
        </div>    `
}

const main = document.createElement("main");
main.innerHTML = markup(NewYorkCity);
document.body.appendChild(main);