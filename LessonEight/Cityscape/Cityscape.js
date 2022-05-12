const Cityscape = {
    welcome:"Welcome to my favorite cities in the entire world!",
    info:"This is just something I put together to have fun with our JavaScript Brothers class",
    image:"<img src='./images/cityscape.jpg'/>", 
    tokyoImage: "<img src='../images/Shinjuku.jpg'/>",
    osakaImage: "<img src='../images/Osaka_Castle.jpg'/>",
    kyotoImage:"<img src='../images/KyotoStation.jpg' />", 
    niigataImage:"<img src='../images/Takada_castle.JPG'/>",
    singaporeImage:"",
    seoulImage:"",
    honoluluImage:"",
    jeddahImage:"",
    riyadhImage:"",
    vancouverImage:"",
    victoriaImage:"",
    barcelonaImage:"",
    willTravel:true,
    togglewillTravel: function(willTravelStatus){
    this.willTravel = willTravelStatus;
},
 newFacts: function(welcomePart,infoPart,imagePart,tokyoImagePart,osakaImagePart) {
     this.welcome = welcomePart; 
     this.info = infoPart;
     this.image = imagePart;
     this.tokyoImage = tokyoImagePart;
     this.osakaImage = osakaImagePart;
    
 },
} 

export default Cityscape;