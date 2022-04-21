const Osaka = {
    city:"Osaka",
    province:"Osaka",
    country:"Japan",
    statusOfWomen:"shy, humurous and beautiful",
    climate:"humid and subtropical",
    cuisine:"world class",
    haveSubway:true,
    imageLeft:"<img src='./images/Nakanoshima_Skyscrapers.jpg' />",
    imageCenter:"<img src='./images/Osaka_Castle.jpg' />",
    imageRight:"<img src='./images/Osaka_Dotonbori_Ebisu_Bridge.jpg' />",

    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,provinceFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageCenterPart,imageRightPart) {
     this.metropolis = cityFact;
     this.provinceFact = provinceFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageCenter = imageCenterPart;
     this.imageRight = imageRightPart;

 },
} 

export default Osaka;