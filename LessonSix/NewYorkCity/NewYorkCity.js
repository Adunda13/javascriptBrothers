const NewYorkCity = {
    city:"New York City",
    state:"New York",
    country:"USA",
    statusOfWomen:"masculine and belligerant",
    climate:"humid and subtropical",
    cuisine:"very Good",
    haveSubway:true,
    image:"<img src='./images/Manhattan.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,regionFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imagePart) {
     this.metropolis = cityFact;
     this.regionFact = regionFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.image = imagePart;
 },
} 

export default NewYorkCity;