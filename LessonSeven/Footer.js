import ReplaceButtonText from "./ReplaceButtonText.js";

const markup = (ReplaceButtonText) => {
    return `
    <div class="footer">
    <div class="container">    
    <h1>So you should get your passport!</h1>
    <hr>

    <div class="row">
    <div class="col-lg-6"> 
    <p>There is a world full of fine, feminine women all over the world! Women in Tokyo are fine as hell and know how to dress and act on a date. You can take them anywhere without them embarrassing you or making you look like a fool. </p>
    <button>${ReplaceButtonText.learnTokyo}</button></div>
    <div class="col-lg-6">
    <p>Women in Niigata are wifeable, feminine, beautiful, friendly and full breasted. They have beautiful milky white smooth skin and smell very nice.</p>
    <button>${ReplaceButtonText.learnNiigataCity}</button>
    </div>
    </div>
    <br>
    <div class="row">
    <div class="col-lg-6">
    <p>The women in Barcelona are friendly and beautiful and know how to be feminine too. Just hang out in the many hot spots there at night and you'll see how they dress when they come out. Forget it, you aren't going back to the U.S..</p>
    <button>${ReplaceButtonText.learnBarcelona}</button></div>
    <div class="col-lg-6">
    <p>Women in New York City are masculine and want to be in control. Many of them sound just like a man when they talk and need to try very hard to behave like a woman. Don't waste your time, they will give you nothing but trouble.</p>
    <button>${ReplaceButtonText.learnNewYorkCity}</button>
    </div></div>
    <br>
    <div class="row">
    <div class="col-lg-6">
    <p>Women in Kyoto are very accomadating and will show you a good time. They are beautiful and like the rest of the women in Japan they are very clean and smell good.</p>
    <button>${ReplaceButtonText.learnKyoto} </button>
    </div>
    <div class="col-lg-6"><p>In Osaka, one of the cities I lived in, the women know how to dress and they are very shy but love a good story and laugh. They are easy going and will never give you any trouble.</p>
    <button>${ReplaceButtonText.leanOsaka}</button>
    </div></div>
    <br>
    <div class="row">
    <div class="col-lg-6"><p>In Seoul you can take a woman out and be surprised at how classy she is. They are beautiful, feminine and know how to dress. They smell nice, and are very sexy. They are also very independent and won't hold back on how they feel.</p>
    <button>${ReplaceButtonText.learnSeoul} </button>
    </div>
    <div class="col-lg-6"><p>When I was in Singapore I met this fine ass Chinese and White girl mix. We ate lunch together where I met her. She was beautiful! I should've made a move on her. I know she was waiting for me to do so too. All over Singapore I met beautiful women. They were friendly and they know how to talk to.</p>
    <button>${ReplaceButtonText.learnSingapore}</button>
    </div></div>
    <br>
    <div class="row">
    <div class="col-lg-6">
    <p>In Honolulu the local girls just like the rest of the state are overrated! I lived there and dated a few and all they really wanted was for me to spend money on them. Many are overweight and have children already. They aren't the girls you think they are.</p>
    <button>${ReplaceButtonText.learnHonolulu}</button>
    </div>
    <div class="col-lg-6"><p>In Jeddah you'll meet and talk to a lot of girls from Africa that are there working as maids, nannys or the like. The Somalian women were absolutely beautiful!</p>
    <button> ${ReplaceButtonText.learnJeddah} </button>
    </div></div>
    <br>
    <div class="row">
    <div class="col-lg-6">
    <p>In Vancouver the women there are nice! They take good care of their bodies too. And they are always on the prowl! You can meet them anywhere! They talk up a good game too. Beware of going any further than a few dates as they have high body counts!</p>
    <button> ${ReplaceButtonText.learnVancouver}</button>
    </div>
    <div class="col-lg-6"><p>Victoria is the spot! Women all over the place, especially coming in from all parts of the world! Take your pick!</p> 
    <button>${ReplaceButtonText.learnVictoria} </button>
    </div></div>   
  
    <br>
    <p>JavaScript Brothers &#169; 2022, All Rights Reserved.</p>

    </div>
    </div>
    
 

    `
}

const footer = document.createElement("footer");
footer.innerHTML = markup(ReplaceButtonText);
document.body.appendChild(footer);