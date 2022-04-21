const Vancouver = {
    city:"Vancouver",
    province:"British Columbia",
    country:"Canada",
    statusOfWomen:"Beautiful",
    climate:"temperate",
    cuisine:"Very Good",
    haveSubway:true,
    imageLeft:"<img src='./images/HotelVancouver.jpg' />",
    imageRight:"<img src='./images/TheSteamClock.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,provinceFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageRightPart) {
     this.city = cityFact;
     this.provinceFact = provinceFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageRight = imageRightPart;
 },
} 

export default Vancouver;