
import MacBook from "./Macbook.js";

const markup = (Macbook) => {
    return `
    <div class="container">
    <div class="row">
    <div class="col-lg">
        <h3>${Macbook.name}</h3>
        <ul>
        <li>Size:${Macbook.size}</li>
        <li>Color:${Macbook.color}</li>
        <li>VPN:${Macbook.apps.vpn}</li>
        <li>Media:${Macbook.apps.media}</li>
        <li>Browser:${Macbook.apps.browser}</li>
        <li>Photo Editor:${Macbook.apps.designer}</li>
        <li>Text Editor:${Macbook.apps.textEditor}</li>
        <li>Lid:${Macbook.lidOpen ? "Open" : "Closed"}</li>
        </ul>
    </div> </div></div>   `
}

const main = document.createElement("main");
main.innerHTML = markup(MacBook);
document.body.appendChild(main);