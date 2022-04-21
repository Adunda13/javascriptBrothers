const Honolulu = {
    city:"Honolulu",
    state:"Hawaii",
    country:"USA",
    statusOfWomen:"Overrated",
    climate:"semi-arid",
    cuisine:"Very Good",
    haveSubway:false,
    imageLeft:"<img src='./images/Diamond_Head_Hawaii.jpg' />",
    imageRight:"<img src='./images/Honolulu-Hale.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,stateFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageRightPart) {
     this.city = cityFact;
     this.state = stateFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageRight = imageRightPart;
 },
} 

export default Honolulu;