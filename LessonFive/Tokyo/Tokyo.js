const Tokyo = {
    metropolis:"Tokyo",
    region:"Kanto",
    country:"Japan",
    statusOfWomen:"shy and beautiful",
    climate:"humid and subtropical",
    cuisine:"world class",
    haveSubway:true,
    imageLeft:"<img src='./images/skyTree.JPG' />",
    imageRight:"<img src='./images/ShinjukuNight.jpg'/>",
    toggleHaveSubway: function(haveSubwayStatus){
    this.haveSubway = haveSubwayStatus;
},
 newFacts: function(cityFact,regionFact,countryFact,statusOfWomenFact, climateFact,cusineFact,imageLeftPart,imageRightPart) {
     this.metropolis = cityFact;
     this.regionFact = regionFact;
     this.country = countryFact;
     this.statusOfWomen = statusOfWomenFact;
     this.climate = climateFact;
     this.cuisine = cusineFact;
     this.imageLeft = imageLeftPart;
     this.imageRight = imageRightPart;
 },
} 

export default Tokyo;