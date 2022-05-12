
import Honolulu from "./Honolulu.js";

const markup = (Honolulu) => {
    return `
    <div class="container" id="Honolulu">
    <div class="row">
    <div class="col-lg">
        <h3>${Honolulu.city}</h3>
        <p> ${Honolulu.city} is located in the state of  ${Honolulu.state}in the ${Honolulu.country}.
        The women are ${Honolulu.statusOfWomen}. The climate is ${Honolulu.climate} and the cusine is
        ${Honolulu.cuisine}. It's ${Honolulu.haveSubway} that ${Honolulu.city} has a subway system.</p>
    </div> <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-6">
        ${Honolulu.imageLeft}
        </div>
        <div class="col-lg-6">
        ${Honolulu.imageRight}
        </div>
    </div>
    <div class="row">
    <div class="col-lg-6">

    <iframe width="560" height="315" src="https://www.youtube.com/embed/69ICkfywkrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
    <div class="col-lg-6">

    <iframe width="560" height="315" src="https://www.youtube.com/embed/iEXUi-5GlYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>
    </div> 
    </div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Honolulu);
document.body.appendChild(main);