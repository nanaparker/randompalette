var clicks = 0;
var colors = ["#00FFFF", "#8A2BE2", "#F0FFFF", "#DC143C","#860C19", "#DC763E",
            "#BDB76B", "#4197AE", "#F57E92", "#B0272F", "#F0C986", "#5F8671",
            "#53B7E8", "#C7EAFC", "#3A801C", "#FFF200", "#99CA84", "#FFD8A3", 
            "#AA8B2D", "#4F0001"];


function changeMe(){

    var game = document.getElementById("para");

    document.getElementsByName("test")[0].style.backgroundColor = colors[clicks];
    game.innerHTML = colors[clicks];

    clicks++;

    if (clicks === colors.length){
        clicks = 0;
    }

}