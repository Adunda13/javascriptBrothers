const Barcelona = {
    city:"Barcelona",
    region:"Catalonia",
    country:"Spain",
    statusOfWomen:"Friendly, sexy, and beautiful",
    climate:"Mediterranean",
    cuisine:"Very Good",
    haveSubway:true,
    image:"<img src='./images/Barcelona.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,regionFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imagePart) {
     this.city = cityFact;
     this.regionFact = regionFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.image = imagePart;
 },
} 

export default Barcelona;