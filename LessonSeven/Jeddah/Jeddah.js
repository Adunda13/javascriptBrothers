const Jeddah = {
    city:"Jeddah",
    region:"Hejaz",
    country:"Kingdom of Saudi Arabia",
    statusOfWomen:"covered and beautiful",
    climate:"arid",
    cuisine:"very good",
    haveSubway:false,
    imageLeft:"<img src='./images/Jeddah_Fahne.JPG' />",
    imageCenter:"<img src='./images/Old_Jeddah_Market.jpg' />",
    imageRight:"<img src='./images/Old_Jeddah.jpg' />",

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

export default Jeddah;