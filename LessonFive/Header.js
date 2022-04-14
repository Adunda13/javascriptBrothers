const Header = {
   
        home: '<a href="http://127.0.0.1:5500/LessonFive/CityScape/index.html">Home</a>',
        barcelona: '<a href="http://127.0.0.1:5500/LessonFive/Barcelona/index.html">Barcelona</a>' ,
        kyoto: ' <a href="http://127.0.0.1:5500/LessonFive/Kyoto/index.html">Kyoto</a>',
        newYorkCity:' <a href="http://127.0.0.1:5500/LessonFive/NewYorkCity/index.html">New York City</a>',
        seoul:' <a href="http://127.0.0.1:5500/LessonFive/Seoul/index.html">Seoul</a>',
        tokyo: '<a href="http://127.0.0.1:5500/LessonFive/Tokyo/index.html">Tokyo</a>',
        vancouver: ' <a href="http://127.0.0.1:5500/LessonFive/Vancouver/index.html">Vancouver</a>',
        victoria: ' <a href="http://127.0.0.1:5500/LessonFive/Victoria/index.html">Victoria</a>' ,      
    
    newNav: function(navHome, navBarcelona,navKyoto,navNewYorkCity,navSeoul,navTokyo,navVancouver,navVictoria) {
        this.home = navHome;
        this.barcelona = navBarcelona;
        this.kyoto = navKyoto;
        this.newYorkCity = navNewYorkCity;
        this.seoul = navSeoul;
        this.tokyo = navTokyo;
        this.vancouver = navVancouver;
        this.victoria = navVictoria;
    }
}

export default Header;