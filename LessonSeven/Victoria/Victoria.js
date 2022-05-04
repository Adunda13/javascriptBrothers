const Victoria = {
    city:"Victoria",
    province:"British Columbia",
    country:"Canada",
    statusOfWomen:"friendly and beautiful",
    climate:"Mediterranean",
    cuisine:"very Good",
    haveSubway:false,
    image:"<img src='./images/TheEmpress.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,provinceFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imagePart) {
     this.city = cityFact;
     this.province = provinceFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.image = imagePart;
 },
} 

export default Victoria;