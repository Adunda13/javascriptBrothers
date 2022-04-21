const NiigataCity = {
    city:"Niigata City",
    province:"Niigata",
    country:"Japan",
    statusOfWomen:"shy, humurous, kind and beautiful with full breasts",
    climate:"humid and subtropical",
    cuisine:"world class",
    haveSubway:true,
    imageLeft:"<img src='./images/Food_niigata.JPG' />",
    imageCenter:"<img src='./images/Takada_castle.JPG' />",
    imageRight:"<img src='./images/max_toki.JPG' />",

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

export default NiigataCity;