
import travelBag from "./travelbag.js";

const markup = (travelBag) => {
    return `
    <div>
        <h3>${travelBag.name}</h3>
        <ul>
        <li>Volume:${travelBag.volume}</li>
        <li>Color:${travelBag.color}</li>
        <li>Length:${travelBag.dimensions.length}</li>
        <li>Height:${travelBag.dimensions.height}</li>
        <li>Width:${travelBag.dimensions.width}</li>
        <li>Bag contents:${travelBag.box.name}</li>
        <li>Box color:${travelBag.box.color}</li>
        <li>Box shape:${travelBag.box.shape}</li>
        <li>Box size:${travelBag.box.size}</li>
        <li>Box contents:${travelBag.box.content}</li>
        <li>Zipper:${travelBag.zipperOpen ? "Open" : "Closed"}</li>
        </ul>
    </div>    `
}

const main = document.createElement("main");
main.innerHTML = markup(travelBag);
document.body.appendChild(main);