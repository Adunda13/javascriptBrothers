const Singapore = {
    city:"Singapore",
    region:"maritme Southeast Asia",
    country:"Singapore",
    statusOfWomen:"friendly, tall, multilingual, multicultural, beautiful and well-educated",
    climate:"tropical rainforest",
    cuisine:"world class",
    haveSubway:true,
    imageLeft:"<img src='./images/Krung_Thep_Bridge.jpg' />",
    imageRight:"<img src='./images/Singapore_Merlion.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,regionFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageRightPart) {
     this.city = cityFact;
     this.region = regionFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageRight = imageRightPart;
 },
} 

export default Singapore;