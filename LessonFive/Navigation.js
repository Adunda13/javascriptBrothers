import Header from "./Header.js";


const markup = (Header) => {
    return `
    
    <nav class="navbar navbar-dark bg-primary" style="border-radius:0!important;">
    <div class="collapse navbar-collapse" id="navbarText">
      <button type="button" class="btn btn-outline-primary">${Header.home}
      </button>
      <button type="button" class="btn btn-outline-secondary">${Header.barcelona}
      </button>
      <button type="button" class="btn btn-outline-success">${Header.kyoto}
      </button>     
      <button type="button" class="btn btn-outline-danger">${Header.newYorkCity}
      </button> 
      <button type="button" class="btn btn-outline-warning">${Header.seoul}
      </button>
      <button type="button" class="btn btn-outline-warning">${Header.tokyo}
      </button> 
      <button type="button" class="btn btn-outline-info">${Header.vancouver}
      </button>
      <button type="button" class="btn btn-outline-light">${Header.victoria}
      </button>  
  </div>
  </nav>  
    `
}

const main = document.createElement("main");
main.innerHTML = markup(Header);
document.body.appendChild(main);