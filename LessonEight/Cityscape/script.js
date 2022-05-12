
import Cityscape from "./Cityscape.js";

const markup = (Cityscape) => {
    return `
    <div class="container" id="cityscape">
    <h1>${Cityscape.welcome}</h1>
    <p>${Cityscape.info}</p>
    <p id="links"></p>
    <div class="row">
        
        <div class="col-lg-6">
        <figure class="figure">
        ${Cityscape.tokyoImage}
        <figcaption class="figure-caption text-left"><h1>Tokyo, Japan</h1> <p>People everywhere</p></figcaption>
        </figure>

        </div>
        <div class="col-lg-6">
        <figure class="figure">
        ${Cityscape.osakaImage}
        <figcaption class="figure-caption text-left">Osaka, Japan</figcaption>
        </figure>
        </div>
    </div>  
    <hr>
    <div class="row">
        
    <div class="col-lg-6">
    <figure class="figure">
    ${Cityscape.kyotoImage}
    <figcaption class="figure-caption text-left">Kyoto, Japan</figcaption>
    </figure>
    </div>
    <div class="col-lg-6">
    <figure class="figure">
    ${Cityscape.niigataImage}
    <figcaption class="figure-caption text-left">Niigata, Japan</figcaption>
    </figure>
    </div>
</div> 
<div class="row">
<div class="col-lg-6">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
<div class="col-lg-6">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>
</div>
  </div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(Cityscape);
document.body.appendChild(main);