const Kyoto = {
    city:"Kyoto",
    province:"Kyoto",
    country:"Japan",
    statusOfWomen:"shy and beautiful",
    climate:"humid and subtropical",
    cuisine:"world class",
    haveSubway:true,
    image:"<img src='./images/KyotoStation.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,provinceFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imagePart) {
     this.metropolis = cityFact;
     this.provinceFact = provinceFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.image = imagePart;
 },
} 

export default Kyoto;