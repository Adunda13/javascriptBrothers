const Navigation = {
   
        home: '<a href="http://127.0.0.1:5500/LessonSix/CityScape/index.html">Home</a>',
        barcelona: '<a href="http://127.0.0.1:5500/LessonSix/Barcelona/index.html">Barcelona</a>' ,
        honolulu: '<a href="http://127.0.0.1:5500/LessonSix/Honolulu/index.html">Honolulu</a>',
        jeddah: '<a href="http://127.0.0.1:5500/LessonSix/Jeddah/index.html">Jeddah</a>',
        kyoto:'<a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Kyoto/index.html">Kyoto</a>',
        niigataCity:'<a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Niigata%20City/index.html">Niigata City</a>',
        osaka:'<a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Osaka/index.html">Osaka</a>',
        seoul:'<a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Seoul/index.html">Seoul</a>',
        singapore:'<a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Singapore/index.html">Singapore</a>',
        tokyo:'<a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Tokyo/index.html">Tokyo</a>',
        riyadh:'<a href="http://127.0.0.1:5500/LessonSix/Riyadh/index.html">Riyadh</a>',
        newYorkCity:' <a href="http://127.0.0.1:5500/LessonSix/NewYorkCity/index.html">New York City</a>',
        vancouver: ' <a href="http://127.0.0.1:5500/LessonSix/Vancouver/index.html">Vancouver</a>',
        victoria: '<a href="http://127.0.0.1:5500/LessonSix/Victoria/index.html">Victoria</a>' , 
        citiesInJapan: 'Cities In Japan<div id="myDropdown" class="dropdown-content"><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Kyoto/index.html">Kyoto</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Niigata%20City/index.html">Niigata City</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Singapore/index.html">Singapore</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Seoul/index.html">Seoul</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Tokyo/index.html">Tokyo</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Osaka/index.html">Osaka</a></div>',
        citiesInAsia: 'Cities In Asia<div id="myDropdown" class="dropdown-content"><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Kyoto/index.html">Kyoto</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Niigata%20City/index.html">Niigata City</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Singapore/index.html">Singapore</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Seoul/index.html">Seoul</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Tokyo/index.html">Tokyo</a><a href="http://127.0.0.1:5500/LessonSix/Citiesinasia/Osaka/index.html">Osaka</a></div>',
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