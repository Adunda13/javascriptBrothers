const Seoul = {
    city:"Seoul",
    province:"special city and capital",
    country:"South Korea",
    statusOfWomen:"friendly and beautiful",
    climate:"humid continental",
    cuisine:"world class",
    haveSubway:true,
    imageLeft:"<img src='./images/Gangnam.jpg' />",
    imageRight:"<img src='./images/Yeouido.jpg' />",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,provinceFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageRightPart) {
     this.city = cityFact;
     this.province = provinceFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageRight = imageRightPart;
 },
} 

export default Seoul;