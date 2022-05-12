const Riyadh = {
    city:"Riyadh",
    region:"an-Nafud desert",
    country:"Kingdom of Saudi Arabia",
    statusOfWomen:"covered and beautiful",
    climate:"arid",
    cuisine:"very good",
    haveSubway:true,
    imageLeft:"<img src='../images/Dira_Square.jpg' />",
    imageCenter:"<img src='../images/Riyadh_North_Skyline.jpg' />",
    imageRight:"<img src='../images/Masmak_Fort.jpg' />",

    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,regionFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageCenterPart,imageRightPart) {
     this.metropolis = cityFact;
     this.regionFact = regionFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageCenter = imageCenterPart;
     this.imageRight = imageRightPart;

 },
} 

export default Riyadh;