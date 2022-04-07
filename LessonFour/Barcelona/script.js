
import Barcelona from "./Barcelona.js";

const markup = (Barcelona) => {
    return `
    <div class="container" id="barcelona">
    <div class="row">
    <div class="col-lg">
        <h3>${Barcelona.city}</h3>
        <p>${Barcelona.city} is located in ${Barcelona.region} in ${Barcelona.country}.
        The women are ${Barcelona.statusOfWomen}. The climate is ${Barcelona.climate} and the cusine is
        ${Barcelona.cuisine}. It's ${Barcelona.haveSubway} that ${Barcelona.city} has a subway system.
        </p>
        <p>Check out other places here: <a href="http://127.0.0.1:5500/LessonFour/Tokyo/index.html">Tokyo</a> and <a href="http://127.0.0.1:5500/LessonFour/Vancouver/index.html">Vancouver</a>       
    </div> </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Barcelona);
document.body.appendChild(main);