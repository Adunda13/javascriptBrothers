const Vancouver = {
    city:"Vancouver",
    province:"British Columbia",
    country:"Canada",
    statusOfWomen:"Beautiful",
    climate:"Temperate",
    cuisine:"Very Good",
    haveSubway:true,
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,provinceFact,countryFact,statusOfWomenFact, climateFact,cusineFact,) {
     this.city = cityFact;
     this.provinceFact = provinceFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
 },
} 

export default Vancouver;