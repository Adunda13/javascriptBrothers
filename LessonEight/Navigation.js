const Navigation = {
   
        home: '<a href="http://127.0.0.1:5500/LessonEight/CityScape/index.html">Home</a>',
        barcelona: '<a href="http://127.0.0.1:5500/LessonEight/Barcelona/index.html">Barcelona</a>' ,
        honolulu: '<a href="http://127.0.0.1:5500/LessonEight/Honolulu/index.html">Honolulu</a>',
        jeddah: '<a href="http://127.0.0.1:5500/LessonEight/Jeddah/index.html">Jeddah</a>',
        kyoto:'<a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Kyoto/index.html">Kyoto</a>',
        niigataCity:'<a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Niigata%20City/index.html">Niigata City</a>',
        osaka:'<a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Osaka/index.html">Osaka</a>',
        seoul:'<a href="http://127.0.0.1:5500/LessonEight/Citiesinasia/Seoul/index.html">Seoul</a>',
        singapore:'<a href="http://127.0.0.1:5500/LessonEight/Citiesinasia/Singapore/index.html">Singapore</a>',
        tokyo:'<a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Tokyo/index.html">Tokyo</a>',
        riyadh:'<a href="http://127.0.0.1:5500/LessonEight/Riyadh/index.html">Riyadh</a>',
        newYorkCity:' <a href="http://127.0.0.1:5500/LessonEight/NewYorkCity/index.html">New York City</a>',
        vancouver: ' <a href="http://127.0.0.1:5500/LessonEight/Vancouver/index.html">Vancouver</a>',
        victoria: '<a href="http://127.0.0.1:5500/LessonEight/Victoria/index.html">Victoria</a>' , 
        citiesInAsia: 'Cities In Asia<div id="myDropdown" class="dropdown-content"><a href="http://127.0.0.1:5500/LessonEight/Citiesinasia/Singapore/index.html">Singapore</a><a href="http://127.0.0.1:5500/LessonEight/Citiesinasia/Seoul/index.html">Seoul</a></div>',
        citiesInJapan: 'Cities In Japan<div id="myJapan" class="dropdown-content"><a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Kyoto/index.html">Kyoto</a><a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Niigata%20City/index.html">Niigata City</a><a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Tokyo/index.html">Tokyo</a><a href="http://127.0.0.1:5500/LessonEight/Citiesinjapan/Osaka/index.html">Osaka</a></div>',
    newNav: function(navHome, navBarcelona,navHonolulu,navJeddah,navKyoto,navNiigataCity,navOsaka,navSeoul,navTokyo,navRidyadh,navNewYorkCity,navVancouver,navVictoria,navCitiesInAsia,navCitiesInJapan) {
        this.home = navHome;
        this.barcelona = navBarcelona;
        this.honolulu = navHonolulu;
        this.jeddah = navJeddah;
        this.kyoto = navKyoto;
        this.niigataCity = navNiigataCity;
        this.osaka = navOsaka;
        this.seoul = navSeoul;
        this.tokyo = navTokyo;
        this.riyadh = navRidyadh;
        this.newYorkCity = navNewYorkCity;
        this.vancouver = navVancouver;
        this.victoria = navVictoria;
        this.citiesInAsia = navCitiesInAsia;
        this.citiesInJapan = navCitiesInJapan;
    }
}

export default Navigation;