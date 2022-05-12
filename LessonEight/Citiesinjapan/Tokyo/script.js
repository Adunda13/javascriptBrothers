
import Tokyo from "./Tokyo.js";

const markup = (Tokyo) => {
    return `
    <div class="container" id="tokyo">
    <div class="row">
    <div class="col-lg">
        <h3>${Tokyo.metropolis}</h3>
        <p> ${Tokyo.metropolis} is located in the ${Tokyo.region} region in ${Tokyo.country}.
        The women are ${Tokyo.statusOfWomen}. The climate is ${Tokyo.climate} and the cusine is
        ${Tokyo.cuisine}. It's ${Tokyo.haveSubway} that ${Tokyo.metropolis} has a subway system.</p>
        <p id="links"></p>
        </div>  <hr class="tsLine">
    </div>
        <div class="row">
        <div class="col-lg-6">
        <figure>
        ${Tokyo.imageLeft}
        <figcaption class="figure-caption text-left">Tokyo Skytree</figcaption>

        </figure>
        </div>
        <div class="col-lg-6">
        ${Tokyo.imageRight}
        </div>
    </div>  
    <hr>

    <div class="row">
    <div class="col-lg-6">

    <iframe width="560" height="315" src="https://www.youtube.com/embed/-3C7NE5C6Sw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    

    </div>
    
    <div class="col-lg-6">

    <iframe width="560" height="315" src="https://www.youtube.com/embed/7pLBrg9IWLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
    </div>
    </div>
    </div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Tokyo);
document.body.appendChild(main);