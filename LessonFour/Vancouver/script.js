
import Vancouver from "./Vancouver.js";

const markup = (Vancouver) => {
    return `
    <div class="container" id="vancouver">
    <div class="row">
    <div class="col-lg">
        <h3>${Vancouver.city}</h3>
        <p> ${Vancouver.city} is located in the ${Vancouver.province}in ${Vancouver.country}.
        The women are ${Vancouver.statusOfWomen}. The climate is ${Vancouver.climate} and the cusine is
        ${Vancouver.cuisine}. It's ${Vancouver.haveSubway} that ${Vancouver.city} has a subway system.</p>
        <p>Check out other places here: <a href="http://127.0.0.1:5500/LessonFour/Barcelona/index.html">Barcelona</a> and <a href="http://127.0.0.1:5500/LessonFour/Tokyo/index.html">Tokyo</a>
        
    </div> </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Vancouver);
document.body.appendChild(main);