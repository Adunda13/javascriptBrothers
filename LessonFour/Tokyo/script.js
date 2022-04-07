
import Tokyo from "./Tokyo.js";

const markup = (Tokyo) => {
    return `
    <div class="container" id="tokyo">
    <div class="row">
    <div class="col-lg">
        <h3>${Tokyo.metropolis}</h3>
        <p> ${Tokyo.metropolis} is located in the ${Tokyo.region}in ${Tokyo.country}.
        The women are ${Tokyo.statusOfWomen}. The climate is ${Tokyo.climate} and the cusine is
        ${Tokyo.cuisine}. It's ${Tokyo.haveSubway} that ${Tokyo.metropolis} has a subway system.</p>
        <p>Check out other places here: <a href="http://127.0.0.1:5500/LessonFour/Barcelona/index.html">Barcelona</a> and <a href="http://127.0.0.1:5500/LessonFour/Vancouver/index.html">Vancouver</a>       
    </div> </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Tokyo);
document.body.appendChild(main);