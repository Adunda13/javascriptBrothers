const CitiesInJapan = {
    welcome:"Welcome to my favorite cities in Asia!",
    info:"This is just something I put together to have fun with our JavaScript Brothers class",
    image:"<img src='./images/cityscape.jpg'/>",  
    willTravel:true,
    togglewillTravel: function(willTravelStatus){
    this.willTravel = willTravelStatus;
},
 newFacts: function(welcomePart,infoPart,imagePart) {
     this.welcome = welcomePart; 
     this.info = infoPart;
     this.image = imagePart;
    
 },
} 

export default CitiesInJapan;