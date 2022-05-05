import Navigation from "./Navigation.js";


const markup = (Navigation) => {
    return `

    <nav class="navbar navbar-dark bg-primary" style="border-radius:0!important;">
    <button type="button" class="btn">${Navigation.home}</button>
    <button type="button" class="btn"> ${Navigation.barcelona}</button>
    <button onclick="inAsia()" type="button" class="dropbtn btn">${Navigation.citiesInAsia}</button>
    <button onclick="inJapan()" type="button" class="dropbtn btn">${Navigation.citiesInJapan}</button>
    <button type="button" class="btn">${Navigation.honolulu}</button>
    <button type="button" class="btn">${Navigation.jeddah}</button>   
    <button type="button" class="btn">${Navigation.newYorkCity}</button> 
    <button type="button" class="btn">${Navigation.riyadh}</button>   
    <button type="button" class="btn">${Navigation.vancouver}</button>    
    <button type="button" class="btn">${Navigation.victoria}</button>       
    </nav>  
    `
}

const main = document.createElement("main");
main.innerHTML = markup(Navigation);
document.body.appendChild(main);